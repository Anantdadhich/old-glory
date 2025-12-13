"use client";

import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, MapPin, ArrowRight } from 'lucide-react';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log("📤 Sending booking:", formData);

      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log("📥 Response status:", response.status);
      const result = await response.json();
      console.log("📥 Response data:", result);

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          service: '',
          message: ''
        });
        alert("Thank you! We will confirm your appointment shortly.");
      } else {
        setSubmitStatus('error');
        alert("Something went wrong. Please call us at +91 88757 00500");
      }
    } catch (error) {
      console.error("❌ Booking error:", error);
      setSubmitStatus('error');
      alert("Connection error. Please try again or call us at +91 88757 00500");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="book" className="relative w-full py-16 lg:py-24 bg-[#F8F9FA] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E0F2F7]/40 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-start">
          
          {/* --- LEFT: Booking Form --- */}
          <div className="bg-white rounded-[24px] shadow-xl shadow-slate-200/50 p-6 md:p-8 border border-white relative z-10">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#1E4D58]/5 text-[#1E4D58] text-[10px] font-bold tracking-widest uppercase mb-3">
                 <Calendar className="w-3 h-3" /> Book Online
              </div>
              <h2 className="text-2xl md:text-3xl font-medium text-slate-900 mb-2 tracking-tight">
                Schedule Your Visit
              </h2>
              <p className="text-slate-500 text-sm">
                Fill out the form below to request an appointment.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Personal Details */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#E0F2F7] text-[#1E4D58] flex items-center justify-center text-[10px]">1</span>
                    Personal Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative group">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1E4D58] transition-colors" size={16} />
                        <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1E4D58]/30 focus:bg-white focus:ring-2 focus:ring-[#1E4D58]/5 transition-all"
                        required
                        />
                    </div>
                    <div className="relative group">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1E4D58] transition-colors" size={16} />
                        <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1E4D58]/30 focus:bg-white focus:ring-2 focus:ring-[#1E4D58]/5 transition-all"
                        required
                        />
                    </div>
                    <div className="relative group md:col-span-2">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1E4D58] transition-colors" size={16} />
                        <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1E4D58]/30 focus:bg-white focus:ring-2 focus:ring-[#1E4D58]/5 transition-all"
                        required
                        />
                    </div>
                </div>
              </div>

              <div className="h-px bg-slate-100 w-full my-2"></div>

              {/* Appointment Details */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#E0F2F7] text-[#1E4D58] flex items-center justify-center text-[10px]">2</span>
                    Appointment Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative group md:col-span-2">
                        <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600 focus:outline-none focus:border-[#1E4D58]/30 focus:bg-white focus:ring-2 focus:ring-[#1E4D58]/5 transition-all appearance-none cursor-pointer"
                        required
                        >
                        <option value="">Select Service Required</option>
                        <option value="general">General Dentistry</option>
                        <option value="cosmetic">Cosmetic Dentistry</option>
                        <option value="orthodontics">Orthodontics</option>
                        <option value="root-canal">Root Canal (RCT)</option>
                        <option value="implants">Dental Implants</option>
                        <option value="emergency">Emergency Care</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <ArrowRight size={14} className="rotate-90" />
                        </div>
                    </div>

                    <div className="relative group">
                        <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1E4D58] transition-colors" size={16} />
                        <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600 focus:outline-none focus:border-[#1E4D58]/30 focus:bg-white focus:ring-2 focus:ring-[#1E4D58]/5 transition-all cursor-pointer"
                        required
                        />
                    </div>
                    <div className="relative group">
                        <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1E4D58] transition-colors" size={16} />
                        <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600 focus:outline-none focus:border-[#1E4D58]/30 focus:bg-white focus:ring-2 focus:ring-[#1E4D58]/5 transition-all cursor-pointer"
                        required
                        />
                    </div>
                </div>
              </div>

              <div className="relative group pt-1">
                <MessageSquare className="absolute left-3.5 top-3.5 text-slate-400 group-focus-within:text-[#1E4D58] transition-colors" size={16} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1E4D58]/30 focus:bg-white focus:ring-2 focus:ring-[#1E4D58]/5 transition-all resize-none"
                  placeholder="Any specific symptoms?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1E4D58] text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-[#1E4D58]/20 hover:bg-[#163a42] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Confirm Appointment'}
                {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </div>

          {/* --- RIGHT: Info Stack --- */}
          <div className="flex flex-col gap-6 h-full">
            
            {/* 1. Main Visual (Bigger Height) */}
            <div className="relative rounded-[24px] overflow-hidden shadow-xl h-[400px] lg:h-[500px] group w-full shrink-0">
               <div className="absolute inset-0 bg-gradient-to-t from-[#1E4D58]/60 to-transparent z-10 pointer-events-none"></div>
               <img
                src="/book.png"
                alt="Clinic Interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute bottom-6 left-6 right-6 z-20">
                  <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                    Premium Care
                  </span>
                  <h3 className="text-white text-3xl font-bold drop-shadow-md leading-tight">Patient-First <br/> Dentistry</h3>
               </div>
            </div>

            {/* 2. Contact & Hours Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 shrink-0">
                 {/* Contact Details */}
                <div className="bg-[#1E4D58] rounded-[20px] p-5 text-white shadow-lg flex flex-col justify-between h-full min-h-[140px]">
                    <div>
                        <h3 className="text-base font-bold mb-3 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#AEE9F5]" /> Location
                        </h3>
                        <div className="flex items-start gap-3">
                            <div className="w-0.5 h-full min-h-[30px] bg-[#AEE9F5]/30 rounded-full shrink-0"></div>
                            <p className="text-xs leading-relaxed text-teal-50">
                                124/505, Vikramaditya Marg 80 ft road, Mansarovar, Jaipur
                            </p>
                        </div>
                    </div>
                    <div className="pt-3 border-t border-white/10 flex items-center gap-3 mt-auto">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                            <Phone className="w-4 h-4 text-[#AEE9F5]" />
                        </div>
                        <div>
                            <p className="text-[10px] text-teal-200 uppercase tracking-wide">Call Us</p>
                            <p className="text-sm font-bold">+91 88757 00500</p>
                        </div>
                    </div>
                </div>

                {/* Clinic Hours */}
                <div className="bg-[#E0F2F7] rounded-[20px] p-5 border border-[#1E4D58]/10 h-full min-h-[140px] flex flex-col">
                    <h4 className="font-bold text-[#1E4D58] mb-3 flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4" /> Hours
                    </h4>
                    <div className="space-y-2 flex-grow font-medium">
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="text-slate-600">Mon - Sat</span>
                            <span className="text-slate-900 bg-white px-2 py-0.5 rounded shadow-sm">10:30 AM - 2:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="text-slate-600">Evening</span>
                            <span className="text-slate-900 bg-white px-2 py-0.5 rounded shadow-sm">6:00 PM - 8:00 PM</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center text-xs pt-3 border-t border-[#1E4D58]/10 mt-auto">
                        <span className="text-slate-600 font-bold">Sunday</span>
                        <span className="text-red-500 font-bold text-[10px] uppercase tracking-wide bg-white px-2 py-0.5 rounded-full shadow-sm border border-red-100">Closed</span>
                    </div>
                </div>
            </div>

          </div>

          {/* --- BOTTOM: Full Width Map Section --- */}
          <div className="lg:col-span-2 w-full h-[350px] rounded-[24px] overflow-hidden shadow-lg border-2 border-white relative group mt-2">
             {/* Map Overlay to prevent accidental scrolling until hover/interaction */}
             <div className="absolute inset-0 bg-[#1E4D58]/10 pointer-events-none group-hover:bg-transparent transition-colors z-10" />
             
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.3835062932!2d75.76679267547786!3d26.841287863156268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db59988c3f6fd%3A0xa3cfca109e4b6cd3!2sOld%20Glory%20Orthodontics%20%26%20Dental%20Care!5e1!3m2!1sen!2sin!4v1749836494063!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
            
            {/* Floating 'Get Directions' Badge */}
            <a 
                href="https://www.google.com/maps?q=old+glory+jaipur"
                target="_blank"
                rel="noreferrer" 
                className="absolute bottom-6 right-6 z-20 bg-white text-[#1E4D58] px-5 py-2.5 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 hover:bg-[#1E4D58] hover:text-white transition-all transform hover:scale-105"
            >
                Get Directions <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
