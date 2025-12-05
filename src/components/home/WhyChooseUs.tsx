"use client";

import React from 'react';
import { Shield, Clock, Award, Users, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-6 w-6 text-[#1E4D58]" />,
    title: "Expert Dentists",
    description: "Highly qualified professionals dedicated to exceptional care.",
    bgColor: "bg-[#E0F2F7]", // Light Teal
    btnColor: "bg-[#1E4D58]",
    textColor: "text-[#1E4D58]"
  },
  {
    icon: <Clock className="h-6 w-6 text-[#5C3A2E]" />,
    title: "Modern Tech",
    description: "Latest technology for efficient and comfortable treatments.",
    bgColor: "bg-[#DFA88F]", // Peach
    btnColor: "bg-[#5C3A2E]",
    textColor: "text-[#5C3A2E]"
  },
  {
    icon: <Award className="h-6 w-6 text-[#4A2B45]" />,
    title: "Affordable Care",
    description: "Transparent pricing and flexible payment options.",
    bgColor: "bg-[#EBC7E6]", // Lavender
    btnColor: "bg-[#4A2B45]",
    textColor: "text-[#4A2B45]"
  },
  {
    icon: <Users className="h-6 w-6 text-[#1E3A5F]" />,
    title: "Family Friendly",
    description: "Specialized care for patients of all ages.",
    bgColor: "bg-[#D1E9F6]", // Light Blue
    btnColor: "bg-[#1E3A5F]",
    textColor: "text-[#1E3A5F]"
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- Left Column: Content & Grid --- */}
          <div className="flex flex-col justify-center">
            
            {/* Header */}
            <div className="mb-10">
              <span className="inline-block py-1 px-3 rounded-full bg-[#F0F9FF] border border-[#E0F2F7] text-[#1E4D58] text-xs font-bold tracking-wider uppercase mb-4">
                Why Choose Old Glory
              </span>
              <h2 className="text-4xl md:text-5xl font-medium text-slate-800 mb-6 leading-[1.1]">
                Committed To Your <br />
                <span className="text-[#1E4D58]">Oral Health Journey</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
                We strive to provide exceptional dental care through advanced technology, personalized treatments, and a compassionate approach.
              </p>
            </div>

            {/* Features Grid - Bento Style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`${feature.bgColor} p-6 rounded-[24px] flex flex-col justify-between min-h-[180px] group transition-transform hover:-translate-y-1 duration-300`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white/60 rounded-full backdrop-blur-sm">
                      {feature.icon}
                    </div>
                    <div className={`w-8 h-8 rounded-full ${feature.btnColor} flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}>
                        <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`text-lg font-bold mb-2 ${feature.textColor}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm font-medium opacity-80 leading-relaxed ${feature.textColor}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Right Column: Clean Image --- */}
          <div className="relative h-[600px] lg:h-[750px] w-full rounded-[48px] overflow-hidden shadow-2xl group">
              <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" 
                  alt="Dental Team" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Simple Gradient at bottom for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E4D58]/40 via-transparent to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;