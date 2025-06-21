import React from 'react';

const ContactHero = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center bg-white">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/contact-hero.jpg')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Illustration & Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 space-y-8 md:space-y-0 md:space-x-12">
        {/* Illustration */}
        <img
          src="https://undraw.co/api/illustrations/undraw_contact_us_re_4qqt.svg"
          alt="Contact Us Illustration"
          className="w-72 max-w-full md:w-96"
          loading="lazy"
        />

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg md:text-xl drop-shadow-md">
            Get in touch with our team for any questions or to schedule an appointment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
