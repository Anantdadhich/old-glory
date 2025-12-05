"use client";

import React from "react";
import Link from "next/link";
import { Star, CheckCircle, ArrowRight, ShieldCheck, Clock, Zap } from "lucide-react";

const BracesHero = () => {
  return (
    <section className="relative w-full bg-[#F8F9FA] overflow-hidden">
      
      {/* --- Background Decor --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1E4D58 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E0F2F7] rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/2"></div>
      
      {/* 1. Urgency Alert Bar (Refined) */}
      <div className="bg-[#1E4D58] text-white text-center py-2.5 px-4 text-xs md:text-sm font-bold tracking-wide flex items-center justify-center gap-2 relative z-20 shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
        </span>
        ⚠️ Only 3 free braces consultations left for this week – <span className="underline decoration-teal-400 underline-offset-2 cursor-pointer">Book Now!</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- Left: Content --- */}
          <div className="flex flex-col gap-8">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#1E4D58]/10 rounded-full w-fit shadow-sm animate-fade-in-up">
               <div className="flex -space-x-1">
                  {[1,2,3].map((i) => (
                      <div key={i} className="w-5 h-5 rounded-full bg-slate-200 border border-white" />
                  ))}
               </div>
               <div className="flex items-center gap-1 pl-1">
                   <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                   <span className="text-xs font-bold text-slate-800">Jaipur's #1 Rated Clinic</span>
               </div>
            </div>

            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.1] tracking-tight">
                  Affordable Braces <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E4D58] via-[#2A9D8F] to-[#1E4D58]">
                    With Easy EMI.
                  </span>
                </h1>
                
                <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
                  Get the perfect smile you deserve without the financial stress. Join <span className="font-bold text-[#1E4D58]">1,500+ happy patients</span> who transformed their confidence with us.
                </p>
            </div>

            {/* Key Benefits List (Pills) */}
            <div className="flex flex-wrap gap-3 text-sm font-medium text-slate-700">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm hover:border-[#1E4D58]/30 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-[#E0F2F7] flex items-center justify-center">
                        <Zap className="w-3 h-3 text-[#1E4D58]" />
                    </div>
                    No Consultation Fee
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm hover:border-[#1E4D58]/30 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-[#E0F2F7] flex items-center justify-center">
                        <Clock className="w-3 h-3 text-[#1E4D58]" />
                    </div>
                    Instant Booking
                </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                href="https://wa.me/917678245349?text=Hi%2C%20I%20want%20to%20book%20a%20Free%20Braces%20Consultation%20🙂"
                target="_blank"
                className="bg-[#1E4D58] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#163a42] hover:shadow-xl hover:shadow-[#1E4D58]/20 hover:-translate-y-0.5 transition-all duration-300 text-base flex items-center gap-2 group"
              >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-2 px-6 py-4 text-[#1E4D58] font-semibold cursor-default">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">0% Interest EMI</span>
              </div>
            </div>

            {/* Stats Divider */}
            <div className="w-full h-px bg-slate-200/60 my-2"></div>

            {/* Social Proof */}
            <div className="flex items-center justify-between max-w-md">
                <div>
                    <p className="text-2xl font-bold text-slate-900">1.5k+</p>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Patients</p>
                </div>
                <div>
                    <p className="text-2xl font-bold text-slate-900">15+</p>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Years Exp.</p>
                </div>
                <div>
                    <p className="text-2xl font-bold text-slate-900">4.9</p>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Google Rating</p>
                </div>
            </div>
          </div>

          {/* --- Right: Visual --- */}
          <div className="relative group">
             {/* Main Image Frame */}
             <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-white aspect-[4/5] md:aspect-square lg:aspect-[4/5] z-10 transform transition-transform duration-700 hover:rotate-1">
                <img 
                    src="https://t3.ftcdn.net/jpg/05/51/40/20/360_F_551402041_EoDnTK2t23cYKzTI5SBogCHtWoZF554w.jpg" 
                    alt="Happy Patient with Braces" 
                    className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E4D58]/80 via-transparent to-transparent opacity-60"></div>

                {/* Floating Glass Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-5 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/50 animate-float">
                    <div className="flex items-start gap-4">
                        <div className="bg-[#E0F2F7] p-3 rounded-full text-[#1E4D58] shadow-inner">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900 mb-1">Guaranteed Results</p>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                We combine 15+ years of orthodontic expertise with modern technology for a perfect smile.
                            </p>
                        </div>
                    </div>
                </div>
             </div>
             
             {/* Decorative Blobs Behind */}
             <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#AEE9F5] rounded-full blur-[60px] opacity-60 -z-10 animate-pulse-slow"></div>
             <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#1E4D58] rounded-full blur-[60px] opacity-20 -z-10"></div>
             
             {/* Floating Badge Top Left */}
             <div className="absolute top-8 -left-6 bg-white py-2 px-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 -rotate-3 z-20 hidden md:flex">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 <span className="text-xs font-bold text-slate-800">Accepting New Patients</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BracesHero;