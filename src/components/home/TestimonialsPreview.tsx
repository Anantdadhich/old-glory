"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Marquee } from "../ui/marque";

const testimonials = [
  {
    name: "Ram Gopal Pareek",
    username: "5 stars · 2 months ago",
    text: "My journey from embarassing smile to a crafted beautiful smile where I can laugh out my heart was wonderful at Old Glory Orthodontics and Dental Care. Aligners given to me by Dr. Ridam and Dr. Tanmay really did magic to my teeth and made my smile awesome. At age 55, I got this beautiful smile – even you can! Meet Dr. Ridam and Dr. Tanmay at Old Glory in Mansarovar, Jaipur.",
  
  },
  {
    name: "Sita Ram Kumar",
    username: "5 stars · 1 week ago",
    text: "Thank you Dr. Ridam for the wonderful smile for my mother. She had a broken front tooth and now it's all treated with a beautiful smile for my 65-year-old mother. Thank you, Team Old Glory!",

  },
  {
    name: "Lokesh Mahawar",
    username: "Local Guide · 5 stars · 4 weeks ago",
    text: "My appointment for my daughter was with Dr. Ridam Jain and Dr. Tanmay Sharma. They took the time to listen attentively to my concerns and explain everything clearly. The examination was comprehensive, and I felt confident in the thoroughness of their assessment.",

  },
  {
    name: "Ojaswa Sharma",
    username: "5 stars · 9 months ago",
    text: "Exceptional dental care in Jaipur! Dr. Tanmay and Dr. Ridam at Old Glory are truly the best. Dr. Ridam and team showed remarkable professionalism. The replaced tooth looks so natural that no one could recognize it was treated.",
   
  },
  {
    name: "Dr. Sudhanshu",
    username: "5 stars · 1 month ago",
    text: "I’m really highly impressed with both Dr. Ridam and Dr. Tanmay. They are fantastic doctors and I always get immediate relief. Best of luck to the clinic – Old Glory!",

  },
];

const ReviewCard = ({

  name,
  username,
  text,
}: {
 
  name: string;
  username: string;
  text: string;
}) => (
  <figure
    className={cn(
      "relative h-full w-72 sm:w-80 md:w-96 cursor-pointer overflow-hidden rounded-xl border p-4 shadow-md",
      "border-gray-200 bg-white hover:bg-gray-50"
    )}
  >
    <div className="flex flex-row items-center gap-3 mb-2">
     
      <div className="flex flex-col">
        <figcaption className="text-base font-semibold text-gray-900">
          {name}
        </figcaption>
        <p className="text-xs text-gray-500">{username}</p>
      </div>
    </div>
    <blockquote className="text-sm text-gray-700 italic">
      “{text}”
    </blockquote>
  </figure>
);

const TestimonialsPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">What Our Patients Say</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Don’t just take our word for it. See what our patients have to say about their experience at Old Glory Dental Clinic.
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:25s]">
            {testimonials.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white" />
        </div>

        <div className="text-center mt-12">
          <Link href="/testimonials" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Read Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
