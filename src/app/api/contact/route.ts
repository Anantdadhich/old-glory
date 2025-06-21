import { sendEmail } from "@/lib/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, msg, subject } = body;

  if (!name || !email || !msg) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  try {
    await sendEmail({
      name,
      email,
      subject: subject || "No Subject", 
      message: msg,
    });

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error sending message!" },
      { status: 500 }
    );
  }
}
