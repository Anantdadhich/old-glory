"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer: "For most patients, we recommend a check-up and professional cleaning every six months. However, depending on your specific oral health needs, we might suggest more frequent visits to ensure optimal care."
  },
  {
    question: "What payment methods and insurance do you accept?",
    answer: "We accept all major credit cards, cash, and various insurance plans. We also offer flexible financing options to make your dental care more affordable. Please contact our office for a specific list of accepted insurance providers."
  },
  {
    question: "Do you offer emergency dental services?",
    answer: "Yes, we understand that dental emergencies can happen at any time. We have allocated slots for emergency appointments daily. If you're experiencing severe pain or an injury, please call us immediately."
  },
  {
    question: "Is teeth whitening safe for my enamel?",
    answer: "Absolutely. Our professional teeth whitening treatments are designed to be safe and effective. We use high-quality products that protect your enamel while removing stains and discoloration."
  },
  {
    question: "What should I expect during my first visit?",
    answer: "Your first visit will include a comprehensive oral examination, digital X-rays if necessary, and a discussion about your dental history and goals. We'll create a personalized treatment plan tailored just for you."
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="w-full px-4 md:px-8 py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium text-slate-800 mb-6">Frequently Asked Questions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, insurance, and dental health. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'bg-slate-50 border-teal-100 shadow-sm' : 'bg-white hover:border-slate-300'}`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-slate-800">{faq.question}</span>
                <span className={`ml-4 p-2 rounded-full transition-colors ${activeIndex === index ? 'bg-teal-100 text-teal-700' : 'bg-slate-100 text-slate-500'}`}>
                  {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
