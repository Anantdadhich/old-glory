"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Expand, Sparkles, MapPin } from 'lucide-react';
import Image from 'next/image';

// --- Data (Your Exact Content) ---
const galleryData = [
  {
    id: 1,
    src: '/dent1.png',
    alt: 'Modern dental facility',
    title: 'Modern Dental Facility',
    description: 'Our clinic is equipped with a state-of-the-art facility designed for comfort and efficiency.',
  },
  {
    id: 2,
    src: '/dent2.png',
    alt: 'Dental treatment in progress',
    title: 'Advanced Treatments',
    description: 'We provide advanced dental treatments with precision and care, ensuring the best outcomes for our patients.',
  },
  {
    id: 3,
    src: '/high.png',
    alt: 'Advanced dental equipment',
    title: 'High-Tech Equipment',
    description: 'We use modern dental technology including digital X-rays and intraoral scanners to ensure accurate treatments.',
  },
  {
    id: 4,
    src: '/wait.png',
    alt: 'Comfortable waiting area',
    title: 'Relaxing Waiting Area',
    description: 'We’ve created a calming space to ensure your wait is as comfortable and stress-free as possible.',
  },
];

const GalleryShowcase = () => {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryData[0]>(null);

  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#F8F9FA] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E0F2F7]/30 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E4D58]/5 text-[#1E4D58] text-xs font-bold tracking-widest uppercase mb-4">
             <Sparkles className="w-3 h-3" /> Tour Our Clinic
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
            Experience World-Class <br />
            <span className="text-[#1E4D58] font-serif italic">Dental Care.</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Take a look inside Old Glory. From our relaxing waiting area to our high-tech operatories, every detail is designed for you.
          </p>
        </div>

        {/* --- Gallery Grid (2x2) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryData.map((item) => (
            <motion.div
              layoutId={`card-${item.id}`}
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative cursor-pointer rounded-[32px] overflow-hidden bg-white shadow-lg hover:shadow-2xl hover:shadow-[#1E4D58]/10 transition-all duration-500 aspect-[4/3] border border-white"
            >
              {/* Image */}
              <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E4D58]/95 via-[#1E4D58]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end h-full">
                  
                  {/* Expand Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <Expand className="w-5 h-5" />
                  </div>

                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-3">
                        {item.title}
                    </h3>
                    <p className="text-teal-50 text-sm md:text-base leading-relaxed opacity-90 border-l-2 border-[#AEE9F5] pl-4">
                        {item.description}
                    </p>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* --- Lightbox Modal --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[#1E4D58]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors bg-white/10 p-3 rounded-full hover:bg-white/20 z-50">
                <X className="w-6 h-6" />
            </button>

            <motion.div
              layoutId={`card-${selectedImage.id}`}
              className="bg-white rounded-[32px] overflow-hidden shadow-2xl max-w-5xl w-full max-h-[85vh] flex flex-col md:flex-row relative"
              onClick={(e) => e.stopPropagation()}
            >
                {/* Image Section */}
                <div className="w-full md:w-2/3 h-[40vh] md:h-auto relative bg-slate-50">
                    <Image
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Info Section */}
                <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-white">
                    <div className="inline-block px-3 py-1 rounded-full bg-[#E0F2F7] text-[#1E4D58] text-xs font-bold tracking-widest uppercase mb-4 w-fit">
                        Old Glory Clinic
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">
                        {selectedImage.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed mb-8 text-lg">
                        {selectedImage.description}
                    </p>
                    
                    <div className="mt-auto border-t border-slate-100 pt-6">
                        <div className="flex items-center gap-3 text-slate-500 text-sm">
                             <MapPin className="w-4 h-4 text-[#1E4D58]" />
                             <span>Mansarovar, Jaipur</span>
                        </div>
                    </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default GalleryShowcase;