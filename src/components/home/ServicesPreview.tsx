

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

 const ServicesPreview = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 lg:py-24 bg-white">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-medium text-[#1A1A1A] mb-6 leading-tight">
          Comprehensive Dental Services<br />
          For A Healthy Smile
        </h2>
        <p className="text-gray-600 text-lg">
          Whether you need routine check-ups, cosmetic enhancements, or advanced dental solutions, our expert team provides comprehensive care to keep your smile healthy.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Card 1: General Dentistry */}
        <div className="bg-[#F8F9FA] rounded-[32px] p-6 flex flex-col justify-between h-[450px] relative group overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-3">General Dentistry</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-[90%]">
              Complete check-ups, professional cleaning, and preventive care to keep your teeth healthy and strong.
            </p>
          </div>
          
          {/* Image Container */}
          <div className="relative w-full h-56 rounded-2xl overflow-hidden mt-auto">
             <img 
                src="https://www.esteticacosmetology.com/wp-content/uploads/2018/02/general-dentistry-new.jpg" 
                alt="General Dentistry"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
             />
          </div>

          {/* Floating Action Button */}
          <Link href="/services#general">
            <button className="absolute top-[50%] right-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#1A1A1A]  hover:text-black transition-all duration-300 z-20 group-hover:-translate-y-2">
                <ArrowUpRight className="w-6 h-6" />
            </button>
          </Link>
        </div>

        {/* Card 2: Cosmetic Dentistry */}
        <div className="bg-[#F8F9FA] rounded-[32px] p-6 flex flex-col justify-between h-[450px] relative group overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-3">Cosmetic Dentistry</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-[90%]">
              Enhance your smile with whitening, veneers, and aesthetic treatments tailored to your unique needs.
            </p>
          </div>
          
          {/* Image Container */}
          <div className="relative w-full h-56 rounded-2xl overflow-hidden mt-auto">
             <img 
                src="https://thewhitetusk.b-cdn.net/wp-content/uploads/2023/02/veneers.webp" 
                alt="Cosmetic Dentistry"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
             />
          </div>

          {/* Floating Action Button */}
          <Link href="/services#cosmetic">
            <button className="absolute top-[50%] right-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#1A1A1A]  hover:text-black transition-all duration-300 z-20 group-hover:-translate-y-2">
                <ArrowUpRight className="w-6 h-6" />
            </button>
          </Link>
        </div>

        {/* Card 3: More Services (Purple Accent) */}
        <div className="bg-[#EBC7E6] rounded-[32px] p-8 flex flex-col justify-between h-[450px] relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-[#4A2B45] mb-4 leading-tight">
                More Services <br/>For Your Perfect Smile
            </h3>
            <p className="text-[#6D4C68] font-medium">
                Implants, Orthodontics, Pediatric care and more.
            </p>
          </div>
          
          {/* Abstract Background Image */}
          <div className="absolute -right-12 top-24 w-64 h-64 rounded-full overflow-hidden opacity-40 mix-blend-multiply pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1588776816549-43427a616270?q=80&w=600" 
                alt="Smile" 
                className="w-full h-full object-cover"
              />
          </div>

          {/* CTA Button */}
          <Link href="/services" className="z-10 mt-auto">
            <button className="bg-[#5A3E56] text-white px-8 py-4 rounded-full font-semibold w-fit hover:bg-[#463043] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group-hover:gap-3">
               Explore All Services
               <ArrowUpRight className="w-5 h-5" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;