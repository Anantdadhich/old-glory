/*import { NextRequest, NextResponse } from "next/server";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PineconeStore } from "@langchain/pinecone";
import { Pinecone } from "@pinecone-database/pinecone";
import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/hf_transformers";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";
import { formatDocumentsAsString } from "langchain/util/document";

const getEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}. The application cannot start.`);
  }
  return value;
};

const GOOGLE_API_KEY = getEnv("GOOGLE_API_KEY");
const PINECONE_API_KEY = getEnv("PINECONE_API_KEY");
const PINECONE_INDEX_NAME = getEnv("PINECONE_INDEX_NAME");

const model = new ChatGoogleGenerativeAI({
  apiKey: GOOGLE_API_KEY,
  model: "gemini-2.5-flash",
});

const embeddings = new HuggingFaceTransformersEmbeddings({
  modelName: "Xenova/all-MiniLM-L6-v2",
});

const pinecone = new Pinecone({
  apiKey: PINECONE_API_KEY,
});


function formatChatHistory(history: Array<{ role: string; content: string }>) {
  if (!history || history.length === 0) return "";
  return history
    .map(msg => `[${msg.role === "user" ? "User" : "Assistant"}]: ${msg.content}`)
    .join('\n');
}

const promptTemplate = (
  context: string,
  question: string,
  history: Array<{ role: string; content: string }>
) => `
You are a warm, helpful, and friendly AI assistant for *Old Glory Dental Clinic* 🦷, based in *Jaipur*.
 
Chat History:
${formatChatHistory(history)}

Context Information:
${context}

Question:
${question}


Your job is to:
•⁠  ⁠Chat with patients like a real human would.
•⁠  ⁠Help them *book appointments* by collecting:
  - Full Name
  - Appointment Date
  - Preferred Time Slot (either 11 AM–2 PM or 6 PM–8 PM)
  - Phone number will be automatically extracted from webhook — never ask for it directly.
•⁠  ⁠Answer *FAQs in English or Hindi* using the Pinecone vector database for accurate, clinic-approved information.
•⁠  ⁠Gently encourage booking throughout the chat 💬.

---

### 🤖 Booking Flow Instructions:

*One question at a time. Never ask multiple together.*

1.⁠ ⁠If the user shows interest in booking, start by saying:
   > "Great! I'd be happy to help you book your appointment 😊"

2.⁠ ⁠Ask for the patient’s full name:
   > "May I know your full name please?"

3.⁠ ⁠Then ask for the preferred date:
   > "What date would you like to visit the clinic? 📅"

4.⁠ ⁠Then offer *only these two time slot options* (every time):
   > "We have two slots available that day:  
   👉 11 AM to 2 PM  
   👉 6 PM to 8 PM  
   Which one works best for you?"

5.⁠ ⁠After collecting all booking details, respond warmly:
   > "Perfect! Your appointment has been noted. One of our team members will reach out to confirm shortly 🦷"

6.⁠ ⁠Finally, *always share clinic location with this exact message*:
   > 📍 *Clinic Address:*  
   124/505, Vikramaditya Marg 80 ft road, Main Gate, opposite Dwarika Das Residency, Sector 12, Mansarovar, Jaipur, Rajasthan 302020  
   👉 [📍 View on Google Maps](https://www.google.com/maps?q=old+glory+jaipur)

---

### 🧠 Additional Behaviors:

•⁠  ⁠If the user asks a *question in Hindi*, understand and respond in Hindi or Hinglish — whichever feels most natural.
•⁠  ⁠If the user asks an FAQ (about braces, aligners, cost, cleaning, pain, EMI, etc.), fetch answer from the *Pinecone vector database*.
•⁠  ⁠If you're unsure or answer is missing, respond with:
  > “I recommend speaking directly to our dental team for that 😊 Would you like to book a consultation?”

---



Instructions:
1. Answer the question using the information provided in the context above.
2. If the answer cannot be found in the context, do your best to provide a helpful and general response based on common dental knowledge.
3. Keep your answers concise and professional.
4. If the question is unclear, ask for clarification.
5. Always maintain a helpful and friendly tone.
6. Please remember the chat history .

Answer:
`;


const ragChainPromise = (async () => {
  const pineconeIndex = pinecone.Index(PINECONE_INDEX_NAME);

  const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex,
    namespace: "dental-info",
  });

  const retriever = vectorStore.asRetriever({ searchType: "similarity", k: 3 });


  return RunnableSequence.from([
    async (input: { question: string; history?: Array<{ role: string; content: string }> }) => {
      const context = await retriever.getRelevantDocuments(input.question)
        .then(formatDocumentsAsString);
      return {
        context,
        question: input.question,
        history: input.history || [],
      };
    },
    (input: { context: string; question: string; history: Array<{ role: string; content: string }> }) =>
      promptTemplate(input.context, input.question, input.history),
    model,
    new StringOutputParser(),
  ]);
})();

export async function POST(req: NextRequest) {
  try {
    const { question, history } = await req.json();

    if (!question || typeof question !== 'string') {
      return NextResponse.json({ error: "Question is required and must be a string." }, { status: 400 });
    }

    const ragChain = await ragChainPromise;
    const answer = await ragChain.invoke({ question, history: history || [] });

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Error processing question:", error);
    return NextResponse.json({ error: "An internal server error occurred." }, { status: 500 });
  }
}
*/

import { NextRequest, NextResponse } from "next/server";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PineconeStore } from "@langchain/pinecone";
import { Pinecone } from "@pinecone-database/pinecone";
import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/hf_transformers";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";
import { formatDocumentsAsString } from "langchain/util/document";

const getEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}. The application cannot start.`);
  }
  return value;
};

const GOOGLE_API_KEY = getEnv("GOOGLE_API_KEY");
const PINECONE_API_KEY = getEnv("PINECONE_API_KEY");
const PINECONE_INDEX_NAME = getEnv("PINECONE_INDEX_NAME");

const model = new ChatGoogleGenerativeAI({
  apiKey: GOOGLE_API_KEY,
  model: "gemini-2.5-flash",
});

const embeddings = new HuggingFaceTransformersEmbeddings({
  modelName: "Xenova/all-MiniLM-L6-v2",
});

const pinecone = new Pinecone({
  apiKey: PINECONE_API_KEY,
});

function formatChatHistory(history: Array<{ role: string; content: string }>) {
  if (!history || history.length === 0) return "No previous conversation.";
  
  return history
    .map((msg) => {
      const role = msg.role === "user" ? "Patient" : "Assistant";
      return `${role}: ${msg.content}`;
    })
    .join("\n");
}

const promptTemplate = (
  context: string,
  question: string,
  history: Array<{ role: string; content: string }>
) => `You are a warm, helpful, and friendly AI assistant for *Old Glory Dental Clinic* 🦷, based in *Jaipur*.
 
Chat History:
${formatChatHistory(history)}

Context Information:
${context}

Question:
${question}


Your job is to:
•⁠  ⁠Chat with patients like a real human would.
•⁠  ⁠Help them *book appointments* by collecting:
  - Full Name
  - Appointment Date
  - Preferred Time Slot (either 11 AM–2 PM or 6 PM–8 PM)
  - Phone number will be automatically extracted from webhook — never ask for it directly.
•⁠  ⁠Answer *FAQs in English or Hindi* using the Pinecone vector database for accurate, clinic-approved information.
•⁠  ⁠Gently encourage booking throughout the chat 💬.

---

### 🤖 Booking Flow Instructions:

*One question at a time. Never ask multiple together.*

1.⁠ ⁠If the user shows interest in booking, start by saying:
   > "Great! I'd be happy to help you book your appointment 😊"

2.⁠ ⁠Ask for the patient’s full name:
   > "May I know your full name please?"

3.⁠ ⁠Then ask for the preferred date:
   > "What date would you like to visit the clinic? 📅"

4.⁠ ⁠Then offer *only these two time slot options* (every time):
   > "We have two slots available that day:  
   👉 11 AM to 2 PM  
   👉 6 PM to 8 PM  
   Which one works best for you?"

5.⁠ ⁠After collecting all booking details, respond warmly:
   > "Perfect! Your appointment has been noted. One of our team members will reach out to confirm shortly 🦷"

6.⁠ ⁠Finally, *always share clinic location with this exact message*:
   > 📍 *Clinic Address:*  
   124/505, Vikramaditya Marg 80 ft road, Main Gate, opposite Dwarika Das Residency, Sector 12, Mansarovar, Jaipur, Rajasthan 302020  
   👉 [📍 View on Google Maps](https://www.google.com/maps?q=old+glory+jaipur)

---

### 🧠 Additional Behaviors:

•⁠  ⁠If the user asks a *question in Hindi*, understand and respond in Hindi or Hinglish — whichever feels most natural.
•⁠  ⁠If the user asks an FAQ (about braces, aligners, cost, cleaning, pain, EMI, etc.), fetch answer from the *Pinecone vector database*.
•⁠  ⁠If you're unsure or answer is missing, respond with:
  > “I recommend speaking directly to our dental team for that 😊 Would you like to book a consultation?”

---



Instructions:
1. Answer the question using the information provided in the context above.
2. If the answer cannot be found in the context, do your best to provide a helpful and general response based on common dental knowledge.
3. Keep your answers concise and professional.
4. If the question is unclear, ask for clarification.
5. Always maintain a helpful and friendly tone.
6. Please remember the chat history .

Answer:`;

const ragChainPromise = (async () => {
  const pineconeIndex = pinecone.Index(PINECONE_INDEX_NAME);

  const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex,
    namespace: "dental-info",
  });

  const retriever = vectorStore.asRetriever({ searchType: "similarity", k: 3 });

  return RunnableSequence.from([
    async (input: { question: string; history?: Array<{ role: string; content: string }> }) => {
      const context = await retriever
        .getRelevantDocuments(input.question)
        .then(formatDocumentsAsString);
      return {
        context,
        question: input.question,
        history: input.history || [],
      };
    },
    (input: {
      context: string;
      question: string;
      history: Array<{ role: string; content: string }>;
    }) => promptTemplate(input.context, input.question, input.history),
    model,
    new StringOutputParser(),
  ]);
})();

export async function POST(req: NextRequest) {
  try {
   
    const body = await req.json();
    const { question, history } = body;

   
    if (!question) {
      return NextResponse.json(
        { error: "Question is required." },
        { status: 400 }
      );
    }


    const questionStr = String(question);

  
    const chatHistory = Array.isArray(history) ? history : [];


  

    const ragChain = await ragChainPromise;
    const answer = await ragChain.invoke({ 
      question: questionStr, 
      history: chatHistory 
    });

    return NextResponse.json({ answer });

  } catch (error: any) {
    console.error("=== ERROR ===");
    console.error("Error message:", error?.message);
    console.error("Error stack:", error?.stack);
    
    return NextResponse.json(
      { 
        error: "An internal server error occurred.", 
        details: process.env.NODE_ENV === 'development' ? error?.message : undefined 
      },
      { status: 500 }
    );
  }
}
