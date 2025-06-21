"use client";

import {
  Smile,
  Sparkles,
  Scissors,
  Baby,
  Stethoscope,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <Smile className="h-8 w-8" />,
    title: "General Dentistry",
    description:
      "Regular check-ups, cleanings, and preventative care to maintain your oral health.",
    color: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Cosmetic Dentistry",
    description:
      "Enhance your smile with our teeth whitening, veneers, and cosmetic bonding services.",
    color: "bg-green-100",
    textColor: "text-green-600",
  },
  {
    icon: <Scissors className="h-8 w-8" />,
    title: "Dental Implants",
    description:
      "Permanent, natural-looking replacements for missing teeth to restore your smile.",
    color: "bg-purple-100",
    textColor: "text-purple-600",
  },
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "Orthodontics",
    description:
      "Straighten your teeth and correct your bite with our orthodontic treatments.",
    color: "bg-yellow-100",
    textColor: "text-yellow-600",
  },
  {
    icon: <Baby className="h-8 w-8" />,
    title: "Pediatric Dentistry",
    description:
      "Gentle, specialized dental care for your children in a kid-friendly environment.",
    color: "bg-pink-100",
    textColor: "text-pink-600",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Emergency Care",
    description:
      "Urgent dental care when you need it most with same-day appointments available.",
    color: "bg-red-100",
    textColor: "text-red-600",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Discover Our Dental Services
          </h2>
          <p className="text-lg text-gray-600">
            Personalized, professional care to bring out the best in your smile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transform transition duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6",
                  service.color
                )}
              >
                <div className={cn(service.textColor)}>{service.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
              <Link
                href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-flex items-center text-blue-600 font-medium hover:underline"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition-all"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
