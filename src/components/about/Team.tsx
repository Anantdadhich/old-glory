"use client";

import React from 'react';
import { Instagram, Facebook, Quote } from 'lucide-react';

const team = [
  {
    name: "Dr. Tanmay Sharma",
    role: "Orthodontist & Dental Surgeon",
    image: "/tan.jpeg",
    // Shortened slightly for UI balance, full details can go on a detail page if needed
    bio: "Specialist in Orthodontics. B.D.S. from Darshan Dental College (Udaipur) and M.D.S. from Kothiwal Dental College (Moradabad).",
    instagram: "https://www.instagram.com/drtanmaysharma/",
    facebook: "https://www.facebook.com/drtanmaysharma/",
  },
  {
    name: "Dr. Ridam Jain",
    role: "Orthodontist & Smile Expert",
    image: "/ridam.jpeg",
    bio: "Expert in Smile Design. B.D.S. from SDM Dental College (Dharwad) and M.D.S. from Kothiwal Dental College (Moradabad).",
    instagram: "https://www.instagram.com/oldgloryorthodontics/",
    facebook: "https://www.facebook.com/ridamluv",
  },
];

const Team = () => {
  return (
    <section id="team" className="w-full px-4 md:px-8 lg:px-12 py-20 lg:py-28 bg-[#FAFCFD]">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E4D58]/5 text-[#1E4D58] text-xs font-bold tracking-widest uppercase mb-4">
             <span className="w-2 h-2 rounded-full bg-[#1E4D58]"></span>
             Our Experts
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 mb-6 leading-tight">
            Meet Our Doctors
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Highly qualified specialists dedicated to crafting your perfect smile with precision and care.
          </p>
        </div>

        {/* --- Team Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-center">
          {team.map((member, index) => (
            <div 
                key={index} 
                className="group bg-white rounded-[24px] border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-[#1E4D58]/5 transition-all duration-500 flex flex-col md:flex-row items-center md:items-stretch"
            >
              
              {/* Image Side (Reduced Size) */}
              <div className="w-full md:w-5/12 relative overflow-hidden aspect-square md:aspect-auto">
                 <div className="absolute inset-0 bg-[#1E4D58]/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none mix-blend-multiply"></div>
                 <img
                   src={member.image}
                   alt={member.name}
                   className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                 />
              </div>
              
              {/* Content Side */}
              <div className="w-full md:w-7/12 p-8 flex flex-col justify-center">
                
                {/* Quote Icon Decoration */}
                <div className="mb-4">
                    <Quote className="w-8 h-8 text-[#E0F2F7] fill-current" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-[#1E4D58] transition-colors">
                    {member.name}
                </h3>
                <p className="text-xs font-bold text-[#1E4D58] uppercase tracking-wider mb-4">
                    {member.role}
                </p>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 border-l-2 border-[#E0F2F7] pl-4">
                    {member.bio}
                </p>
                
                {/* Social Actions */}
                <div className="flex gap-3 mt-auto">
                  <a 
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#1E4D58] hover:text-white hover:border-[#1E4D58] transition-all duration-300"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#1E4D58] hover:text-white hover:border-[#1E4D58] transition-all duration-300"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;