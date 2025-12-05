"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight, Zap } from "lucide-react";

const options = [
  {
    title: "Metal Braces",
    subtitle: "Traditional & Most Effective",
    desc: "The most durable and fastest treatment option for complex alignment cases.",
    tags: ["Most Durable", "Fastest Treatment", "Cost-Effective"],
    isPopular: false,
    color: "bg-slate-50",
    borderColor: "border-slate-100",
  },
  {
    title: "Invisible Braces",
    subtitle: "Clear Aligners / Invisalign",
    desc: "Nearly invisible, removable clear aligners. Perfect for working professionals.",
    tags: ["Nearly Invisible", "Removable", "High Comfort"],
    isPopular: true,
    color: "bg-[#F0FDF4]",
    borderColor: "border-green-100",
  },
  {
    title: "Ceramic Braces",
    subtitle: "Tooth-Colored Aesthetics",
    desc: "Tooth-colored brackets that blend with your teeth, offering a less visible alternative.",
    tags: ["Tooth-Colored", "Less Visible", "Effective"],
    isPopular: false,
    color: "bg-slate-50",
    borderColor: "border-slate-100",
  },
  {
    title: "Retainers",
    subtitle: "Post-Treatment Care",
    desc: "Custom-fit retainers to maintain your perfect alignment and prevent relapse.",
    tags: ["Maintains Alignment", "Custom-Fit", "Long-Lasting"],
    isPopular: false,
    color: "bg-slate-50",
    borderColor: "border-slate-100",
  },
];

const BracesTreatmentOptions = () => {
  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4">
            Braces Treatment Options
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We offer a range of solutions to suit your lifestyle and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((opt, idx) => (
            <div 
              key={idx}
              className={`relative flex flex-col p-6 rounded-[24px] border-2 ${opt.borderColor} ${opt.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              {opt.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1E4D58] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                   <Zap className="w-3 h-3 fill-current" /> Most Popular
                </div>
              )}

              <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{opt.title}</h3>
                  <p className="text-xs font-bold text-[#1E4D58] uppercase tracking-wide mt-1">{opt.subtitle}</p>
              </div>
              
              <p className="text-sm text-slate-600 mb-6 leading-relaxed flex-grow">
                {opt.desc}
              </p>

              <div className="space-y-2 mb-8">
                {opt.tags.map((tag, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-[#1E4D58]" />
                        </div>
                        {tag}
                    </div>
                ))}
              </div>

              <Link 
                href={`https://wa.me/917678245349?text=Hi%2C%20I%20want%20details%20about%20${opt.title}%20🙂`}
                target="_blank"
                className="mt-auto w-full bg-white border border-[#1E4D58] text-[#1E4D58] py-3 rounded-xl font-bold text-sm hover:bg-[#1E4D58] hover:text-white transition-all flex items-center justify-center gap-2 group"
              >
                Get Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BracesTreatmentOptions;