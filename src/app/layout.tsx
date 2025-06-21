import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Chatbot } from "@/components/chatbot";
import { Lexend_Deca } from "next/font/google";

const lexend = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Old Glory",
  description: "Dental Clinic",
  icons: {
    icon: "/lovable-uploads/520f915c-6d61-490c-9ad3-87ad606b1d93.png", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased`}>
        <Navbar />
        <main className="pt-20">
          {children}
          <Chatbot />
        </main>
        <Footer />
      </body>
    </html>
  );
}
