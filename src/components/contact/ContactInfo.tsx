"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, ArrowRight, CheckCircle2 } from "lucide-react";

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
        setStatus({ type: "success", message: "Message sent successfully! We'll be in touch." });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setLoading(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans">
      
      {/* --- Hero Section --- */}
      <section className="relative w-full bg-[#1E4D58] pt-32 pb-40 px-4 md:px-8 lg:px-12 overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#AEE9F5] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#AEE9F5] text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in">
                <MessageSquare className="w-3 h-3" /> Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
                We'd Love to <span className="text-[#AEE9F5] font-serif italic">Hear From You</span>
            </h1>
            <p className="text-teal-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Whether it’s a consultation, feedback, or a simple hello — let us know how we can help you smile with confidence.
            </p>
        </div>
      </section>

      {/* --- Main Content (Overlapping Layout) --- */}
      <section className="px-4 md:px-8 lg:px-12 -mt-20 pb-20 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* --- Left: Contact Form --- */}
            <div className="lg:col-span-7 bg-white rounded-[32px] shadow-2xl shadow-slate-200/50 p-6 md:p-10 border border-slate-100">
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Send a Message</h2>
                    <p className="text-slate-500 text-sm md:text-base">Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="rakesh singh"
                                required
                                // Reduced vertical padding (py-3)
                                className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#1E4D58]/20 focus:bg-white focus:ring-4 focus:ring-[#1E4D58]/5 transition-all placeholder:text-slate-400"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="rakesh@example.com"
                                required
                                className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#1E4D58]/20 focus:bg-white focus:ring-4 focus:ring-[#1E4D58]/5 transition-all placeholder:text-slate-400"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="General Inquiry, Appointment, etc."
                            className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#1E4D58]/20 focus:bg-white focus:ring-4 focus:ring-[#1E4D58]/5 transition-all placeholder:text-slate-400"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            required
                            placeholder="How can we help you?"
                            className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#1E4D58]/20 focus:bg-white focus:ring-4 focus:ring-[#1E4D58]/5 transition-all resize-none placeholder:text-slate-400"
                        />
                    </div>

                    {status && (
                        <div className={`p-4 rounded-xl flex items-center gap-3 ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                            {status.type === 'success' && <CheckCircle2 className="w-5 h-5 shrink-0" />}
                            <p className="text-sm font-medium">{status.message}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#1E4D58] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#1E4D58]/20 hover:bg-[#163a42] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed text-sm uppercase tracking-wide"
                    >
                        {loading ? "Sending..." : "Send Message"}
                        {!loading && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    </button>
                </form>
            </div>

            {/* --- Right: Contact Info & Map --- */}
            <div className="lg:col-span-5 space-y-6">
                
                {/* Info Card */}
                <div className="bg-[#1E4D58] rounded-[32px] p-8 text-white shadow-2xl relative overflow-hidden">
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                    <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>
                    
                    <div className="space-y-8 relative z-10">
                        {/* Location */}
                        <div className="flex gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#AEE9F5] group-hover:text-[#1E4D58] transition-colors duration-300">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-teal-200 text-xs font-bold uppercase tracking-wider mb-1">Our Location</p>
                                <p className="text-white text-sm leading-relaxed">
                                    124/505, Vikramaditya Marg, Sector 12,<br/> Mansarovar, Jaipur, Rajasthan 302020
                                </p>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="flex gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#AEE9F5] group-hover:text-[#1E4D58] transition-colors duration-300">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-teal-200 text-xs font-bold uppercase tracking-wider mb-1">Direct Contact</p>
                                <a href="tel:+919216213329" className="block text-white text-lg font-bold hover:text-[#AEE9F5] transition-colors">
                                    +91 92162 13329
                                </a>
                                <a href="mailto:drtanmaysharma@gmail.com" className="text-teal-100 text-sm hover:text-white transition-colors">
                                    drtanmaysharma@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="flex gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#AEE9F5] group-hover:text-[#1E4D58] transition-colors duration-300">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div className="w-full">
                                <p className="text-teal-200 text-xs font-bold uppercase tracking-wider mb-2">Clinic Hours</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm border-b border-white/10 pb-1">
                                        <span className="text-white">Mon - Sat (AM)</span>
                                        <span className="text-[#AEE9F5]">10:30 - 2:00</span>
                                    </div>
                                    <div className="flex justify-between text-sm border-b border-white/10 pb-1">
                                        <span className="text-white">Mon - Sat (PM)</span>
                                        <span className="text-[#AEE9F5]">5:30 - 8:00</span>
                                    </div>
                                    <div className="flex justify-between text-sm pt-1">
                                        <span className="text-white/60">Sunday</span>
                                        <span className="bg-red-500/20 text-red-200 text-[10px] px-2 py-0.5 rounded font-bold uppercase">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="w-full h-[280px] rounded-[32px] overflow-hidden shadow-xl border-4 border-white relative group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.3835062932!2d75.76679267547786!3d26.841287863156268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db59988c3f6fd%3A0xa3cfca109e4b6cd3!2sOld%20Glory%20Orthodontics%20%26%20Dental%20Care!5e1!3m2!1sen!2sin!4v1749836494063!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    />
                    {/* Overlay Button */}
                    <a 
                        href="https://www.google.com/maps?q=old+glory+jaipur"
                        target="_blank"
                        rel="noreferrer"
                        className="absolute bottom-4 right-4 bg-white text-slate-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2 hover:bg-[#1E4D58] hover:text-white transition-all transform hover:scale-105"
                    >
                        Get Directions <ArrowRight className="w-3 h-3" />
                    </a>
                </div>

            </div>
        </div>
      </section>

    </div>
  );
};

export default ContactInfo;