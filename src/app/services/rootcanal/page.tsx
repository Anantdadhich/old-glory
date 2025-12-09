"use client";

import React, { useState } from "react";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Star, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Zap, 
  ArrowRight,
  ChevronDown,
  Activity,
  Sparkles,
  Trophy
} from "lucide-react";

// --- Constants ---
const WHATSAPP_NUMBER = "918875700500"; 
const PHONE_NUMBER = "+918875700500";

// --- Helper Components ---

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-16 lg:py-24 px-4 md:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

const StickyMobileFooter = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50 md:hidden p-3 flex gap-3 items-center safe-area-bottom">
    <a 
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Dr.%20Tanmay,%20I'm%20in%20pain%20and%20need%20an%20emergency%20appointment.`}
      className="flex-1 flex flex-col justify-center items-start pl-2"
    >
      <div className="flex items-center gap-1.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
        </span>
        <span className="font-bold text-slate-800 text-sm">Emergency: OPEN</span>
      </div>
      <span className="text-[10px] text-slate-500">Avg Response: 40s</span>
    </a>
    <a 
      href={`tel:${PHONE_NUMBER}`}
      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 animate-pulse-slow shadow-lg"
    >
      <Phone className="w-4 h-4" /> CALL DOCTOR
    </a>
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:shadow-md">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="font-bold text-slate-800">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-50 mt-2">
          {answer}
        </div>
      </div>
    </div>
  );
};

// --- Sub-Sections (Defined outside main component to fix React/TS errors) ---

const RootCanalHero = () => {
  return (
    <section className="relative w-full bg-[#F8F9FA] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1E4D58 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E0F2F7] rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/2"></div>
      
      {/* 1. Urgency Alert Bar */}
      <div className="bg-[#1E4D58] text-white py-2.5 px-4 text-xs md:text-sm font-bold tracking-wide relative z-20 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span>⚠️ Severe Pain? 2 Emergency Slots Available Today</span>
          </div>
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center gap-2 bg-white text-[#1E4D58] px-3 py-1.5 rounded-full font-extrabold shadow-[0_1px_8px_rgba(0,0,0,0.15)] hover:bg-[#E0F2F7] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" /> Call Now
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* --- Left: Content --- */}
        <div className="flex flex-col gap-8">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#1E4D58]/10 rounded-full w-fit shadow-sm animate-fade-in-up">
             <div className="flex items-center gap-1 pl-1">
                 <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                 <span className="text-xs font-bold text-slate-800">4.9/5 (87 Reviews) • Dr. Tanmay & Dr. Ridam</span>
             </div>
          </div>

          <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.1] tracking-tight">
                Severe Tooth Pain? <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E4D58] via-[#2A9D8F] to-[#1E4D58] font-bold">
                  We Stop It in 60 Mins.
                </span>
              </h1>
              
              <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
                Painless, Single-Sitting Root Canal Treatment in <span className="font-bold text-[#1E4D58]">Mansarovar, Jaipur</span>. No traffic, no waiting lists.
              </p>
          </div>

          {/* PAIN SCALE TRIGGERS */}
          <div className="space-y-3">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#1E4D58]" /> How bad is your pain?
              </p>
              <div className="flex flex-wrap gap-3">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Dr.%20Tanmay,%20mild%20pain.`} className="flex-1 min-w-[100px] py-3 px-4 rounded-xl border border-yellow-200 bg-yellow-50 text-yellow-800 font-bold text-sm text-center hover:bg-yellow-100 transition-all cursor-pointer">
                      🟡 Mild
                  </a>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Dr.%20Tanmay,%20throbbing%20pain.`} className="flex-1 min-w-[120px] py-3 px-4 rounded-xl border border-orange-200 bg-orange-50 text-orange-800 font-bold text-sm text-center hover:bg-orange-100 transition-all cursor-pointer">
                      🟠 Throbbing
                  </a>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Dr.%20Tanmay,%20UNBEARABLE%20pain.`} className="flex-1 min-w-[130px] py-3 px-4 rounded-xl border border-red-200 bg-red-50 text-red-700 font-bold text-sm text-center hover:bg-red-100 transition-all shadow-sm cursor-pointer animate-pulse-slow">
                      🔴 Unbearable
                  </a>
              </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Dr.%20Tanmay,%20checking%20emergency%20availability.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1E4D58] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#163a42] hover:shadow-xl hover:shadow-[#1E4D58]/20 hover:-translate-y-0.5 transition-all duration-300 text-base flex items-center gap-2 group"
            >
                Check Availability
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
                <span className="text-sm">₹500 Fee Waived*</span>
            </div>
          </div>

          {/* Stats Divider */}
          <div className="w-full h-px bg-slate-200/60 my-2"></div>

          {/* Social Proof */}
          <div className="flex items-center justify-between max-w-md">
              <div>
                  <p className="text-2xl font-bold text-slate-900">1.2k+</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">RCTs Done</p>
              </div>
              <div>
                  <p className="text-2xl font-bold text-slate-900">1 Hr</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Single Sitting</p>
              </div>
              <div>
                  <p className="text-2xl font-bold text-slate-900">100%</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Pain Free</p>
              </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative group">
           <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-white aspect-[4/5] md:aspect-square lg:aspect-[4/5] z-10 transform transition-transform duration-700 hover:rotate-1">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://rajdentalandimplantexpert.com/wp-content/uploads/sites/125/2025/02/ROOT-CANAL-TREATMENT-RCT-2.webp')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E4D58]/90 via-transparent to-transparent opacity-80"></div>
              
              {/* Floating Trust Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl p-5 rounded-[24px] shadow-lg border border-white/50">
                 <div className="flex gap-4">
                    <div className="bg-[#E0F2F7] p-3 rounded-full text-[#1E4D58] h-fit">
                       <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-slate-900 font-bold text-sm">"I felt nothing!"</p>
                       <p className="text-slate-600 text-xs mt-1 italic leading-relaxed">
                         "I kept waiting for the pain to start, but the doctor said 'We are done.' Truly painless."
                       </p>
                       <p className="text-[#1E4D58] text-[10px] font-bold mt-2 uppercase">- Anjali R., Jaipur</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#AEE9F5] rounded-full blur-[60px] opacity-60 -z-10 animate-pulse-slow"></div>
           <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#1E4D58] rounded-full blur-[60px] opacity-20 -z-10"></div>

           <div className="absolute top-8 -left-6 bg-white py-2 px-4 rounded-xl shadow-lg border border-slate-100 items-center gap-2 -rotate-3 z-20 hidden md:flex">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-xs font-bold text-slate-800">Accepting Emergency Cases</span>
           </div>
        </div>

        </div>
      </div>
    </section>
  );
};

const FearKillerSection = () => (
    <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
           <span className="text-[#1E4D58] font-bold text-xs uppercase tracking-widest mb-2 block">Zero-Pain Protocol</span>
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Scared of the Needle?</h2>
           <p className="text-slate-600">If your biggest fear is "the injection", you're not alone. We use a proprietary 2-Step Protocol.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {[
               { id: 1, title: "The Pre-Numb", text: "Flavoured surface gel applied to gums. We wait 2 minutes until gums are numb.", color: "bg-blue-50 text-blue-600" },
               { id: 2, title: "Sleep-Gel Injection", text: "Micro-thin needle technique. You hardly feel it because of Step 1.", color: "bg-green-50 text-green-600" },
               { id: 3, title: "Silent Technology", text: "We use Electric Rotary Instruments (quiet & gentle), not loud air-drills.", color: "bg-purple-50 text-purple-600" }
           ].map((item) => (
               <div key={item.id} className="bg-[#F8F9FA] p-8 rounded-[32px] hover:shadow-xl transition-all border border-slate-100 hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold ${item.color}`}>
                      {item.id}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
               </div>
           ))}
        </div>
    </Section>
);

const BeforeAfterSection = () => {
    return (
      <section className="relative w-full px-4 md:px-8 lg:px-12 py-20 bg-white overflow-hidden border-t border-slate-100">
          <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E4D58]/5 text-[#1E4D58] text-xs font-bold tracking-widest uppercase mb-4">
                      <Sparkles className="w-3 h-3" /> Restoring Smiles
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
                      Saved Teeth <span className="text-[#1E4D58] font-serif italic">Stories</span>
                  </h2>
                  <p className="text-slate-500 text-lg leading-relaxed">
                      We fight to save your natural teeth. See the difference our single-sitting RCT makes.
                  </p>
              </div>
  
              <div className="">
                  {/* Case 1 */}
                  <div className="group bg-white rounded-[32px] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 hover:border-[#1E4D58]/20 transition-all duration-500">
                      <div className="relative h-[300px] w-full flex">
                          <div className="relative w-1/2 h-full border-r-2 border-white">
                              <img src="https://media.istockphoto.com/id/2154757667/photo/dentistry-treatment-case-close-up-view.jpg?s=612x612&w=0&k=20&c=6Hqloz4m5rr3JRr0AIW18eL39CTzYEXIpYzyKVyQ8EM=" alt="Infected Tooth" className="w-full h-full object-cover grayscale" />
                              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Infected</div>
                          </div>
                          <div className="relative w-1/2 h-full">
                              <img src="https://media.istockphoto.com/id/2154757675/photo/dental-clinical-case-treatment-macro-close-up.jpg?s=612x612&w=0&k=20&c=fTiKGuJ5KVp7vsdL5sVa-mbXdfzSA3hRQK3FhJaPwx0=" alt="Healed Tooth" className="w-full h-full object-cover" />
                              <div className="absolute top-4 right-4 bg-[#1E4D58] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-lg">Saved</div>
                          </div>
                      </div>
                      <div className="p-8 bg-[#F8F9FA]">
                          <h3 className="text-xl font-bold text-slate-900 mb-2">Severe Infection Healed</h3>
                          <p className="text-sm text-slate-500">Painless RCT + Zirconia Crown • 2 Visits Total</p>
                      </div>
                  </div>

                
              </div>
          </div>
      </section>
    );
};

const ComparisonSection = () => (
    <Section className="bg-[#E0F2F7]">
        <div className="max-w-4xl mx-auto">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900">Modern Science vs Old-School</h2>
              <p className="text-slate-600">Why professionals in Jaipur choose Old Glory.</p>
           </div>

           <div className="bg-white rounded-[24px] shadow-xl overflow-hidden border border-slate-200">
              <div className="grid grid-cols-3 bg-[#1E4D58] text-white p-5 text-sm font-bold tracking-wide">
                 <div className="col-span-1">Feature</div>
                 <div className="col-span-1 opacity-80">Typical Clinic</div>
                 <div className="col-span-1 text-[#AEE9F5]">Old Glory</div>
              </div>
              
              {[
                { feat: "RCT Technique", bad: "Hand Files (Slow, can hurt)", good: "Rotary (Silent & Fast)" },
                { feat: "Visits Needed", bad: "3–4 Visits", good: "Single Sitting (60 mins)" },
                { feat: "Who Treats You", bad: "Junior Dentist", good: "Owner-Doctors (15y Exp)" },
                { feat: "Pain Control", bad: "Standard Injection", good: "Zero-Pain Protocol" },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 p-5 text-sm border-b border-slate-100 ${i%2===0 ? 'bg-white' : 'bg-slate-50'}`}>
                   <div className="font-bold text-slate-700">{row.feat}</div>
                   <div className="text-slate-500">{row.bad}</div>
                   <div className="font-bold text-[#1E4D58] flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> {row.good}
                   </div>
                </div>
              ))}
           </div>
        </div>
    </Section>
);

const DoctorNoteSection = () => (
    <Section className="bg-white">
         <div className="bg-[#F8F9FA] rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-slate-100">
            <div className="shrink-0 relative">
               <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img src="/tan.jpeg" alt="Dr. Tanmay" className="w-full h-full object-cover" />
               </div>
               <div className="absolute -bottom-3 -right-3 bg-[#1E4D58] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Chief Dentist
               </div>
            </div>
            <div>
               <h3 className="text-2xl font-bold text-slate-900 mb-4">A Personal Note from Dr. Tanmay</h3>
               <p className="text-slate-600 italic text-lg leading-relaxed mb-6">
                  “I don’t run a franchise. I own this practice and treat most emergency patients myself. When you walk in with pain, it becomes my responsibility. My only goal is simple: get you out of pain within an hour — without fear, without upselling, without wasting your time.”
               </p>
               <div className="mt-6 flex flex-wrap gap-4">
                  <a href={`tel:${PHONE_NUMBER}`} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 hover:border-[#1E4D58] transition-colors">Call Dr. Tanmay</a>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="px-6 py-3 bg-[#1E4D58] rounded-full text-sm font-bold text-white hover:bg-[#163a42] transition-colors">Message on WhatsApp</a>
               </div>
            </div>
         </div>
    </Section>
);

const PricingLocationSection = () => (
    <Section className="bg-white pt-0">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pricing */}
            <div className="bg-white border-2 border-[#E0F2F7] rounded-[32px] p-8 shadow-sm">
               <h3 className="text-2xl font-bold text-slate-900 mb-6">Simple, Fixed Pricing.</h3>
               <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                     <span className="font-medium text-slate-600">Emergency Consultation</span>
                     <span className="font-bold text-green-600">FREE* <span className="text-xs text-slate-400 font-normal line-through">₹500</span></span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                     <span className="font-medium text-slate-600">Painless RCT (Standard)</span>
                     <span className="font-bold text-slate-900">₹4,500 – ₹6,500</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                     <span className="font-medium text-slate-600">Rotary RCT (Premium)</span>
                     <span className="font-bold text-slate-900">₹6,500 – ₹8,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="font-medium text-slate-600">Zirconia Crown (15y Warranty)</span>
                     <span className="font-bold text-slate-900">₹8,500 – ₹12,000</span>
                  </div>
               </div>
               <div className="mt-6 text-xs text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> No Hidden Fee Promise — final price given before treatment.
               </div>
            </div>

            {/* Location */}
            <div className="bg-[#1E4D58] rounded-[32px] p-8 text-white relative overflow-hidden flex flex-col justify-between">
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Located in Mansarovar</h3>
                  <div className="space-y-3 mb-6">
                     <div className="flex gap-3">
                        <MapPin className="w-5 h-5 text-[#AEE9F5] shrink-0" />
                        <p className="text-sm text-teal-50">124/505, Vikramaditya Marg 80 ft road, Main Gate, opposite Dwarika Das Residency, Sector 12, Jaipur</p>
                     </div>
                     <div className="flex gap-3">
                        <Clock className="w-5 h-5 text-[#AEE9F5] shrink-0" />
                        <p className="text-sm text-teal-50">Mon-Sat: 10:30 AM - 8:00 PM</p>
                     </div>
                  </div>
               </div>
               
               <div className="rounded-2xl overflow-hidden h-40 w-full relative z-10 border-2 border-white/20">
                  <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.3835062932!2d75.76679267547786!3d26.841287863156268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db59988c3f6fd%3A0xa3cfca109e4b6cd3!2sOld%20Glory%20Orthodontics%20%26%20Dental%20Care!5e1!3m2!1sen!2sin!4v1749836494063!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    className="border-0 grayscale-[50%]"
                    loading="lazy"
                    allowFullScreen={true}
                  ></iframe>
               </div>
               <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </div>
         </div>
    </Section>
);

const FAQSection = () => (
    <Section className="bg-[#F8F9FA]">
         <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">Common Questions</h2>
         <div className="max-w-3xl mx-auto space-y-4">
            <FAQItem question="Can I really get an RCT in one visit?" answer="Yes — about 90% of our cases finish in 45–60 minutes using Rotary Endodontics technology. No need for multiple painful visits." />
            <FAQItem question="I have swelling — is it too late?" answer="No. Swelling means infection, so you must call immediately. Do NOT apply heat packs. We can drain the infection and relieve pain instantly." />
            <FAQItem question="Can I walk in without an appointment?" answer="Yes. Pain cases are always priority. However, calling 15 mins before coming helps us prep the operatory for you." />
            <FAQItem question="How long does the numbness last?" answer="Usually 2–4 hours. This is enough time for you to get home, eat, and take your first dose of medication before sensation returns." />
         </div>
    </Section>
);

// --- Main Page Assembly ---

export default function RootCanalPage() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen pb-20 md:pb-0 font-sans">
        <StickyMobileFooter />
        <RootCanalHero />
        <FearKillerSection />
        <BeforeAfterSection />
        <ComparisonSection />
        <DoctorNoteSection />
        <PricingLocationSection />
        <FAQSection />
        
        {/* --- FINAL CTA --- */}
        <section className="py-20 px-4 text-center bg-white border-t border-slate-200">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Don’t Sleep With That Toothache.</h2>
            <p className="text-slate-600 mb-8">We have 2 emergency slots open for this evening.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Doctor,%20I%20am%20in%20pain.%20Do%20you%20have%20an%20emergency%20slot%20now?`}
                target="_blank"
                className="bg-[#1E4D58] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#163a42] transition-all flex items-center justify-center gap-2"
                >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                </a>
                <a 
                href={`tel:${PHONE_NUMBER}`}
                className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-[#1E4D58] hover:text-[#1E4D58] transition-all flex items-center justify-center gap-2"
                >
                <Phone className="w-5 h-5" /> Call Clinic Directly
                </a>
            </div>
            <p className="text-[10px] text-slate-400 mt-6">By contacting us you agree to receive messages/calls for appointment booking.</p>
        </section>
    </main>
  );
}