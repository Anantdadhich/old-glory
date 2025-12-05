"use client";

import React from "react";
import { Star, CreditCard, Users, Award, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "4.9⭐ Google Rating",
    desc: "Trusted by thousands of patients in Jaipur with excellent reviews and proven results.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "EMI Options Available",
    desc: "Flexible payment plans with no-cost EMI options to make your perfect smile affordable.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "1500+ Patients Treated",
    desc: "Successfully transformed smiles across Jaipur with personalized orthodontic care.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Experienced Team",
    desc: "15+ years of combined expertise in braces, aligners, and complex alignment cases.",
  },
];

const WhyChooseBraces = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-[#F8F9FA] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1E4D58 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E0F2F7] rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#dcfce7] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E4D58]/5 text-[#1E4D58] text-xs font-bold tracking-widest uppercase mb-4">
             <CheckCircle2 className="w-3 h-3" /> The Old Glory Difference
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
            Why Choose Us For <span className="text-[#1E4D58] font-serif italic">Your Smile?</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            We combine expert care, advanced technology, and patient-first policies to ensure your orthodontic journey is smooth and successful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((item, idx) => (
            <div 
                key={idx}
                className="group relative bg-white rounded-[32px] p-8 shadow-sm hover:shadow-xl hover:shadow-[#1E4D58]/10 border border-slate-100 hover:border-[#E0F2F7] transition-all duration-500 hover:-translate-y-2"
            >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#E0F2F7]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]" />
                
                <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#E0F2F7] flex items-center justify-center text-[#1E4D58] mb-6 group-hover:scale-110 group-hover:bg-[#1E4D58] group-hover:text-white transition-all duration-300 shadow-sm">
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1E4D58] transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600">
                        {item.desc}
                    </p>
                </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseBraces;