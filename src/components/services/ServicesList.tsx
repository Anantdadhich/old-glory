"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; 
import {
  FaTooth,
  FaSmile,
  FaGem,
  FaTeethOpen,
  FaSyringe,
  FaTeeth,
  FaShieldAlt,
  FaXRay,
  FaSun,
  FaChild,
  FaAmbulance,
} from "react-icons/fa";

// Data
const services = [
    {
    title: "Dental Implants",
    description: "The gold standard for replacing missing teeth. Our implants look, feel, and function just like natural teeth.",
    icon: FaTeethOpen,
    color: "#6366F1",
    image: "/images/services/implemants.jpg",
  }, {
    title: "Root Canal (RCT)",
    description: "Save infected teeth with our painless root canal therapy. We remove infection and seal the tooth safely.",
    icon: FaXRay,
    color: "#F43F5E",
    image: "/images/services/rct.jpeg",
  },
    {
    title: "Orthodontics",
    description: "Straighten misaligned teeth with braces or aligners. We correct bites for both health and aesthetics.",
    icon: FaTeeth,
    color: "#10B981",
    image: "/images/services/otho.jpeg",
  },
  {
    title: "General Dentistry",
    description: "Comprehensive care including cleanings, fillings, and check-ups to keep your oral health in perfect condition.",
    icon: FaTooth,
    color: "#4F46E5",
    image: "/images/services/gen.jpg",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with bonding, veneers, and gum reshaping. Boost your confidence with a perfect look.",
    icon: FaSmile,
    color: "#EC4899",
    image: "/images/services/comsetic.jpeg",
  },
  {
    title: "Dental Jewellery",
    description: "Add a sparkle to your smile with safe, fashionable crystals attached to your teeth for a unique style statement.",
    icon: FaGem,
    color: "#A855F7",
    image: "/images/services/jew.jpeg",
  },

  {
    title: "Dentures",
    description: "Custom-fitted complete and partial dentures to restore your smile and ability to chew comfortably.",
    icon: FaTeeth, 
    color: "#D97706",
    image: "/images/services/dentures.jpeg",
  },
  {
    title: "Oral Surgery",
    description: "Expert surgical care for extractions, wisdom teeth, and jaw correction in a safe, sterile environment.",
    icon: FaSyringe,
    color: "#F87171",
    image: "/images/services/oral.jpg",
  },

  {
    title: "Preventative Care",
    description: "Proactive treatments like sealants and fluoride to stop problems before they start. Prevention is key.",
    icon: FaShieldAlt,
    color: "#0EA5E9",
    image: "/images/services/prev.jpg",
  },
 
  {
    title: "Teeth Whitening",
    description: "Professional whitening treatments to remove stains and brighten your smile safely and effectively.",
    icon: FaSun,
    color: "#FBBF24",
    image: "/images/services/white.jpeg",
  },
  {
    title: "Pediatric Dentistry",
    description: "Fun, gentle dental care for kids. We create a positive environment to build lifelong healthy habits.",
    icon: FaChild,
    color: "#3B82F6",
    image: "/images/services/pedia.jpeg",
  },
  {
    title: "Emergency Care",
    description: "24/7 support for dental emergencies. Immediate relief for toothaches, trauma, or broken teeth.",
    icon: FaAmbulance,
    color: "#EF4444",
    image: "/images/services/mer.jpg",
  },

];

const getServiceHref = (title: string) => {
  if (title === "Dental Implants") return "/services/dentalimplants";
  if (title.includes("Root Canal")) return "/services/rootcanal";
  if (title === "Orthodontics") return "/services/braces";
  return "/services";
};

const ServicesList = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-20 lg:py-28 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        
     

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:border-transparent hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full hover:-translate-y-2"
            >
              
              {/* Image Section */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Floating Icon overlapping image and text */}
                <div 
                    className="absolute -bottom-8 right-8 w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300"
                >
                    <service.icon size={28} style={{ color: service.color }} />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 pt-12 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1E4D58] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>
                
                {/* Read More Link */}
                <Link href={getServiceHref(service.title)} className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#1E4D58] transition-colors">
                        Learn More
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F8F9FA] group-hover:bg-[#E0F2F7] flex items-center justify-center text-slate-400 group-hover:text-[#1E4D58] transition-all duration-300 transform group-hover:translate-x-1">
                        <ArrowRight size={14} />
                    </div>
                </Link>
              </div>
              
              {/* Decorative bottom bar matching service color */}
              <div className="h-1.5 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: service.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;