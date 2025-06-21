import React from 'react';

const TestimonialsHero = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/testimonials-hero.jpg')",
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
          Patient Testimonials
        </h1>
        <p 
          className="text-xl md:text-2xl max-w-3xl mx-auto"
          style={{ color: "#ffffff" }}
        >
          Hear what our patients have to say about their experience at Old Glory Dental Clinic
        </p>
      </div>
    </section>
  );
};

export default TestimonialsHero; 