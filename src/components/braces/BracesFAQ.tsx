"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How much do braces cost and what EMI options are available?",
    answer: "We offer flexible EMI plans for all types of braces, including metal, ceramic, and invisible options. You can choose monthly payments with durations up to 24 months. 0% interest EMI is available on select treatments. Our team will help you find the best plan based on your needs during your free consultation."
  },
  {
    question: "How long does braces treatment take?",
    answer: "Treatment time varies by individual case complexity. Generally, it takes between 12 to 24 months. Simple alignments might take as little as 6-10 months, while complex bite corrections may take longer."
  },
  {
    question: "Do braces hurt and how to manage discomfort?",
    answer: "You may feel mild discomfort or pressure for a few days after fitting or adjustments. This is normal and shows the braces are working! Over-the-counter pain relief and eating soft foods usually helps. Modern braces are much more comfortable than older styles."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book easily! Click the 'Book Free Consultation' button on this page, or message us directly on WhatsApp at +91 76782 45349. We also accept walk-ins based on availability."
  },
  {
    question: "What is the difference between metal and invisible braces?",
    answer: "Metal braces use brackets and wires and are generally the most affordable and fastest for complex issues. Invisible braces (Aligners) are clear plastic trays that are removable, nearly invisible, and very comfortable, making them ideal for adults and professionals."
  },
  {
    question: "Do you provide post-treatment retainers?",
    answer: "Yes! Retainers are a crucial part of the treatment to ensure your teeth stay in their new position. We provide custom-fit retainers included in your treatment plan discussion."
  }
];

const BracesFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-lg">
            Common questions about your journey to a perfect smile.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${openIndex === idx ? 'border-[#1E4D58] shadow-lg' : 'border-slate-200 shadow-sm'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === idx ? 'text-[#1E4D58]' : 'text-slate-800'}`}>
                    {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-[#1E4D58]' : ''}`} />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                    {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 bg-[#E0F2F7] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#1E4D58]/10">
            <div>
                <h4 className="text-xl font-bold text-[#1E4D58] mb-1">Still have questions?</h4>
                <p className="text-slate-600">Chat with us directly on WhatsApp.</p>
            </div>
            <a 
                href="https://wa.me/917678245349?text=Hi%2C%20I%20have%20a%20question%20about%20braces%20🤔"
                target="_blank"
                className="bg-white text-[#1E4D58] px-6 py-3 rounded-full font-bold shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            >
                <MessageCircle className="w-5 h-5" /> Ask on WhatsApp
            </a>
        </div>

      </div>
    </section>
  );
};

export default BracesFAQ;