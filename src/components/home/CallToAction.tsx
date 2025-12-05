"use client";

import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-10 lg:py-14">
      <div className="bg-[#E0F2F7] rounded-[48px] p-8 md:p-16 text-center relative overflow-hidden shadow-sm">
        
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-800 mb-6 leading-tight tracking-tight">
            Get In Touch With Us
          </h2>
          
        

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book">
                <button className="bg-[#1E4D58] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#163a42] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#1E4D58]/20 min-w-[180px] text-base">
                Book Appointment
                </button>
            </Link>
            <Link href="/contact">
                <button className="bg-white text-[#1E4D58] px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 hover:scale-105 transition-all duration-300 shadow-md min-w-[180px] text-base">
                Contact Support
                </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;