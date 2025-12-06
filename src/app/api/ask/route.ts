import { NextRequest, NextResponse } from "next/server";
import { StateGraph, END, Annotation } from "@langchain/langgraph";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { PineconeStore } from "@langchain/pinecone";
import { Pinecone as PineconeClient } from "@pinecone-database/pinecone";



const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  temperature: 0.4,
  apiKey: process.env.GOOGLE_API_KEY,
});

const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "text-embedding-004",
  apiKey: process.env.GOOGLE_API_KEY,
});

let vectorStore: PineconeStore | null = null;

async function initializePinecone() {
  if (!vectorStore) {
    try {
      const pinecone = new PineconeClient({
        apiKey: process.env.PINECONE_API_KEY!,
      });
      const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX_NAME!);
      vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
        pineconeIndex,
        namespace: "dental-info",
      });
      console.log("✅ Pinecone connected");
    } catch (error) {
      console.error("❌ Pinecone initialization failed:", error);
    }
  }
  return vectorStore;
}



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
  },
};



const AgentState = Annotation.Root({
  user_message: Annotation<string>(),
  chat_history: Annotation<Array<{ role: string; content: string }>>({
    reducer: (existing, update) => existing.concat(update),
    default: () => [],
  }),
  intent: Annotation<string>(),
  selected_doctor_id: Annotation<string>(),
  context_from_pinecone: Annotation<string>(),
  user_name: Annotation<string>(),
  user_phone: Annotation<string>(),
  booking_step: Annotation<string>(),
  final_response: Annotation<any>(),
});



function extractUserName(msg: string, history: Array<{ role: string; content: string }>): string {
  const patterns = [
    /my name (?:is )?([a-zA-Z]{2,15})/i,
    /i(?:'m| am) ([a-zA-Z]{2,15})/i,
    /call me ([a-zA-Z]{2,15})/i,
    /this is ([a-zA-Z]{2,15})/i,
  ];

  for (const pattern of patterns) {
    const match = msg.match(pattern);
    if (match && match[1]) {
      const name = match[1];
      const commonWords = ['going', 'feeling', 'doing', 'here', 'there', 'what', 'when', 'where'];
      if (!commonWords.includes(name.toLowerCase())) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      }
    }
  }

  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i].role === "user") {
      for (const pattern of patterns) {
        const match = history[i].content.match(pattern);
        if (match && match[1]) {
          return match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase();
        }
      }
    }
  }

  return "";
}



async function intentClassifierNode(state: typeof AgentState.State) {
  const msg = state.user_message.trim();

  if (msg === "INIT_CHAT") return { intent: "welcome" };
  if (msg.includes("ACTION_NAVIGATE_BOOKING")) return { intent: "booking_redirect" };
  if (msg.includes("ACTION_DETAILS")) {
    const docId = msg.split("_").slice(2).join("_");
    return { intent: "doctor_details", selected_doctor_id: docId };
  }

  const recentHistory = state.chat_history
    .slice(-6)
    .map(m => `${m.role}: ${m.content}`)
    .join("\n");

  const classifierPrompt = `
You are classifying user intent for Old Glory Dental Clinic.

Recent conversation:
${recentHistory}

Current user message: "${msg}"

Classify into ONE category:
- 'find_doctor': Wants to know about doctors/dentists
- 'services_list': Explicitly asks for services list/menu
- 'emergency': Mentions pain, urgent, broken tooth, swelling, bleeding
- 'booking_redirect': Wants to book/schedule appointment
- 'general_chat': Everything else (questions, greetings, casual talk)

Return ONLY the category word.
`;

  try {
    const response = await llm.invoke(classifierPrompt);
    const intent = response.content.toString().trim().toLowerCase();
    const validIntents = ["find_doctor", "services_list", "emergency", "booking_redirect", "general_chat"];
    return { intent: validIntents.includes(intent) ? intent : "general_chat" };
  } catch (e) {
    console.error("❌ Intent Classifier Error:", e);
    return { intent: "general_chat" };
  }
}

async function ragRetrieverNode(state: typeof AgentState.State) {
  try {
    const store = await initializePinecone();
    if (!store) {
      console.log("⚠️ Pinecone not available");
      return { context_from_pinecone: "" };
    }

    const query = state.user_message;
    console.log(`🔍 Searching Pinecone: "${query}"`);

    const results = await store.similaritySearch(query, 3);
    
    if (results.length === 0) {
      console.log("⚠️ No results from Pinecone");
      return { context_from_pinecone: "" };
    }

    const context = results
      .map(doc => doc.pageContent.trim())
      .join("\n\n---\n\n");

    console.log(` Retrieved ${results.length} documents (${context.length} chars)`);
    return { context_from_pinecone: context };
  } catch (error) {
    console.error("Pinecone Retrieval Error:", error);
    return { context_from_pinecone: "" };
  }
}

async function generalChatNode(state: typeof AgentState.State) {
  const msg = state.user_message;
  const history = state.chat_history || [];
  const pineconeContext = state.context_from_pinecone || "";
  
  const detectedName = extractUserName(msg, history);
  const userName = state.user_name || detectedName;

  const formattedHistory = history
    .slice(-8)
    .map(m => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
    .join("\n");

  const prompt = `
You are the friendly AI receptionist for Old Glory Dental Clinic in Jaipur.

Your Personality:
- Warm, empathetic, conversational, professional
- Talk like a real person, not a robot
- Remember details from the conversation
- Use natural language, be helpful

${userName ? `Important: User's name is ${userName}. Use it naturally!\n` : ""}

${pineconeContext ? `Knowledge Base (use this to answer questions):\n${pineconeContext}\n` : ""}

Basic Clinic Info:
- Doctors: Dr. Ridam Jain (Orthodontist/Cosmetic, 15+ yrs) & Dr. Tanmay Sharma (Implantologist, 20+ yrs)
- Location: 124/505, Vikramaditya Marg, Mansarovar, Jaipur
- Hours: Mon–Sat 10:30 AM–2 PM & 6–8 PM (Closed Sundays)
- Contact: +91 88757 00500, drtanmaysharma@gmail.com, www.oldglory.in

Conversation History:
${formattedHistory}

User's message: "${msg}"

Rules:
1. REMEMBER previous messages - if user said their name, use it!
2. If they ask "what's my name?", check conversation history
3. Answer questions using Knowledge Base when available
4. Match user's language (Hindi/Hinglish or English)
5. Keep responses 2-3 sentences, conversational
6. NO bold formatting (**text**)
7. End with gentle CTA like "Shall we book a visit?"
8. For location: "We are located at: 124/505, Vikramaditya Marg, Mansarovar, Jaipur. 👉 [View on Maps](https://www.google.com/maps?q=old+glory+jaipur)"

Respond naturally:
`;

  const response = await llm.invoke(prompt);
  const responseText = response.content.toString().replace(/\*\*/g, "");

  return {
    user_name: userName,
    chat_history: [
      { role: "user", content: msg },
      { role: "assistant", content: responseText }
    ],
    final_response: {
      type: "text",
      text: responseText,
    },
  };
}

function welcomeMessageNode() {
  const welcomeText = "Namaste! 🙏 Welcome to Old Glory Dental Clinic.\nI'm here to ensure your smile stays healthy. How can I help you today?";
  
  return {
    chat_history: [{ role: "assistant", content: welcomeText }],
    final_response: {
      type: "welcome_card",
      text: welcomeText,
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
  const ridam = DOCTORS_DB.dr_ridam;
  const tanmay = DOCTORS_DB.dr_tanmay;
  const responseText = `👨‍⚕️ Meet Our Specialists:\n\n1. ${ridam.name}\n${ridam.specialty}\n\n2. ${tanmay.name}\n${tanmay.specialty}`;

  return {
    selected_doctor_id: ridam.id,
    chat_history: [
      { role: "user", content: state.user_message },
      { role: "assistant", content: responseText }
    ],
    final_response: {
      type: "card",
      text: responseText,
      image: ridam.image_url,
      buttons: [
        { label: "Details: Dr. Ridam", payload: `ACTION_DETAILS_dr_ridam` },
        { label: "Details: Dr. Tanmay", payload: `ACTION_DETAILS_dr_tanmay` },
        { label: "Book Visit", payload: "ACTION_NAVIGATE_BOOKING" },
      ],
    },
  };
}

function retrieveDoctorDetailsNode(state: typeof AgentState.State) {
  const docId = state.selected_doctor_id || "dr_ridam";
  // @ts-ignore
  const doc = DOCTORS_DB[docId] || DOCTORS_DB.dr_ridam;
  const responseText = `${doc.name}\n${doc.specialty}\n\n${doc.short_bio}\n\nAvailability: Mon-Sat (10:30 AM - 2 PM & 6 PM - 8 PM)`;

  return {
    chat_history: [
      { role: "user", content: state.user_message },
      { role: "assistant", content: responseText }
    ],
    final_response: {
      type: "card",
      text: responseText,
      buttons: [
        { label: `Book with ${doc.name}`, payload: "ACTION_NAVIGATE_BOOKING" },
      ],
    },
  };
}

// UPDATED: Simple inline booking form
function bookingRedirectNode(state: typeof AgentState.State) {
  const responseText = "Great! Let me help you book an appointment. Please provide:";
  
  return {
    chat_history: [
      { role: "user", content: state.user_message },
      { role: "assistant", content: responseText }
    ],
    final_response: {
      type: "booking_form",
      text: responseText,
      fields: [
        {
          id: "name",
          label: "Your Name",
          type: "text",
          placeholder: "Enter your full name",
          required: true
        },
        {
          id: "phone",
          label: "Phone Number",
          type: "tel",
          placeholder: "+91 XXXXX XXXXX",
          required: true,
          pattern: "[0-9]{10}"
        }
      ],
      submitButton: "Book Appointment"
    },
  };
}

function serviceInfoNode(state: typeof AgentState.State) {
  const responseText = "We specialize in:\n\n✨ Cosmetic: Smile Makeovers & Veneers\n🦷 Restorative: Painless Root Canals & Implants\n⚙️ Ortho: Braces & Aligners\n🛡️ General: Laser Dentistry & Kids Care\n\nDr. Ridam & Dr. Tanmay ensure every procedure is gentle.";
  
  return {
    chat_history: [
      { role: "user", content: state.user_message },
      { role: "assistant", content: responseText }
    ],
    final_response: {
      type: "text",
      text: responseText,
      buttons: [{ label: "Book Checkup", payload: "ACTION_NAVIGATE_BOOKING" }],
    },
  };
}

function emergencyNode(state: typeof AgentState.State) {
  const responseText = "🚨 We are here for you.\n\nIf you are in pain, please visit us in Mansarovar immediately or call us.\n\n📍 [Get Directions](https://www.google.com/maps?q=old+glory+jaipur)\n📞 +91 88757 00500";
  
  return {
    chat_history: [
      { role: "user", content: state.user_message },
      { role: "assistant", content: responseText }
    ],
    final_response: {
      type: "text",
      text: responseText,
      buttons: [
        { label: "Call Now", payload: "tel:+918875700500" },
        { label: "Book Urgent Slot", payload: "ACTION_NAVIGATE_BOOKING" }
      ],
    },
  };
}



const workflow = new StateGraph(AgentState)
  .addNode("classifier", intentClassifierNode)
  .addNode("retriever", ragRetrieverNode)
  .addNode("welcome", welcomeMessageNode)
  .addNode("find_doctor", retrieveDoctorProfileNode)
  .addNode("doctor_details", retrieveDoctorDetailsNode)
  .addNode("booking_redirect", bookingRedirectNode)
  .addNode("services", serviceInfoNode)
  .addNode("emergency", emergencyNode)
  .addNode("general", generalChatNode);

const routeIntent = (state: typeof AgentState.State) => {
  const intentMap: Record<string, string> = {
    welcome: "welcome",
    find_doctor: "find_doctor",
    doctor_details: "doctor_details",
    booking_redirect: "booking_redirect",
    services_list: "services",
    emergency: "emergency",
    general_chat: "retriever",
  };
  return intentMap[state.intent || "general_chat"] || "retriever";
};

workflow.addEdge("__start__", "classifier");
workflow.addConditionalEdges("classifier", routeIntent);
workflow.addEdge("retriever", "general");

["welcome", "find_doctor", "doctor_details", "booking_redirect", "services", "emergency", "general"].forEach((node: any) => {
  workflow.addEdge(node, END);
});

const appGraph = workflow.compile();



export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, history, question } = body;

    const userMessage = message || question;
    
    let chatHistory: Array<{ role: string; content: string }> = [];
    if (Array.isArray(history)) {
      chatHistory = history.map((msg, idx) => ({
        role: idx % 2 === 0 ? "user" : "assistant",
        content: typeof msg === "string" ? msg : msg.content || "",
      }));
    }

    

    const result = await appGraph.invoke({
      user_message: String(userMessage),
      chat_history: chatHistory,
      user_name: "",
    });

    return NextResponse.json(result.final_response);
  } catch (error) {
    console.error("❌ Chat Error:", error);
    return NextResponse.json(
      {
        type: "text",
        text: "I'm having trouble connecting. Please call us at +91 88757 00500 for assistance.",
      },
      { status: 500 }
    );
  }
}
