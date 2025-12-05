"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

// Data Structure - Single Transformation Case
const transformations = [
  {
    id: 1,
    before: "/before.jpeg",
    after: "/afterimg.jpeg",
    title: "Metal Braces - 18 months treatment",
    desc: "Complete smile transformation with traditional metal braces",
    treatment: "Metal Braces",
    duration: "18 Months"
  },
];

const AmazingTransformations = () => {
  return (
    <section className="relative w-full px-4 md:px-8 lg:px-12 py-16 lg:py-24 bg-white overflow-hidden">
        
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: 'radial-gradient(#1E4D58 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
            
            {/* Header */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E4D58]/5 text-[#1E4D58] text-xs font-bold tracking-widest uppercase mb-4">
                    <Sparkles className="w-3 h-3" /> Real Results
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 mb-4 tracking-tight">
                    Amazing <span className="text-[#1E4D58] font-serif italic">Transformations</span>
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
                    See the life-changing results our patients have achieved with our expert care.
                </p>
            </div>

            {/* Single Centered Transformation Card */}
            <div className="w-full">
                {transformations.map((item) => (
                    <div
                        key={item.id}
                        className="bg-[#F8F9FA] rounded-[32px] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 hover:border-[#1E4D58]/20 transition-all duration-500"
                    >
                        <div className="flex flex-col gap-8 p-6 md:p-10">
                            
                            {/* Images Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                                {/* Before Image */}
                                <div className="flex flex-col items-center">
                                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                                        <img
                                            src={item.before}
                                            alt="Before Treatment"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                            Before
                                        </div>
                                    </div>
                                    <h3 className="mt-4 text-lg font-bold text-slate-700">Before Braces</h3>
                                </div>

                                {/* After Image */}
                                <div className="flex flex-col items-center">
                                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                                        <img
                                            src={item.after}
                                            alt="After Treatment"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                            After
                                        </div>
                                    </div>
                                    <h3 className="mt-4 text-lg font-bold text-slate-700">After Braces</h3>
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="border-t border-slate-200 pt-8 text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-500 mb-6 leading-relaxed">
                                    {item.desc}
                                </p>

                                <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-600 mb-6">
                                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                                        <span className="text-slate-400 uppercase text-[10px] tracking-wider font-bold">Treatment</span>
                                        <span className="text-[#1E4D58] font-bold">{item.treatment}</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                                        <span className="text-slate-400 uppercase text-[10px] tracking-wider font-bold">Duration</span>
                                        <span className="text-[#1E4D58] font-bold">{item.duration}</span>
                                    </div>
                                </div>

                                <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-400">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    <span>Treated by Dr. Ridam Jain at Old Glory</span>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
                <a
                    href="https://wa.me/917678245349?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20dental%20services%20🙂"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1E4D58] hover:bg-[#163a42] text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-[#1E4D58]/20 transition-all hover:-translate-y-0.5 group"
                >
                    Start Your Transformation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </div>
    </section>
  );
};

export default AmazingTransformations;