"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How much do braces cost and what EMI options are available?",
    answer: "We offer flexible EMI plans for all types of braces, including metal, ceramic, and invisible options. You can choose monthly payments with durations up to 24 months. 0% interest EMI is available on select treatments. Our team will help you find the best plan based on your needs.",
  },
  {
    question: "How long does braces treatment take?",
    answer: "Treatment duration varies depending on the complexity of your case and the type of braces chosen. Generally, treatment can take anywhere from 6 months to 2 years. Metal braces typically show results faster, while invisible aligners may take longer but are more comfortable.",
  },
  {
    question: "Do braces hurt and how to manage discomfort?",
    answer: "Braces may cause some initial discomfort, especially after adjustments. This is normal and usually subsides within a few days. We provide pain management tips and can recommend over-the-counter pain relievers if needed. The discomfort is temporary and the results are worth it!",
  },
  {
    question: "How do I book an appointment?",
    answer: "Booking an appointment is easy! You can call us directly, book through our website, or message us on WhatsApp for instant booking. We offer free consultations for new patients, so you can discuss your treatment options without any cost.",
  },
  {
    question: "What is the difference between metal and invisible braces?",
    answer: "Metal braces are the most traditional and effective option, offering the fastest results for complex cases. Invisible braces (clear aligners) are nearly invisible and removable, making them perfect for professionals and those who prefer a more discreet option. Both are effective, but the choice depends on your lifestyle and treatment needs.",
  },
  {
    question: "Do you provide post-treatment retainers?",
    answer: "Yes! Retainers are crucial for maintaining your perfect smile after braces treatment. We provide custom-fit retainers and include follow-up appointments to ensure your smile stays beautiful. Retainers help prevent teeth from shifting back to their original position.",
  },
];

const BracesFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about braces treatment
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BracesFAQ; 