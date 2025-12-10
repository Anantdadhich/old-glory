"use client";

import React, { useState } from "react";
import { 
  Phone, 
  MessageCircle, 
  Clock, 
  Star, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  Car,
  ArrowRight,
  CalendarCheck,
  UserCheck
} from "lucide-react";


const WHATSAPP_NUMBER = "918875700500"; 
const PHONE_NUMBER = "+918875700500";



const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-16 lg:py-24 px-4 md:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);



const ImplantHero = () => {
  return (
    <section className="relative w-full bg-[#F8F9FA] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1E4D58 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E0F2F7] rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/2"></div>

      <div className="bg-[#1E4D58] text-white text-center py-2.5 px-4 text-xs md:text-sm font-bold tracking-wide flex items-center justify-center gap-2 relative z-20 shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
        </span>
        Only 3 implant consultations left this week — <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Doctor,%20I%20want%20to%20book%20an%20implant%20consultation.`} className="underline decoration-teal-300 underline-offset-2">Book Now</a>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#1E4D58]/10 rounded-full w-fit shadow-sm">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-bold text-slate-800">Trusted by Mansarovar Residents since 2010</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.1] tracking-tight">
                Dental Implants in Jaipur <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E4D58] via-[#2A9D8F] to-[#1E4D58] font-bold">
                  Honest Pricing. Lifetime Warranty.
                </span>
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
                Performed only by senior implantologists — not trainees or rotating consultants.
              </p>
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <div className="flex items-center gap-0.5">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400" />
                </div>
                <span className="font-semibold text-slate-700">4.9/5</span>
                <span className="text-slate-400">|</span>
                <span>1000+ Implants</span>
                <span className="text-slate-400">|</span>
                <span className="text-[#1E4D58] font-semibold">Lifetime Warranty</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-sm font-medium text-slate-700">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#1E4D58]" />
                FDA-approved brands
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#1E4D58]" />
                Fixed transparent pricing
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#1E4D58]" />
                2 surgeries/day focus
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200">Osstem</span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200">Nobel Biocare</span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200">Straumann</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Dr.%20Tanmay,%20I%20want%20to%20check%20if%20I%20am%20eligible%20for%20implants.`}
                className="bg-[#1E4D58] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#163a42] hover:shadow-xl hover:shadow-[#1E4D58]/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
              >
                Check Eligibility
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="bg-white border border-[#1E4D58] text-[#1E4D58] px-8 py-4 rounded-2xl font-bold hover:bg-[#E0F2F7] transition-all"
              >
                Call Us
              </a>
              <div className="flex items-center gap-2 px-6 py-4 text-[#1E4D58] font-semibold cursor-default bg-white border border-[#1E4D58]/20 rounded-2xl">
                <CheckCircle2 className="w-5 h-5" />
                Free consultation today
              </div>
            </div>

            <div className="w-full h-px bg-slate-200/60 my-2"></div>
            <div className="flex items-center justify-between max-w-md">
              <div>
                <p className="text-3xl font-bold text-slate-900">15+</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Years Exp</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">1000+</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Implants Done</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">Lifetime</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Warranty</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative group">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-white aspect-[4/5] md:aspect-square lg:aspect-[4/5] z-10 transform transition-transform duration-700 hover:rotate-1">
              <img 
                src="https://dentalgalaxy.in/wp-content/uploads/2021/12/Get-A-Perfect-Smile-with-Implant-1.jpg" 
                alt="Senior Implantologist" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E4D58]/80 via-transparent to-transparent opacity-60"></div>

              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-6 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/50">
                <div className="flex items-start gap-4">
                  <div className="bg-[#E0F2F7] p-3 rounded-full text-[#1E4D58] shadow-inner">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-1">Owner-Doctor Care</p>
                    <p className="text-xs text-slate-600 leading-relaxed">Every surgery is performed personally by Dr. Tanmay or Dr. Ridam.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#AEE9F5] rounded-full blur-[60px] opacity-60 -z-10 animate-pulse-slow"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#1E4D58] rounded-full blur-[60px] opacity-20 -z-10"></div>

            <div className="absolute top-8 -left-6 bg-white py-2 px-4 rounded-xl shadow-lg border border-slate-100 items-center gap-2 -rotate-3 z-20 hidden md:flex">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-800">Accepting Implant Cases</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const OwnerDoctorAdvantage = () => (
    <Section className="bg-white">
        <div className="bg-[#F8F9FA] rounded-[32px] p-8 md:p-12 border border-slate-100 shadow-sm">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">The "Owner-Doctors" Advantage</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Why Mansarovar residents prefer owner-run clinics over corporate chains. At Old Glory, <span className="font-semibold text-[#1E4D58]">Dr. Tanmay & Dr. Ridam</span> have skin in the game.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { 
                        icon: UserCheck, 
                        title: "Consistent Experts", 
                        desc: "You are treated by Dr. Tanmay or Dr. Ridam every single visit. No rotating interns or changing faces." 
                    },
                    { 
                        icon: ShieldCheck, 
                        title: "No Sales Targets", 
                        desc: "We are doctors, not salesmen. We prioritize your health over corporate revenue targets." 
                    },
                    { 
                        icon: Star, 
                        title: "100% Accountability", 
                        desc: "We own the clinic, so your successful recovery is our personal responsibility." 
                    },
                    { 
                        icon: Clock, 
                        title: "Zero Rush", 
                        desc: "We limit major procedures to just 2 per day to ensure absolute focus and precision." 
                    }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-[#1E4D58] hover:shadow-lg hover:shadow-[#1E4D58]/10 transition-all group">
                        <div className="w-12 h-12 bg-[#E0F2F7] rounded-full flex items-center justify-center text-[#1E4D58] mb-4 group-hover:scale-110 transition-transform">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const VIPServiceSection = () => (
    <Section className="bg-white pt-0">
        <div className="relative overflow-hidden bg-[#1E4D58] rounded-[32px] p-8 md:p-12 text-white shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#AEE9F5] rounded-full blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[#AEE9F5] text-xs font-bold uppercase mb-4">
                        <Car className="w-4 h-4" /> VIP Surgery Day Offer
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Cab on Implant Day</h2>
                    <p className="text-teal-100 text-lg mb-6 max-w-xl">
                        Exclusive for patients in Mansarovar & nearby areas. We arrange your pick-up and drop-off so you don't have to drive after anesthesia.
                    </p>
                    <ul className="grid grid-cols-2 gap-3 text-sm font-medium text-teal-50 mb-0">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#AEE9F5]"/> Doorstep Pick-up</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#AEE9F5]"/> Safe Drop-off</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#AEE9F5]"/> Stress-Free Travel</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#AEE9F5]"/> Premium Comfort</li>
                    </ul>
                </div>
                <div className="shrink-0 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center w-full md:w-auto">
                    <p className="text-sm text-teal-200 uppercase tracking-widest font-bold mb-2">Value</p>
                    <p className="text-4xl font-bold text-white mb-2">FREE</p>
                    <p className="text-xs text-teal-100">Included with Implant Surgery</p>
                </div>
            </div>
        </div>
    </Section>
);

const ComparisonSection = () => (
    <Section className="bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">Old Glory vs. Corporate Chains</h2>
              <p className="text-slate-600">See why 1000+ patients trust our personalized approach.</p>
           </div>

           <div className="bg-white rounded-[24px] shadow-xl overflow-hidden border border-slate-200">
              <div className="grid grid-cols-3 bg-[#1E4D58] text-white p-5 text-sm font-bold tracking-wide">
                 <div className="col-span-1">Feature</div>
                 <div className="col-span-1 opacity-80">Corporate Chain</div>
                 <div className="col-span-1 text-[#AEE9F5] text-lg">Old Glory</div>
              </div>
              
              {[
                { feat: "Doctor", bad: "Rotating interns & juniors", good: "Same Senior Doctor (15y+)" },
                { feat: "Pricing", bad: "Teaser prices + Hidden fees", good: "Fixed, Transparent Pricing" },
                { feat: "Implants", bad: "Economy / Generic kits", good: "Osstem, Nobel, Straumann" },
                { feat: "Focus", bad: "Volume / Sales Targets", good: "2 Surgeries/Day (Quality)" },
                { feat: "Warranty", bad: "Limited / Conditions apply", good: "Lifetime Warranty" },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 p-5 text-sm border-b border-slate-100 ${i%2===0 ? 'bg-white' : 'bg-slate-50'}`}>
                   <div className="font-bold text-slate-700">{row.feat}</div>
                   <div className="text-slate-500">{row.bad}</div>
                   <div className="font-bold text-[#1E4D58] flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" /> {row.good}
                   </div>
                </div>
              ))}
           </div>
        </div>
    </Section>
);

const PricingSection = () => (
    <Section className="bg-white">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Fixed, All-Inclusive Packages</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
                No hidden costs. Every plan includes surgery, implant body, healing abutment, X-rays, and lifetime warranty.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Standard Plan */}
            <div className="bg-white rounded-[32px] p-8 border-2 border-slate-100 hover:border-[#1E4D58] hover:shadow-xl hover:shadow-[#1E4D58]/10 transition-all relative group">
                <div className="absolute top-0 right-0 bg-[#E0F2F7] text-[#1E4D58] text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-[30px]">
                    VALUE CHOICE
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Standard Plan</h3>
                <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-[#1E4D58]">₹20k - ₹25k</span>
                </div>
                <p className="text-sm text-slate-500 mb-6">Brands: Osstem / Hi-Tec</p>
                <p className="text-sm font-medium text-slate-700 mb-6 bg-slate-50 p-3 rounded-lg">
                    Best for: Back teeth & high chewing load areas.
                </p>
                <ul className="space-y-3 mb-8">
                    {["Titanium Implant", "15 Year Warranty", "Standard Crown", "2 Free Follow-ups"].map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-[#1E4D58]" /> {feat}
                        </li>
                    ))}
                </ul>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=I%20am%20interested%20in%20Standard%20Implant.`} className="block w-full py-3 rounded-xl border-2 border-[#1E4D58] text-[#1E4D58] font-bold text-center hover:bg-[#E0F2F7] transition-all">
                    Get Standard Quote
                </a>
            </div>

            {/* Premium Plan */}
            <div className="bg-[#1E4D58] rounded-[32px] p-8 border-2 border-[#1E4D58] text-white relative shadow-xl transform md:-translate-y-4 transition-transform hover:scale-[1.01]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#AEE9F5] text-[#1E4D58] text-xs font-bold px-4 py-1.5 rounded-b-xl shadow-md">
                    MOST PATIENTS CHOOSE THIS
                </div>
                <h3 className="text-2xl font-bold mb-2 mt-2">Premium Swiss Plan</h3>
                <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-white">₹30k - ₹45k</span>
                </div>
                <p className="text-sm text-teal-200 mb-6">Brands: Nobel Biocare / Straumann</p>
                <p className="text-sm font-medium text-white mb-6 bg-white/10 p-3 rounded-lg border border-white/10">
                    Best for: Smile zone (front teeth) & immediate loading.
                </p>
                <ul className="space-y-3 mb-8">
                    {["Titanium/Zirconia", "Lifetime Warranty", "Premium Crown", "Priority Support"].map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-teal-50">
                            <CheckCircle2 className="w-4 h-4 text-[#AEE9F5]" /> {feat}
                        </li>
                    ))}
                </ul>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=I%20am%20interested%20in%20Premium%20Implant.`} className="block w-full py-3 rounded-xl bg-white text-[#1E4D58] font-bold text-center hover:bg-[#AEE9F5] transition-all shadow-lg">
                    Get Premium Quote
                </a>
            </div>
        </div>
        
        <div className="text-center mt-8">
            <p className="text-slate-500 text-sm">Need Full Mouth Implants? <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-[#1E4D58] font-bold underline">Get a Custom Quote</a></p>
        </div>
    </Section>
);

const EligibilitySection = () => (
    <Section className="bg-[#F8F9FA]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-green-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" /> Great Candidate
                </h3>
                <ul className="space-y-4">
                    {["Missing one or more teeth", "Want treatment from Senior Doctor ONLY", "Prefer fixed, transparent pricing", "Want implants that last 15-25+ years"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-red-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <XCircle className="w-6 h-6 text-red-600" /> Not Suitable
                </h3>
                <ul className="space-y-4">
                    {["Uncontrolled diabetes (High HbA1c)", "Heavy smoking habits", "Severe bone loss (without grafting)", "Undergoing radiation therapy"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0"></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </Section>
);

const CostOfDelaySection = () => (
    <Section className="bg-red-50">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
            <div className="flex-1">
                <div className="inline-flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-widest mb-2">
                    <AlertTriangle className="w-4 h-4" /> Critical Warning
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Every Month You Delay = <span className="text-red-600">More Bone Loss</span></h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Bone loss begins within <strong>6-12 months</strong> of losing a tooth. Waiting makes surgery harder, requires expensive bone grafting (extra ₹15k), and causes facial sagging (early aging).
                </p>
                <div className="p-4 bg-white rounded-xl border border-red-100 shadow-sm">
                    <p className="text-sm font-bold text-slate-800">Treat Now = Cheaper, Faster, & Stronger Results.</p>
                </div>
            </div>
            <div className="shrink-0 bg-white p-6 rounded-2xl shadow-md border border-red-100 text-center">
                <p className="text-xs text-slate-500 uppercase font-bold mb-2">Consultation Fee</p>
                <p className="text-4xl font-bold text-[#1E4D58] mb-1">FREE</p>
                <p className="text-xs text-green-600 font-bold">Waived for Today</p>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="mt-4 block bg-[#1E4D58] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-[#163a42] transition-all">
                    Claim Offer
                </a>
            </div>
        </div>
    </Section>
);

const JourneySection = () => (
    <Section className="bg-white">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Your 2-Visit Implant Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-slate-200 -z-10"></div>

            {[
                { step: "1", title: "Visit 1: Placement", time: "45 Mins", desc: "CBCT Scan → Planning → Painless Implant Placement." },
                { step: "2", title: "Healing Phase", time: "8-12 Weeks", desc: "The implant integrates naturally with your jawbone (Osseointegration)." },
                { step: "3", title: "Visit 2: Crown", time: "30 Mins", desc: "We place your permanent ceramic crown. You walk out smiling!" }
            ].map((item, i) => (
                <div key={i} className="text-center bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
                    <div className="w-16 h-16 bg-[#1E4D58] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg border-4 border-white">
                        {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-xs font-bold text-[#1E4D58] uppercase mb-3">{item.time}</p>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
            ))}
        </div>
    </Section>
);

const MeetSurgeonSection = () => (
    <Section className="bg-[#E0F2F7]">
         <div className="bg-white rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-xl border border-slate-100">
            <div className="shrink-0 relative">
               <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#1E4D58] shadow-lg">
                  <img src="/tan.jpeg" alt="Dr. Tanmay" className="w-full h-full object-cover" />
               </div>
               <div className="absolute bottom-0 right-0 bg-[#1E4D58] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md border-2 border-white">
                  15+ Years Exp
               </div>
            </div>
            <div>
               <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Meet Your Surgeon: Dr. Tanmay Sharma</h3>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                   <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-[#1E4D58]"/> Senior Implantologist</li>
                   <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-[#1E4D58]"/> 1000+ Implants Placed</li>
                   <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-[#1E4D58]"/> Performs Every Surgery Personally</li>
                   <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-[#1E4D58]"/> Trusted by 200+ Mansarovar Families</li>
               </ul>
               <div className="flex flex-wrap gap-4">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="px-8 py-3 bg-[#1E4D58] rounded-full text-sm font-bold text-white hover:bg-[#163a42] transition-colors shadow-lg">
                      Ask Dr. Tanmay a Question
                  </a>
               </div>
            </div>
         </div>
    </Section>
);

const ScarcitySection = () => (
    <Section className="bg-white text-center">
        <div className="inline-block p-8 rounded-[32px] border-2 border-red-100 bg-red-50 max-w-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">⚠️ Only 2 Implant Slots Per Day</h3>
            <p className="text-slate-600 mb-6">
                To maintain strict sterilization protocols and surgical precision, we strictly limit our major surgeries. Slots typically fill 3-5 days in advance.
            </p>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20what%20is%20the%20next%20available%20implant%20slot%3F`} className="inline-flex items-center gap-2 text-red-600 font-bold hover:underline">
                <CalendarCheck className="w-5 h-5" /> Check Next Available Slot on WhatsApp
            </a>
        </div>
    </Section>
);



export default function DentalImplantsPage() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen pb-20 md:pb-0 font-sans">
       
        <ImplantHero />
        <OwnerDoctorAdvantage />
        <VIPServiceSection />
        <ComparisonSection />
        <PricingSection />
        <EligibilitySection />
        <CostOfDelaySection />
        <MeetSurgeonSection />
        <JourneySection />
        <ScarcitySection />
        
       
        <section className="py-20 px-4 text-center bg-[#1E4D58] text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your New Smile Is Just 2 Visits Away</h2>
            <p className="text-teal-100 mb-8 max-w-xl mx-auto">Send your X-ray for a free eligibility check or book your consultation today.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Doctor,%20I%20want%20to%20send%20my%20X-ray.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1E4D58] px-8 py-4 rounded-full font-bold shadow-xl hover:bg-teal-50 transition-all flex items-center justify-center gap-2"
                >
                <MessageCircle className="w-5 h-5" /> Free WhatsApp Check
                </a>
                <a 
                href={`tel:${PHONE_NUMBER}`}
                className="bg-[#163a42] border border-[#AEE9F5]/30 text-white px-8 py-4 rounded-full font-bold hover:bg-[#122e35] transition-all flex items-center justify-center gap-2"
                >
                <Phone className="w-5 h-5" /> Call for Quote
                </a>
            </div>
        </section>
    </main>
  );
}