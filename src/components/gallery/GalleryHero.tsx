import React from 'react';

const GalleryHero = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/gallery-hero.jpg')",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ color: "#ffffff" }}
        >
          Our Gallery
        </h1>
        <p 
          className="text-xl md:text-2xl max-w-3xl mx-auto"
          style={{ color: "#ffffff" }}
        >
          Take a look at our state-of-the-art facility and successful treatments
        </p>
      </div>
    </section>
  );
};

export default GalleryHero; 