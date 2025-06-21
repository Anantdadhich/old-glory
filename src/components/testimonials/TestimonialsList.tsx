"use client";

import { Star, Play, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  { name: "Ram Gopal Pareek", username: "5 stars · 2 months ago", text: "My journey from embarassing smile to a crafted beautiful smile where I can laugh out my heart was wonderful at Old Glory Orthodontics and Dental Care. Aligners given to me by Dr. Ridam and Dr. Tanmay really did magic to my teeth and made my smile awesome. At age 55, I got this beautiful smile – even you can! Meet Dr. Ridam and Dr. Tanmay at Old Glory in Mansarovar, Jaipur." },
  { name: "Sita Ram Kumar", username: "5 stars · 1 week ago", text: "Thank you Dr. Ridam for the wonderful smile for my mother. She had a broken front tooth and now it's all treated with a beautiful smile for my 65-year-old mother. Thank you, Team Old Glory!" },
  { name: "Lokesh Mahawar", username: "Local Guide · 5 stars · 4 weeks ago", text: "My appointment for my daughter was with Dr. Ridam Jain and Dr. Tanmay Sharma. They took the time to listen attentively to my concerns and explain everything clearly. The examination was comprehensive, and I felt confident in the thoroughness of their assessment." },
  { name: "Ojaswa Sharma", username: "5 stars · 9 months ago", text: "Exceptional dental care in Jaipur! Dr. Tanmay and Dr. Ridam at Old Glory are truly the best. Dr. Ridam and team showed remarkable professionalism. The replaced tooth looks so natural that no one could recognize it was treated." },
  { name: "Dr. Sudhanshu", username: "5 stars · 1 month ago", text: "I'm really highly impressed with both Dr. Ridam and Dr. Tanmay. They are fantastic doctors and I always get immediate relief. Best of luck to the clinic – Old Glory!" },
  { name: "Priya Sharma", username: "5 stars · 3 months ago", text: "The team at Old Glory made my dental experience comfortable and stress-free. Their attention to detail and caring approach is unmatched. Highly recommend their services!" },
  { name: "Rajesh Kumar", username: "5 stars · 2 weeks ago", text: "I was nervous about getting braces at my age, but Dr. Tanmay and the team made the process smooth and comfortable. The results are amazing!" },
  { name: "Anita Patel", username: "5 stars · 1 month ago", text: "The cosmetic dentistry work I received at Old Glory has transformed my smile. The team is professional, skilled, and caring. Thank you for the beautiful results!" },
];

const visualTestimonials = [
  { id: 1, type: "video", title: "Before & After - Cosmetic Dentistry", src: "/beforeafter.mp4" },
  { id: 2, type: "video", title: "Patient Testimonial - Orthodontics", src: "/brace.mp4" },
  { id: 3, type: "image", title: "Smile Makeover Journey", src: "/test2.png" },
  { id: 4, type: "image", title: "Teeth Whitening Results", src: "/test3.png" },
  {id:5 ,type:"image",title:"jb",src:"/smile.png"},
  {id:6 ,type:"video",title:"jb",src:"/tan.mp4"}
];

const ReviewCard = ({ name, username, text }: { name: string; username: string; text: string }) => (
  <figure className="h-full w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
    <figcaption className="mb-3">
      <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
      <p className="text-sm text-gray-500">{username}</p>
    </figcaption>
    <blockquote className="text-gray-700 leading-relaxed italic">"{text}"</blockquote>
  </figure>
);

const VisualTestimonialCard = ({ item }: { item: any }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (item.type === "video") {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 bg-white">
      <div className="w-full aspect-[3/3]">
        {item.type === "video" ? (
          <div className="relative w-full h-full">
            <video
              src={item.src}
              className="w-full h-full object-cover"
              muted
              loop
              autoPlay={isPlaying}
              controls={isPlaying}
              playsInline
            />
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button
                  onClick={handleClick}
                  className="bg-white rounded-full p-2.5 shadow group-hover:scale-105 transition-transform"
                >
                  <Play className="w-5 h-5 text-gray-800" fill="currentColor" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>

     
    </div>
  );
};


const TestimonialsList = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Written Testimonials */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Quote className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Read what our patients have to say about their experience at Old Glory Dental Clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>

        {/* Visual Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Visual Testimonials & Results
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {visualTestimonials.map((item) => (
            <VisualTestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsList;
