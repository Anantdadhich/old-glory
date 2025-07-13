import {  Star, Users, CreditCard, MessageCircle } from "lucide-react";
import Link from "next/link";

const BracesHero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Column */}
          <div className="max-w-xl animate-fade-in">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-6">
              Affordable Braces with EMI in{" "}
              <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                Jaipur
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Get a perfect smile from Jaipur's trusted 4.9⭐ clinic with 1500+ happy patients.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="font-semibold text-gray-800">4.9⭐ Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="font-semibold text-gray-800">1500+ Patients</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-gray-800">EMI Available</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-6">
              <Link
                href="https://wa.me/917678245349?text=Hi!%20I'd%20like%20to%20schedule%20a%20dental%20appointment%20🦷📅"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-200 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Book Free Consultation on WhatsApp
              </Link>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                ✨ No consultation fee
              </span>
              <span className="flex items-center gap-1">
                💳 Easy EMI options
              </span>
              <span className="flex items-center gap-1">
                📱 Instant booking
              </span>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-green-500 opacity-10 blur-3xl"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/braces.jpg"
                alt="Braces Treatment"
                className="w-full h-auto transform scale-105 transition-transform duration-700 hover:scale-100"
              />
            </div>
          </div>
        </div>
      </div>

   
    </section>
  );
};

export default BracesHero; 