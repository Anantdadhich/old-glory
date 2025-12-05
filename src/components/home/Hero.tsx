"use client";

import { ArrowUpRight, ShieldCheck, Star, Trophy } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [timeString, setTimeString] = useState("");
  const [dayString, setDayString] = useState("");

  useEffect(() => {
    const now = new Date();
    setTimeString(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
    setDayString(now.toLocaleDateString('en-US', { weekday: 'long' }));
  }, []);

  return (
    <section className="w-full px-4 md:px-8 py-10 lg:py-20 bg-gradient-to-br from-[#E0F2F7] via-[#c9eaf3] to-white ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 h-full items-stretch">
        
        {/* --- Left Content Card --- */}
        <div className=" rounded-[32px] p-8 md:p-12 flex flex-col justify-center gap-6 relative">
          
          {/* 1. Review Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full w-fit shadow-sm">
             <Star className="w-4 h-4 fill-slate-800 text-slate-800" />
             <span className="text-sm font-semibold text-slate-800">5.0 (4824 Reviews)</span>
          </div>

          {/* 2. Headline (Restored to impactful size) */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-800 leading-[1.1] tracking-tight">
            Exceptional Dental Care, <br/>
            Every Step Of The Way
          </h1>
          
          {/* 3. Subheadline */}
          <p className="text-slate-600 text-lg max-w-lg leading-relaxed">
            Your smile deserves the best. Experience advanced dental solutions with a gentle touch, tailored for your comfort.
          </p>

          {/* 4. Action Buttons (Standard Size) */}
          <div className="flex flex-wrap gap-4 mt-2">
            <Link href="/book">
                <button className="bg-[#1E4D58] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#163a42] transition-colors shadow-lg shadow-[#1E4D58]/20 text-base">
                    Book Appointment
                </button>
            </Link>
            <Link href="/services">
                <button className="bg-transparent border border-[#1E4D58] text-[#1E4D58] px-8 py-3.5 rounded-full font-medium hover:bg-[#1E4D58]/5 transition-colors text-base">
                    Get Started Today
                </button>
            </Link>
          </div>

          {/* 5. Bottom Cards (Comfortable Size) */}
          <div className="mt-4 pt-8 border-t border-[#1E4D58]/10 flex flex-wrap gap-8 md:gap-12">
             <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full text-[#1E4D58]">
                    <Trophy className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-[#1E4D58] text-lg leading-none">15+</span>
                    <span className="text-sm text-[#1E4D58]/60">Years Experience</span>
                </div>
             </div>

             <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full text-[#1E4D58]">
                    <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-[#1E4D58] text-lg leading-none">100%</span>
                    <span className="text-sm text-[#1E4D58]/60">Safe & Sterile</span>
                </div>
             </div>
          </div>
        </div>

        {/* --- Right Image Column --- */}
        <div 
            className="relative h-[550px] lg:h-auto min-h-[550px] w-full rounded-[32px] overflow-hidden shadow-md bg-cover bg-center bg-no-repeat group"
            style={{
                backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661580641740-f25355dae370?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60"></div>

       
        </div>

      </div>
    </section>
  )
};

export default Hero;