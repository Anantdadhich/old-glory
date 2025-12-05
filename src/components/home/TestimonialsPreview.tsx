"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Marquee } from "../ui/marque";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ram Gopal Pareek",
    username: "5 stars · 2 months ago",
    text: "My journey from embarassing smile to a crafted beautiful smile where I can laugh out my heart was wonderful at Old Glory Orthodontics and Dental Care. Aligners given to me by Dr. Ridam and Dr. Tanmay really did magic to my teeth and made my smile awesome.",
    initials: "RG"
  },
  {
    name: "Sita Ram Kumar",
    username: "5 stars · 1 week ago",
    text: "Thank you Dr. Ridam for the wonderful smile for my mother. She had a broken front tooth and now it's all treated with a beautiful smile for my 65-year-old mother. Thank you, Team Old Glory!",
    initials: "SR"
  },
  {
    name: "Lokesh Mahawar",
    username: "Local Guide · 5 stars",
    text: "My appointment for my daughter was with Dr. Ridam Jain and Dr. Tanmay Sharma. They took the time to listen attentively to my concerns and explain everything clearly. The examination was comprehensive.",
    initials: "LM"
  },
  {
    name: "Ojaswa Sharma",
    username: "5 stars · 9 months ago",
    text: "Exceptional dental care in Jaipur! Dr. Tanmay and Dr. Ridam at Old Glory are truly the best. The replaced tooth looks so natural that no one could recognize it was treated.",
    initials: "OS"
  },
  {
    name: "Dr. Sudhanshu",
    username: "5 stars · 1 month ago",
    text: "I’m really highly impressed with both Dr. Ridam and Dr. Tanmay. They are fantastic doctors and I always get immediate relief. Best of luck to the clinic – Old Glory!",
    initials: "DS"
  },
];

const ReviewCard = ({
  name,
  username,
  text,
  initials
}: {
  name: string;
  username: string;
  text: string;
  initials: string;
}) => (
  <div className="bg-[#F8F9FA] p-8 rounded-[32px] flex flex-col justify-between h-[320px] w-[350px] md:w-[400px] mx-4 border border-slate-100 hover:shadow-lg transition-all duration-300 group">
    
    {/* Quote Text */}
    <p className="text-slate-600 text-base leading-relaxed line-clamp-4 font-medium">
      "{text}"
    </p>

    {/* Footer with Author & Icon */}
    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-200/50">
      <div className="flex items-center gap-3">
        {/* Avatar / Initials */}
        <div className="w-12 h-12 rounded-full bg-[#E0F2F7] flex items-center justify-center text-[#1E4D58] font-bold text-lg border-2 border-white shadow-sm">
           {initials}
        </div>
        
        {/* Name & Rating */}
        <div>
          <h4 className="font-bold text-slate-900 text-sm">{name}</h4>
          <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
             <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
             <span>{username}</span>
          </div>
        </div>
      </div>

      {/* Quote Icon */}
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#1E4D58] group-hover:text-white transition-colors duration-300 text-slate-300">
         <Quote className="w-5 h-5 fill-current" />
      </div>
    </div>
  </div>
);

const TestimonialsPreview = () => {
  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium text-slate-800 leading-tight">
              Healing Stories From<br/>
              Our Patients
            </h2>
          </div>
          <div className="pb-2">
            <p className="text-slate-600 text-base md:text-lg max-w-xl">
               Authentic experiences shared by real patients who found healing, comfort, and trust through our expert care.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {testimonials.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </Marquee>

        {/* Gradient Fades for Smooth Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      <div className="text-center mt-16">
        <Link href="/book" className="inline-block bg-[#1E4D58] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-[#163a42] hover:scale-105 transition-all duration-300">
           Start Your Journey Today
        </Link>
      </div>
    </section>
  );
};

export default TestimonialsPreview;