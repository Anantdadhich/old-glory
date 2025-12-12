"use client";

import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

 const Footer = () => {
  return (
    <footer className="bg-[#1E4D58] text-white pt-16 pb-8 px-4 md:px-12 rounded-t-[48px] mx-2 md:mx-4 mt-12 relative overflow-hidden">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24 relative z-10">
        
        {/* Column 1: Brand & Socials */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            {/* Assuming logo.png might be dark, we add a brightness filter to make it white-ish if needed, 
                or you can remove the filter if your logo is already suitable for dark bg */}
            <img
              src="/logo.png"
              alt="Old Glory Dental Clinic"
              className="h-12 w-auto brightness-0 invert opacity-90"
            />
            <div className="leading-tight">
              <h3 className="font-bold text-xl text-white">Old Glory</h3>
              <p className="text-xs text-[#AEE9F5] font-medium tracking-wider uppercase">Dental Clinic</p>
            </div>
          </div>
          
          <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
             Providing exceptional dental care with a gentle touch. Your smile is our priority.
          </p>
          
          {/* Social Icons - Styled like the reference */}
          <div className="flex gap-3">
             <a href="https://www.facebook.com/oldgloryorthodontics/" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-slate-500/50 flex items-center justify-center hover:bg-white hover:text-[#1E4D58] hover:border-white transition-all duration-300 group">
                <Facebook size={18} />
             </a>
             <a href="https://www.instagram.com/oldgloryorthodontics/" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-slate-500/50 flex items-center justify-center hover:bg-white hover:text-[#1E4D58] hover:border-white transition-all duration-300 group">
                <Instagram size={18} />
             </a>
             <a href="https://wa.me/918875700500?text=Hi" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-slate-500/50 flex items-center justify-center hover:bg-white hover:text-[#1E4D58] hover:border-white transition-all duration-300 group">
                <FaWhatsapp size={18} />
             </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
           <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
           <ul className="space-y-3 text-slate-300 text-sm font-medium">
             {["Home", "About Us", "Our Services", "Book Appointment", "Gallery", "Contact Us"].map((item, i) => {
                const paths = ["/", "/about", "/services", "/book", "/gallery", "/contact"];
                return (
                  <li key={item}>
                    <Link href={paths[i]} className="hover:text-[#AEE9F5] hover:pl-2 transition-all duration-300 inline-block">
                      {item}
                    </Link>
                  </li>
                )
             })}
           </ul>
        </div>

        {/* Column 3: Services */}
        <div>
           <h4 className="font-bold text-lg mb-6 text-white">Our Services</h4>
           <ul className="space-y-3 text-slate-300 text-sm font-medium">
             {[
               "Dental Implants",
               "Root Canal Therapy",
               "Orthodontics",
               "General Dentistry",
               "Cosmetic Dentistry",
               "Pediatric Dentistry",
               "Emergency Care",
             ].map((service) => (
               <li key={service}>
                 <Link href="/services" className="hover:text-[#AEE9F5] hover:pl-2 transition-all duration-300 inline-block">
                   {service}
                 </Link>
               </li>
             ))}
           </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
           <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
           <ul className="space-y-5 text-slate-300 text-sm">
             <li className="flex items-start gap-3">
               <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-[-4px]">
                 <MapPin size={16} className="text-[#AEE9F5]" />
               </div>
               <span className="leading-relaxed">
                 124/505, Vikramaditya Marg,<br/>
                 Mansarovar, Jaipur,<br/>
                 Rajasthan 302020
               </span>
             </li>
             <li className="flex items-start gap-3">
               <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#AEE9F5]" />
               </div>
               <div className="flex flex-col">
                 <span>(+91) 8875700500 </span>
                 <span>(+91) 92162 13329</span>
             
               </div>
             </li>
             <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                   <Mail size={16} className="text-[#AEE9F5]" />
                </div>
               <a href="mailto:drtanmaysharma@gmail.com" className="hover:text-white transition-colors break-all">
                 drtanmaysharma@gmail.com
               </a>
             </li>
             <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-[-4px]">
                   <Clock size={16} className="text-[#AEE9F5]" />
                </div>
               <span>
                10:30 am–2 pm, 5:30–8 pm<br />
                 Sun: Closed
               </span>
             </li>
           </ul>
        </div>
      </div>

      {/* Decorative Big Text Background */}
      <div className="absolute bottom-[-20px] left-[-20px] opacity-[0.03] pointer-events-none select-none">
         <h1 className="text-[120px] md:text-[200px] font-bold text-white leading-none whitespace-nowrap">
            Old Glory
         </h1>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
         <p className="text-slate-400 text-xs">
           © {new Date().getFullYear()} Old Glory Dental Clinic. All rights reserved.
         </p>
         <div className="flex gap-2 text-xs text-slate-400 font-medium items-center">
         
            <Link href="https://www.comacks.com/" className="hover:text-white transition-colors">Powered by Comacks</Link>
         </div>
      </div>
    </footer>
  );
};

export default Footer;