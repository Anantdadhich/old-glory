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
  model: "gemini-2.0-flash",
});

const embeddings = new HuggingFaceTransformersEmbeddings({
  modelName: "Xenova/all-MiniLM-L6-v2",
});

const pinecone = new Pinecone({
  apiKey: PINECONE_API_KEY,
});


const ragChainPromise = (async () => {
  const pineconeIndex = pinecone.Index(PINECONE_INDEX_NAME);

  const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex,
    namespace: "dental-info",
  });

  const retriever = vectorStore.asRetriever({ searchType: "similarity", k: 3 });

  const promptTemplate = (context: string, question: string) => `
  You are a helpful assistant for Old Glory Dental Clinic. Your task is to answer questions based on the provided context.
  
  Context Information:
  ${context}
  
  Question:
  ${question}
  
  Instructions:
  1. Answer the question using the information provided in the context above.
  2. If the answer cannot be found in the context, do your best to provide a helpful and general response based on common dental knowledge.
  3. Keep your answers concise and professional.
  4. If the question is unclear, ask for clarification.
  5. Always maintain a helpful and friendly tone.
  
  Answer:
  `;
  

  return RunnableSequence.from([
    {
      context: (input: { question: string }) => retriever.getRelevantDocuments(input.question).then(formatDocumentsAsString),
      question: (input: { question: string }) => input.question,
    },
    (input) => promptTemplate(input.context, input.question),
    model,
    new StringOutputParser(),
  ]);
})();



export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();

    if (!question || typeof question !== 'string') {
      return NextResponse.json({ error: "Question is required and must be a string." }, { status: 400 });
    }

    const ragChain = await ragChainPromise;
    const answer = await ragChain.invoke({ question });

    return NextResponse.json({ answer });

  } catch (error) {
    console.error("Error processing question:", error);
    return NextResponse.json({ error: "An internal server error occurred." }, { status: 500 });
  }
}