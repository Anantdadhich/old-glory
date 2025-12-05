"use client";

import React from 'react';
import { Heart, Award, Users, Shield, Clock, CheckCircle2 } from "lucide-react";

const values = [
  {
    icon: <Heart className="h-7 w-7" />,
    title: "Patient-Centered",
    description: "Your comfort is our priority. We ensure a personalized, pain-free experience for every patient.",
  },
  {
    icon: <Award className="h-7 w-7" />,
    title: "Clinical Excellence",
    description: "We maintain the highest standards of dental care through continuous learning and advanced tech.",
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Community Focus",
    description: "Building lasting relationships and actively contributing to the health of our local community.",
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Total Integrity",
    description: "Honest, transparent communication. We only recommend treatments that you actually need.",
  },
];

const MissionValues = () => {
  return (
    // Changed bg-white to a subtle brand-tinted gray for better contrast
    <section className="w-full px-4 md:px-8 lg:px-12 py-20 lg:py-28 bg-[#F5F9FA]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Centered & Clean */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E4D58]/5 text-[#1E4D58] text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#1E4D58]"></span>
            Our Philosophy
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
            Our Mission & Values
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We are committed to providing exceptional dental care while upholding our core values to improve oral health in Jaipur.
          </p>
        </div>

        {/* Values Grid - Clean White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:shadow-[#1E4D58]/5 hover:-translate-y-2 transition-all duration-300 group border border-transparent hover:border-[#E0F2F7]"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#E0F2F7] text-[#1E4D58] flex items-center justify-center mb-6 group-hover:bg-[#1E4D58] group-hover:text-white transition-colors duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1E4D58] transition-colors">
                {value.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar - Refined */}
        <div className="relative">
            {/* Background Container */}
            <div className="bg-[#1E4D58] text-white rounded-[32px] p-8 md:p-12 shadow-2xl overflow-hidden">
                
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <CheckCircle2 className="w-64 h-64 text-white rotate-12" />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 relative z-10">
                    
                    {/* Stat Item */}
                    <div className="text-center md:text-left space-y-1 md:pl-8 border-r-0 md:border-r border-white/10 last:border-0">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-[#AEE9F5] mb-2">
                            <Award className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-wider">Experience</span>
                        </div>
                        <div className="text-4xl md:text-5xl font-bold tracking-tight">15+</div>
                        <div className="text-teal-100/70 text-sm">Years Serving You</div>
                    </div>

                    {/* Stat Item */}
                    <div className="text-center md:text-left space-y-1 md:pl-8 border-r-0 lg:border-r border-white/10 last:border-0">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-[#AEE9F5] mb-2">
                            <Users className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-wider">Trust</span>
                        </div>
                        <div className="text-4xl md:text-5xl font-bold tracking-tight">15k+</div>
                        <div className="text-teal-100/70 text-sm">Happy Patients</div>
                    </div>

                    {/* Stat Item */}
                    <div className="text-center md:text-left space-y-1 md:pl-8 border-r-0 md:border-r border-white/10 last:border-0">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-[#AEE9F5] mb-2">
                            <Award className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-wider">Excellence</span>
                        </div>
                        <div className="text-4xl md:text-5xl font-bold tracking-tight">25+</div>
                        <div className="text-teal-100/70 text-sm">Awards Won</div>
                    </div>

                    {/* Stat Item */}
                    <div className="text-center md:text-left space-y-1 md:pl-8">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-[#AEE9F5] mb-2">
                            <Shield className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-wider">Safety</span>
                        </div>
                        <div className="text-4xl md:text-5xl font-bold tracking-tight">100%</div>
                        <div className="text-teal-100/70 text-sm">Sterilization Protocol</div>
                    </div>

                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default MissionValues;