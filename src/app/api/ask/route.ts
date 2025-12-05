import { NextRequest, NextResponse } from "next/server";
import { StateGraph, END, Annotation } from "@langchain/langgraph";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";


const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  temperature: 0.2, 
  apiKey: process.env.GOOGLE_API_KEY, 
});


const DOCTORS_DB = {
  dr_ridam: {
    id: "dr_ridam",
    name: "Dr. Ridam Jain",
    specialty: "MDS Orthodontist & Cosmetic Dentist",
    image_url: "/ridam.jpeg", 
    short_bio: "15+ years of experience specializing in smile makeovers and alignment.",
  },
  dr_tanmay: {
    id: "dr_tanmay",
    name: "Dr. Tanmay Sharma",
    specialty: "MDS Orthodontist & Implantologist",
    image_url: "/tanmay.jpeg", 
    short_bio: "20+ years of experience specializing in implants and complex cases.",
  }
};


const AgentState = Annotation.Root({
  user_message: Annotation<string>(),
  chat_history: Annotation<string[]>(),
  intent: Annotation<string>(),
  selected_doctor_id: Annotation<string>(),
  doctor_data: Annotation<any>(),
  final_response: Annotation<any>(),
});



async function intentClassifierNode(state: typeof AgentState.State) {
  const msg = state.user_message.trim();
  const history = (state.chat_history || []).slice(-5).join("\n");


  if (msg === "INIT_CHAT") return { intent: "welcome" };

  if (msg.includes("ACTION_NAVIGATE_BOOKING")) return { intent: "booking_redirect" };
  if (msg.includes("ACTION_DETAILS")) {
    const docId = msg.split("_").slice(2).join("_");
    return { intent: "doctor_details", selected_doctor_id: docId };
  }


  const systemPrompt = `
    You are the receptionist AI for Old Glory Dental Clinic. 
    Classify the user's intent into exactly one of these categories:
    [find_doctor, services_list, emergency, booking_redirect, general_chat]

    Context:
    ${history}

    Definitions:
    - 'find_doctor': User asks to see a doctor, dentist, surgeon, or asks "who is available?".
    - 'services_list': User EXPLICITLY asks for a list of services (e.g., "what treatments do you do", "show services", "menu").
    - 'emergency': User mentions pain, blood, accident, broken tooth, swelling, or urgency.
    - 'booking_redirect': User explicitly says they want to book, schedule, or make an appointment.
    - 'general_chat': User asks SPECIFIC questions about treatments (e.g., "what is cosmetic", "how much is rct"), payments, location, timings, or small talk.

    Input: "${msg}"
    
    Return ONLY the category word.
  `;

  try {
    const response = await llm.invoke(systemPrompt);
    const intent = response.content.toString().trim().toLowerCase();
    
    // Fallback if LLM returns hallucinations
    const validIntents = ["find_doctor", "services_list", "emergency", "booking_redirect", "general_chat"];
    return { intent: validIntents.includes(intent) ? intent : "general_chat" };
  } catch (e) {
    console.error("Classifier Error:", e);
    return { intent: "general_chat" };
  }
}

async function generalChatNode(state: typeof AgentState.State) {
  const msg = state.user_message;
  const history = (state.chat_history || []).join("\n");

  // Production-grade Prompt: Old Glory Persona
  const prompt = `
You are the friendly AI Assistant for Old Glory Dental Clinic in Jaipur.
Persona: Warm, empathetic ,friendly, and professional.

Goal: Make the user feel understood, answer their query concisely, and gently guide them to book an appointment.

Language Protocol:
- Match Language: If user speaks Hindi/Hinglish -> Reply in Hindi. Else -> English.
- Brevity: Max 2-3 sentences. No long paragraphs.

Strict Rules:
- Location: If asked for location, address, or "where are you", USE THIS EXACT FORMAT:
  "We are located at: 124/505, Vikramaditya Marg 80 ft road, Mansarovar, Jaipur.
   👉 [View on Maps](https://www.google.com/maps?q=old+glory+jaipur)
   
   Shall we book a visit?"
- Formatting: Do NOT use markdown bold syntax (double asterisks). Use plain text only.

Clinic Knowledge Base:
- Doctors: Dr. Ridam Jain (Orthodontist/Cosmetic) & Dr. Tanmay Sharma (Implants).
- Location: 124/505, Vikramaditya Marg 80 ft road, Mansarovar, Jaipur.
- Timings: Mon–Sat 10:30 AM – 8:00 PM.
- Contact: +91 88757 00500.
- Services: 
  - Cosmetic (Smile Makeovers, Veneers, Whitening)
  - Orthodontics (Braces, Invisalign)
  - Implants & Root Canals
  - Kids Dentistry

Context:
${history}

User: "${msg}"

Response Guidelines:
1. Empathize first.
2. Answer the specific question clearly using the knowledge base.
3. Call to Action: "Shall we book a visit?"
`;

  const response = await llm.invoke(prompt);

  return {
    final_response: {
      type: "text",
      // Ensure no bold syntax leaks through
      text: response.content.toString().replace(/\*\*/g, ""),
    },
  };
}

// --- STANDARD NODES ---

function welcomeMessageNode() {
  return {
    final_response: {
      type: "welcome_card",
      text: "Namaste! 🙏 Welcome to Old Glory Dental Clinic.\nI'm here to ensure your smile stays healthy. How can I help you today?",
      buttons: [
        { label: "Book Appointment", payload: "ACTION_NAVIGATE_BOOKING" },
        { label: "Meet Our Doctors", payload: "Who are the doctors?" },
        { label: "Our Treatments", payload: "What treatments do you do?" },
        { label: "Emergency", payload: "I have an emergency" },
      ],
    },
  };
}

function retrieveDoctorProfileNode(state: typeof AgentState.State) {
  // Logic: Show both doctors since Old Glory has two key specialists
  const ridam = DOCTORS_DB.dr_ridam;
  const tanmay = DOCTORS_DB.dr_tanmay;

  return {
    // We set a default doctor ID just in case flow continues, but the card shows both
    selected_doctor_id: ridam.id,
    final_response: {
      type: "card",
      text: `👨‍⚕️ Meet Our Specialists:\n\n1. ${ridam.name}\n${ridam.specialty}\n\n2. ${tanmay.name}\n${tanmay.specialty}`,
      image: ridam.image_url, // You can choose one primary image or a collage
      buttons: [
        { label: "Details: Dr. Ridam", payload: `ACTION_DETAILS_dr_ridam` },
        { label: "Details: Dr. Tanmay", payload: `ACTION_DETAILS_dr_tanmay` },
        { label: "Book Visit", payload: "ACTION_NAVIGATE_BOOKING" },
      ],
    },
  };
}

function retrieveDoctorDetailsNode(state: typeof AgentState.State) {
  // Robust fallback: If ID is missing/invalid, default to Dr. Ridam
  const docId = state.selected_doctor_id || "dr_ridam";
  // @ts-ignore
  const doc = DOCTORS_DB[docId] || DOCTORS_DB.dr_ridam;

  return {
    final_response: {
      type: "card",
      text: `${doc.name}\n${doc.specialty}\n\n${doc.short_bio}\n\nAvailability: Mon-Sat (10:30 AM - 8 PM)`,
      buttons: [{ label: `Book with ${doc.name}`, payload: "ACTION_NAVIGATE_BOOKING" }],
    },
  };
}

function bookingRedirectNode() {
  return {
    final_response: { 
      type: "text", 
      text: "To book your appointment, please choose an option below:",
      buttons: [
        { label: "Go to Booking Page", payload: "/book" },
        { label: "Book on WhatsApp", payload: "https://wa.me/918875700500?text=I%20would%20like%20to%20book%20an%20appointment" }
      ]
    },
  };
}

function serviceInfoNode() {
  return {
    final_response: {
      type: "text",
      text: "We specialize in:\n\n✨ Cosmetic: Smile Makeovers & Veneers\n🦷 Restorative: Painless Root Canals & Implants\n⚙️ Ortho: Braces & Aligners\n🛡️ General: Laser Dentistry & Kids Care\n\nDr. Ridam & Dr. Tanmay ensure every procedure is gentle.",
      buttons: [{ label: "Book Checkup", payload: "ACTION_NAVIGATE_BOOKING" }],
    },
  };
}

function emergencyNode() {
  return {
    final_response: {
      type: "text",
      text: "🚨 We are here for you.\n\nIf you are in pain, please visit us in Mansarovar immediately or call us.\n\n📍 [Get Directions](https://www.google.com/maps?q=old+glory+jaipur)\n📞 +91 88757 00500",
      buttons: [
        { label: "Call Now", payload: "tel:+918875700500" },
        { label: "Book Urgent Slot", payload: "ACTION_NAVIGATE_BOOKING" }
      ],
    },
  };
}

// --- WORKFLOW CONSTRUCTION ---

const workflow = new StateGraph(AgentState)
  .addNode("classifier", intentClassifierNode)
  .addNode("welcome", welcomeMessageNode)
  .addNode("find_doctor", retrieveDoctorProfileNode)
  .addNode("doctor_details", retrieveDoctorDetailsNode)
  .addNode("booking_redirect", bookingRedirectNode) 
  .addNode("services", serviceInfoNode)
  .addNode("emergency", emergencyNode)
  .addNode("general", generalChatNode);

// Conditional Logic
const routeIntent = (state: typeof AgentState.State) => {
  const intentMap: Record<string, string> = {
    welcome: "welcome",
    find_doctor: "find_doctor",
    doctor_details: "doctor_details",
    booking_redirect: "booking_redirect",
    services_list: "services", 
    emergency: "emergency",
    general_chat: "general",
  };
  return intentMap[state.intent || "general_chat"] || "general";
};

workflow.addEdge("__start__", "classifier");
workflow.addConditionalEdges("classifier", routeIntent);

// All nodes terminate at END
["welcome", "find_doctor", "doctor_details", "booking_redirect", "services", "emergency", "general"].forEach((node:any) => {
  workflow.addEdge(node, END);
});

const appGraph = workflow.compile();

// --- API HANDLER ---
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, history, question } = body; // Support both 'message' and 'question' keys

    const userMessage = message || question;
    const chatHistory = Array.isArray(history) ? history : [];

    const result = await appGraph.invoke({
      user_message: String(userMessage),
      chat_history: chatHistory,
    });

    return NextResponse.json(result.final_response);

  } catch (error) {
    console.error("Chat Graph Error:", error);
    return NextResponse.json(
      { 
        type: "text", 
        text: "I'm having trouble connecting to the server. Please call us directly at +91 88757 00500 for assistance." 
      },
      { status: 500 }
    );
  }
}