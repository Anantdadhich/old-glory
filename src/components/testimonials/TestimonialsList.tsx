"use client";

import React, { useState, useRef } from "react";
import { Star, Play, Quote, CheckCircle2 } from "lucide-react";
import { motion, useInView } from "framer-motion";

// --- Data ---
const testimonials = [
  { name: "Ram Gopal Pareek", date: "2 months ago", text: "My journey from embarassing smile to a crafted beautiful smile where I can laugh out my heart was wonderful at Old Glory. Aligners given to me by Dr. Ridam and Dr. Tanmay really did magic.", initial: "R" },
  { name: "Sita Ram Kumar", date: "1 week ago", text: "Thank you Dr. Ridam for the wonderful smile for my mother. She had a broken front tooth and now it's all treated with a beautiful smile for my 65-year-old mother.", initial: "S" },
  { name: "Lokesh Mahawar", date: "4 weeks ago", text: "My appointment for my daughter was with Dr. Ridam Jain and Dr. Tanmay Sharma. They took the time to listen attentively to my concerns and explain everything clearly.", initial: "L" },
  { name: "Ojaswa Sharma", date: "9 months ago", text: "Exceptional dental care in Jaipur! Dr. Tanmay and Dr. Ridam at Old Glory are truly the best. The replaced tooth looks so natural that no one could recognize it was treated.", initial: "O" },
  { name: "Dr. Sudhanshu", date: "1 month ago", text: "I'm really highly impressed with both Dr. Ridam and Dr. Tanmay. They are fantastic doctors and I always get immediate relief.", initial: "D" },
  { name: "Priya Sharma", date: "3 months ago", text: "The team at Old Glory made my dental experience comfortable and stress-free. Their attention to detail and caring approach is unmatched.", initial: "P" },
  { name: "Rajesh Kumar", date: "2 weeks ago", text: "I was nervous about getting braces at my age, but Dr. Tanmay and the team made the process smooth and comfortable. The results are amazing!", initial: "R" },
  { name: "Anita Patel", date: "1 month ago", text: "The cosmetic dentistry work I received at Old Glory has transformed my smile. The team is professional, skilled, and caring.", initial: "A" },
];

const visualTestimonials = [
  { id: 1, type: "video", title: "Smile Transformation", src: "/beforeafter.mp4", span: "row-span-2" },
  { id: 3, type: "image", title: "Smile Makeover", src: "/test2.png", span: "row-span-2" },
  { id: 2, type: "video", title: "Orthodontics Journey", src: "/brace.mp4", span: "row-span-1" },
  { id: 4, type: "image", title: "Whitening Results", src: "/test3.png", span: "row-span-2" },
  { id: 6, type: "video", title: "Patient Story", src: "/tan.mp4", span: "row-span-2" },
  { id: 5, type: "image", title: "Happy Patient", src: "/smile.png", span: "row-span-1" },
];

// --- Components ---

const StarRating = () => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

const ReviewCard = ({ name, date, text, initial }: typeof testimonials[0]) => (
  <div className="w-[350px] shrink-0 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#1E4D58]/20 transition-all duration-300 mx-3">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#E0F2F7] flex items-center justify-center text-[#1E4D58] font-bold text-lg">
          {initial}
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-sm">{name}</h4>
          <div className="flex items-center gap-2">
            <StarRating />
            <span className="text-[10px] text-slate-400">{date}</span>
          </div>
        </div>
      </div>
      <Quote className="w-8 h-8 text-[#1E4D58]/10 fill-current" />
    </div>
    <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">"{text}"</p>
    <div className="mt-4 flex items-center gap-1.5 text-[10px] font-medium text-[#1E4D58] bg-[#F0F9FF] w-fit px-2 py-1 rounded-full">
      <CheckCircle2 className="w-3 h-3" /> Verified Patient
    </div>
  </div>
);

const VisualCard = ({ item }: { item: any }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative group rounded-3xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50 ${item.span} h-full min-h-[250px]`}
    >
      {item.type === "video" ? (
        <>
          <video
            ref={videoRef}
            src={item.src}
            className="w-full h-full object-cover"
            loop
            muted={false} // Allow sound if user plays
            playsInline
            onClick={togglePlay}
          />
          {/* Custom Play Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex flex-col items-center justify-center cursor-pointer" onClick={togglePlay}>
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                   <Play className="w-5 h-5 text-[#1E4D58] ml-1" fill="currentColor" />
                </div>
              </div>
              <span className="mt-3 text-white font-medium text-sm tracking-wide bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">Watch Story</span>
            </div>
          )}
        </>
      ) : (
        <>
            <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        </>
      )}
      
      {/* Title Label */}
      <div className="absolute bottom-4 left-4 right-4">
        <p className="text-white text-sm font-semibold tracking-wide flex items-center gap-2">
            {item.type === "video" ? <Play className="w-3 h-3 fill-white" /> : <Star className="w-3 h-3 fill-white" />}
            {item.title}
        </p>
      </div>
    </motion.div>
  );
};

// --- Marquee Component for Infinite Scroll ---
const Marquee = ({ children, direction = "left" }: { children: React.ReactNode, direction?: "left" | "right" }) => {
  return (
    <div className="flex overflow-hidden w-full mask-linear-fade">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex shrink-0 py-4"
      >
        {children}
        {children} {/* Duplicate for seamless loop */}
      </motion.div>
    </div>
  );
};

const TestimonialsList = () => {
  // Split reviews into two rows for the marquee
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4, 8);

  return (
    <section className="bg-[#FAFCFD] overflow-hidden">
      
      {/* --- Section 1: Wall of Love (Text Reviews) --- */}
      <div className="py-20 lg:py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E4D58]/5 text-[#1E4D58] text-xs font-bold tracking-widest uppercase mb-4">
                <Star className="w-3 h-3" /> Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
                Trusted by <span className="text-[#1E4D58]">Jaipur's Smiles</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                We are proud to have transformed thousands of smiles. Here is what our patients have to say about their Old Glory experience.
            </p>
        </div>

        {/* Infinite Scrolling Marquees */}
        <div className="relative w-full">
            {/* Left fade mask overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#FAFCFD] to-transparent z-10" />
            {/* Right fade mask overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#FAFCFD] to-transparent z-10" />

            <Marquee direction="left">
                {row1.map((review, i) => <ReviewCard key={`r1-${i}`} {...review} />)}
            </Marquee>
            <Marquee direction="right">
                {row2.map((review, i) => <ReviewCard key={`r2-${i}`} {...review} />)}
            </Marquee>
        </div>
      </div>

      {/* --- Section 2: Visual Evidence (Bento Grid) --- */}
      <div className="py-20 lg:py-28 bg-white relative">
        {/* Background Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#1E4D58 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-xl">
                    <h3 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4">
                        Real Results, <br/>
                        <span className="italic text-serif text-[#1E4D58]">Real Confidence.</span>
                    </h3>
                    <p className="text-slate-500">
                        From veneers to implants, see the life-changing transformations performed by Dr. Ridam and Dr. Tanmay.
                    </p>
                </div>
                <div className="hidden md:flex items-center gap-2 text-sm font-bold text-[#1E4D58] uppercase tracking-wider">
                    Scroll to see more <CheckCircle2 className="w-4 h-4" />
                </div>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
                {visualTestimonials.map((item) => (
                    <VisualCard key={item.id} item={item} />
                ))}
            </div>
        </div>
      </div>

    </section>
  );
};

export default TestimonialsList;