"use client";

import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      const result = await response.json();
  
      if (result.result === "success") {
        alert("Appointment booked successfully!");
      } else {
        alert("Failed to book appointment.");
      }
    } catch (error) {
      console.error("Error submitting appointment:", error);
      alert("Something went wrong.");
    }
  };
  
  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
          <div className="mb-2 inline-block bg-blue-50 text-blue-800 font-medium px-4 py-2 rounded-md text-sm shadow-sm">
  ⚠️ 3 free braces consults left – book now!
</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Book Your Appointment
            </h2>
            <p className="text-lg text-gray-600">
              Schedule your visit with our dental experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Form Section */}
            <form
  onSubmit={handleSubmit}
  className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Full Name */}
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
      <div className="relative">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
    </div>

    {/* Email */}
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
    </div>

    {/* Phone */}
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
      <div className="relative">
        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
    </div>

    {/* Service */}
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">Service Required</label>
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      >
        <option value="">Select a service</option>
        <option value="general">General Dentistry</option>
        <option value="cosmetic">Cosmetic Dentistry</option>
        <option value="orthodontics">Orthodontics</option>
        <option value="pediatric">Pediatric Dentistry</option>
        <option value="emergency">Emergency Dental Care</option>
        <option value="implants">Dental Implants</option>
        <option value="root-canal">Root Canal Treatment (RCT)</option>
        <option value="teeth-whitening">Teeth Whitening</option>
        <option value="dentures">Dentures (Complete / Partial)</option>
        <option value="tooth-removal">Tooth Extraction / Wisdom Tooth Removal</option>
        <option value="gum-treatment">Gum Treatment (Laser / Flap Surgery)</option>
      </select>
    </div>

    {/* Date */}
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">Preferred Date</label>
      <div className="relative">
        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
    </div>

    {/* Time */}
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">Preferred Time</label>
      <div className="relative">
        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
    </div>
  </div>

  {/* Message */}
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-700">Additional Information</label>
    <div className="relative">
      <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Please provide any additional details or concerns..."
      />
    </div>
  </div>

  {/* Submit */}
  <div>
    <button
      type="submit"
      className="w-full py-3 px-6 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
    >
      Book Appointment
    </button>
  </div>
</form>


           
            <div className="hidden md:block ">
              <img
                src="/book.png"
                alt="Dentist Appointment"
                className=" w-full h-auto object-cover"
              />
            </div>
          </div>

         
          <div className="mt-10 md:hidden">
            <img
              src="/book.png"
              alt="Dentist Appointment"
              className=" w-full h-auto object-cover"
            />
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
