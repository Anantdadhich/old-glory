"use client";

import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#1E4D58]">
      
      {/* Background Image with Parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: "url('/images/services-hero.jpg')", // Ensure you have a high-quality image here
        }}
      />
      
      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E4D58]/80 via-[#1E4D58]/60 to-[#1E4D58]" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full px-4 md:px-8 text-center text-white">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#AEE9F5] text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in-up">
         
          What We Do
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
          Comprehensive Care for <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#AEE9F5] to-white">
            Every Smile.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-teal-100/90 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          From routine checkups to complex cosmetic makeovers, we provide advanced dental solutions tailored to your unique needs.
        </p>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/5 backdrop-blur-sm">
                <ArrowDown className="w-5 h-5" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;