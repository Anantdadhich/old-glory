"use client";

import React from 'react';
import Link from "next/link";
import { CheckCircle2, Award, ArrowRight, Star } from 'lucide-react';

const AboutHero = () => {
  return (
    <section id="about" className="relative w-full px-4 md:px-8 lg:px-12 py-20 lg:py-28 bg-[#edf7fa] overflow-hidden">
      
      {/* --- Background Texture (Subtle Dots) --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1E4D58 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* --- Left: Image Composition --- */}
        <div className="relative order-2 lg:order-1 group">
            {/* Background Decor Blobs */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#E0F2F7] rounded-full blur-3xl opacity-60 mix-blend-multiply animate-pulse-slow"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#EBC7E6]/40 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-pulse-slow delay-700"></div>
            
            {/* Main Image Container */}
            <div className="relative">
                <div className="absolute inset-0 bg-[#1E4D58] rounded-[3rem] rotate-3 transform transition-transform group-hover:rotate-2 opacity-10"></div>
                <div className="w-full aspect-[4/3] rounded-[3rem] overflow-hidden relative z-10 shadow-2xl ring-1 ring-slate-900/5 bg-slate-100">
                    <img 
                        src="/aboutus.png" 
                        alt="Dr Tanmay Sharma and Dr Ridam Jain"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Overlay Gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E4D58]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
            </div>
            
            
        </div>

        {/* --- Right: Content --- */}
        <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-[#1E4D58]"></span>
                <span className="text-black font-bold tracking-widest text-xs uppercase">About Old Glory</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-slate-900 mb-6 leading-[1.1] tracking-tight">
                Committed To Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E4D58] to-[#2A6F7E]">
                    Confident Smile.
                </span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-lg">
                At Old Glory Orthodontics, our strength lies in precision and care. Led by <strong className="text-slate-900">Dr. Tanmay Sharma</strong> and <strong className="text-slate-900">Prof. Dr. Ridam Jain</strong>, we combine 15+ years of expertise with advanced technology to deliver the best oral health outcomes.
            </p>
            
            {/* Modern Feature List */}
            <div className="space-y-4 mb-10">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#1E4D58]/20 hover:bg-[#E0F2F7]/30 transition-colors duration-300">
                        <div className="mt-1 p-1 bg-[#1E4D58]/10 rounded-full">
                            <CheckCircle2 className="w-4 h-4 text-[#1E4D58]" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Specialized Orthodontists</h4>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Expert alignment & bite correction.</p>
                        </div>
                    </div>
                    <div className="flex-1 flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#1E4D58]/20 hover:bg-[#E0F2F7]/30 transition-colors duration-300">
                        <div className="mt-1 p-1 bg-[#1E4D58]/10 rounded-full">
                            <CheckCircle2 className="w-4 h-4 text-[#1E4D58]" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">MDS Consultants</h4>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Specialists for every dental need.</p>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#1E4D58]/20 hover:bg-[#E0F2F7]/30 transition-colors duration-300">
                        <div className="mt-1 p-1 bg-[#1E4D58]/10 rounded-full">
                            <CheckCircle2 className="w-4 h-4 text-[#1E4D58]" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Advanced Tech</h4>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Pain-free & precise treatments.</p>
                        </div>
                    </div>
                    <div className="flex-1 flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#1E4D58]/20 hover:bg-[#E0F2F7]/30 transition-colors duration-300">
                        <div className="mt-1 p-1 bg-[#1E4D58]/10 rounded-full">
                            <CheckCircle2 className="w-4 h-4 text-[#1E4D58]" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Proven Outcomes</h4>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Thousands of happy smiles.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-4">
                <Link href="#team">
                    <button className="bg-[#1E4D58] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#163a42] hover:shadow-xl hover:shadow-[#1E4D58]/20 transition-all duration-300 flex items-center gap-2 group active:scale-95">
                        Meet The Doctors
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </Link>
                <Link href="/contact">
                    <button className="bg-white border-2 border-slate-100 text-slate-700 px-8 py-4 rounded-full font-semibold hover:border-[#1E4D58] hover:text-[#1E4D58] transition-all duration-300 active:scale-95">
                        Contact Us
                    </button>
                </Link>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;