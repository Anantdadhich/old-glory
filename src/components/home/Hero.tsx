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
/*
"use client";

import { ArrowRight, ShieldCheck, Star, Trophy, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const now = new Date();
    setTimeString(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
  }, []);

  return (
    // Increased top padding to push content down slightly
    <section className="relative w-full px-4 md:px-8 pt-20 pb-12 lg:pt-32 lg:pb-24 bg-gradient-to-br from-[#E0F2F7] via-white to-[#F0FDF4] overflow-hidden">
      
   
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1E4D58 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>
      
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#AEE9F5] rounded-full blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#dcfce7] rounded-full blur-[80px] opacity-40 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
        
      
        <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left items-center lg:items-start">
          
         
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-[#1E4D58]/10 rounded-full shadow-sm animate-fade-in-up">
             <div className="flex -space-x-1.5">
                {[1,2,3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover"/>
                    </div>
                ))}
             </div>
             <div className="flex items-center gap-1 pl-1">
                 <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                 <span className="text-xs font-bold text-slate-800">5.0 (4,824 Reviews)</span>
             </div>
          </div>

         
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 leading-[1.1] tracking-tight">
              Exceptional Dental Care, <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E4D58] to-[#2A9D8F]">
                Every Step Of The Way
              </span>
            </h1>
            
            <p className="text-slate-600 text-md sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Your smile deserves the best. Experience advanced dental solutions with a gentle touch, tailored for your comfort.
            </p>
          </div>

        
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link href="/book" className="w-full sm:w-auto">
               
                <button className="w-full sm:w-auto bg-[#1E4D58] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#163a42] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-[#1E4D58]/20 text-sm flex items-center justify-center gap-2 group">
                    Book Appointment
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white border border-[#1E4D58]/20 text-[#1E4D58] px-6 py-3 rounded-full font-semibold hover:bg-[#E0F2F7] transition-colors text-sm">
                    Get Started Today
                </button>
            </Link>
          </div>

      
          <div className="w-full pt-8 border-t border-[#1E4D58]/10 flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12">
             <div className="flex items-center gap-3">
                <div className="bg-white p-2.5 rounded-xl text-[#1E4D58] shadow-sm border border-[#1E4D58]/5">
                    <Trophy className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                    <span className="font-bold text-[#1E4D58] text-lg leading-none">15+</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Years Experience</span>
                </div>
             </div>

             <div className="flex items-center gap-3">
                <div className="bg-white p-2.5 rounded-xl text-[#1E4D58] shadow-sm border border-[#1E4D58]/5">
                    <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                    <span className="font-bold text-[#1E4D58] text-lg leading-none">100%</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Safe & Sterile</span>
                </div>
             </div>
          </div>
        </div>

     
        <div className="relative mt-8 lg:mt-0 lg:-mt-12 px-2 sm:px-6 lg:px-0">
            
            <div 
                className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-[32px] sm:rounded-[48px] overflow-hidden shadow-2xl border-[6px] border-white group"
            >

                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-1000 group-hover:scale-105"
                    style={{
                        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661580641740-f25355dae370?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                    }}
                />
                
              
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E4D58]/90 via-transparent to-transparent opacity-70"></div>

              
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-[24px] shadow-lg border border-white/50 transform transition-all hover:scale-[1.02] duration-300">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-slate-800 text-sm font-semibold italic leading-relaxed mb-2">
                                "The most painless experience I've ever had. Highly recommended!"
                            </p>
                            <div className="flex items-center gap-2">
                              
                                <span className="text-[10px] text-slate-400">• Root Canal</span>
                            </div>
                        </div>
                        <div className="flex gap-0.5 shrink-0">
                            {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                        </div>
                    </div>
                </div>
            </div>

          
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#AEE9F5] rounded-full blur-2xl opacity-60 animate-pulse -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#1E4D58] rounded-full blur-3xl opacity-20 -z-10"></div>
            
         
        </div>

      </div>
    </section>
  )
};

export default Hero;*/