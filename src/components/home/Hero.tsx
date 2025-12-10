"use client";

import { ArrowRight, ShieldCheck, Star, Trophy, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full px-4 md:px-8 pt-12 pb-8 lg:pt-20 lg:pb-16 bg-gradient-to-br from-[#E8F6F8] via-white to-[#F0FDF4] overflow-hidden">
      
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1E4D58 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#AEE9F5]/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-gradient-to-tr from-[#dcfce7]/30 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* --- Left Content --- */}
        <div className={`flex flex-col gap-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-2 bg-white/95 backdrop-blur-md border border-[#1E4D58]/10 rounded-full w-fit shadow-sm hover:shadow-md transition-all hover:scale-105 duration-300">
           
             <div className="flex items-center gap-1 pl-0.5">
                 <Star className="w-3.5 h-3.5 " />
                 <span className="text-sm font-bold text-slate-800">Old Glory</span>
                
             </div>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-slate-900 leading-[1.1] tracking-tight">
            Looking for a Dentist in Mansarovar?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E4D58] via-[#2A9D8F] to-[#1E4D58]">
              Experience Painless, Premium Care
              </span>
            </h1>
            
            <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
             Advanced, painless, and affordable dental treatments trusted by thousands of patients in Mansarovar , Jaipur.
            </p>
          </div>

          {/* Trust Stats - Moved Up */}
          <div className="flex flex-wrap gap-6 pt-1">
             <div className="flex items-center gap-2.5 group cursor-default">
                <div className="bg-gradient-to-br from-[#1E4D58] to-[#2A9D8F] p-2.5 rounded-xl text-white shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Trophy className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-[#1E4D58] text-xl leading-none">15+</span>
                    <span className="text-xs text-slate-600 mt-0.5">Years Exp.</span>
                </div>
             </div>

             <div className="flex items-center gap-2.5 group cursor-default">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-2.5 rounded-xl text-white shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-[#1E4D58] text-xl leading-none">100%</span>
                    <span className="text-xs text-slate-600 mt-0.5">Safe Care</span>
                </div>
             </div>

             <div className="flex items-center gap-2.5 group cursor-default">
                <div className="bg-gradient-to-br from-amber-400 to-orange-400 p-2.5 rounded-xl text-white shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Sparkles className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-[#1E4D58] text-xl leading-none">1.5K+</span>
                    <span className="text-xs text-slate-600 mt-0.5">Patients</span>
                </div>
             </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <Link href="/book" className="group">
                <button className="w-full sm:w-auto bg-[#1E4D58] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#163a42] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[#1E4D58]/20 text-base flex items-center justify-center gap-2">
                    Book Appointment
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </Link>
            <Link href="/services">
                <button className="w-full sm:w-auto bg-white border-2 border-[#1E4D58]/15 text-[#1E4D58] px-7 py-3.5 rounded-full font-semibold hover:bg-[#E8F6F8] hover:border-[#1E4D58]/30 transition-all duration-300 text-base shadow-sm">
                    View Services
                </button>
            </Link>
          </div>
        </div>

        {/* --- Right Image Column --- */}
        <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {/* Main Image Card */}
            <div className="relative h-[450px] sm:h-[520px] lg:h-[580px] w-full rounded-[36px] overflow-hidden shadow-2xl border-[3px] border-white group">
                
                {/* Image with Zoom Effect */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-700 group-hover:scale-110"
                    style={{
                        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661580641740-f25355dae370?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                    }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E4D58]/75 via-transparent to-transparent"></div>

                {/* Floating Trust Badge */}
                <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-white/50 flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-slate-800 leading-none">Verified Clinic</span>
                        <span className="text-[9px] text-slate-500">ISO Certified</span>
                    </div>
                </div>

                {/* Testimonial Card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/50 transform transition-all hover:scale-[1.02] duration-300">
                    <div className="flex items-start gap-3">
                        
                        <div className="flex-1 min-w-0">
                            <div className="flex gap-0.5 mb-1.5">
                                {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                            </div>
                            <p className="text-slate-800 text-xs font-medium leading-relaxed mb-1.5">
                              "The most painless experience I've ever had. Highly professional team!"
                            </p>
                           
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-[#AEE9F5] to-[#1E4D58]/20 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-gradient-to-tr from-[#dcfce7] to-emerald-400/20 rounded-full blur-2xl opacity-50 animate-pulse"></div>
        </div>

      </div>
    </section>
  )
};

export default Hero;
/*"use client";

import { ArrowRight, ShieldCheck, Star, Trophy, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full px-4 md:px-8 pt-12 pb-8 lg:pt-20 lg:pb-16 bg-slate-50 overflow-hidden">
      
    
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#AEE9F5]/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E0F2F7]/60 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        
     
        <div className={`flex flex-col gap-5 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          

          <div className="inline-flex items-center gap-2.5 px-3.5 py-2 bg-white border border-slate-200 rounded-full w-fit shadow-sm hover:shadow-md transition-all cursor-default">
             <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
             </span>
             <span className="text-sm font-bold text-slate-700">Accepting New Patients</span>
          </div>

        
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-slate-900 leading-[1.1] tracking-tight">
              Looking for a Dentist in <br className="hidden lg:block"/>
              <span className="relative whitespace-nowrap text-[#1E4D58]">
                <span className="relative z-10">Mansarovar?</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#AEE9F5] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            
         
            <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
             Advanced, painless, and affordable dental treatments trusted by thousands of patients in Mansarovar, Jaipur.
            </p>
          </div>

         
          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <Link href="/book" className="group">
                <button className="w-full sm:w-auto bg-[#1E4D58] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#163a42] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[#1E4D58]/20 text-base flex items-center justify-center gap-2">
                    Book Appointment
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </Link>
            <Link href="/services">
                <button className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-700 px-7 py-3.5 rounded-full font-semibold hover:border-[#1E4D58] hover:text-[#1E4D58] hover:bg-[#E0F2F7]/30 transition-all duration-300 text-base shadow-sm flex items-center justify-center gap-2">
                    View Services
                </button>
            </Link>
          </div>

         
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 mt-2">
             <div className="space-y-0.5">
                <h4 className="text-xl font-bold text-[#1E4D58]">15+</h4>
                <p className="text-xs text-slate-500 font-medium">Years Experience</p>
             </div>
             <div className="space-y-0.5">
                <h4 className="text-xl font-bold text-[#1E4D58]">1.5k+</h4>
                <p className="text-xs text-slate-500 font-medium">Happy Patients</p>
             </div>
             <div className="space-y-0.5">
                <h4 className="text-xl font-bold text-[#1E4D58]">4.9</h4>
                <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-xs text-slate-500 font-medium text-slate-500">Rating</span>
                </div>
             </div>
          </div>
        </div>

       
        <div className={`relative transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
            <div className="relative z-10">
              
                <div className="relative h-[450px] sm:h-[520px] lg:h-[580px] w-full rounded-[36px] overflow-hidden shadow-2xl shadow-[#1E4D58]/20 border-[6px] border-white">
                    <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                        style={{
                            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661580641740-f25355dae370?q=80&w=2070&auto=format&fit=crop')`
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E4D58]/60 via-transparent to-transparent"></div>
                </div>

             
                <div className="absolute top-8 -left-4 sm:-left-8 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white flex items-center gap-3 animate-bounce-slow">
                    <div className="bg-[#E0F2F7] p-2 rounded-full">
                        <MapPin className="w-4 h-4 text-[#1E4D58]" />
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-500 font-semibold uppercase">Located In</p>
                        <p className="text-xs font-bold text-slate-800">Mansarovar, Jaipur</p>
                    </div>
                </div>

              
                <div className="absolute bottom-8 -right-4 sm:-right-8 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 max-w-[180px]">
                    <div className="flex items-center gap-2 mb-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span className="text-[10px] font-bold text-slate-800 uppercase">Verified Clinic</span>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-tight">
                        Equipped with latest OPG & Laser technology.
                    </p>
                </div>
            </div>

         
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#1E4D58]/5 rounded-full blur-3xl -z-10"></div>
        </div>

      </div>
    </section>
  )
};

export default Hero; */