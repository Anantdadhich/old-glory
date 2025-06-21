"use client";
import React, { useState } from 'react';
import Image from 'next/image';

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
    description: 'We use modern dental technology including digital X-rays, intraoral scanners, and pain-free anesthesia systems to ensure accurate and comfortable treatments.',
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
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 space-y-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Clinic in Pictures</h2>

        {galleryData.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col-reverse lg:flex-row ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            } items-center gap-12`}
          >
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 text-lg">{item.description}</p>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 w-full relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryShowcase;
