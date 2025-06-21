"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject:formData.subject,
          msg: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus({ type: "success", message: data.message || "Message sent successfully!" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      setStatus({ type: "error", message: error.message || "Error sending message" });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Cool Intro Section */}
      <div className="relative text-center mb-16 py-10 px-4  ">

  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
    We'd Love to Hear From You
  </h1>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    Whether it’s a consultation, feedback, or a simple hello — let us know how we can help you smile with confidence.
  </p>
</div>


      <div className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>

  {/* Location */}
  <div className="flex items-start gap-4">
    <MapPin className="text-indigo-600 mt-1" size={24} />
    <div>
      <h3 className="text-lg font-semibold text-gray-800">Our Location</h3>
      <p className="text-gray-600">
        124/505, Vikramaditya Marg, Sector 12, Mansarovar,<br />
        Jaipur, Rajasthan 302020
      </p>
    </div>
  </div>

  {/* Phone - Click to call */}
  <div className="flex items-start gap-4">
    <Phone className="text-indigo-600 mt-1" size={24} />
    <div>
      <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
      <a
        href="tel:+919216213329"
        className="text-gray-600 hover:text-indigo-600 underline transition"
      >
       (+91) 92162 13329
      </a>
    </div>
  </div>

  {/* Email - Click to email */}
  <div className="flex items-start gap-4">
    <Mail className="text-indigo-600 mt-1" size={24} />
    <div>
      <h3 className="text-lg font-semibold text-gray-800">Email</h3>
      <a
        href="mailto:drtanmaysharma@gmail.com"
        className="text-gray-600 hover:text-indigo-600 underline transition"
      >
        drtanmaysharma@gmail.com
      </a>
    </div>
  </div>

  {/* Working Hours */}
  <div className="flex items-start gap-4">
    <Clock className="text-indigo-600 mt-1" size={24} />
    <div>
      <h3 className="text-lg font-semibold text-gray-800">Working Hours</h3>
      <p className="text-gray-600">
        Mon–Sat: 10:30 AM – 2:00 PM<br />
        5:30 PM – 8:00 PM<br />
        Sun: Closed
      </p>
    </div>
  </div>

  {/* Google Map */}
  <div className="rounded-xl overflow-hidden shadow mt-4">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.3835062932!2d75.76679267547786!3d26.841287863156268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db59988c3f6fd%3A0xa3cfca109e4b6cd3!2sOld%20Glory%20Orthodontics%20%26%20Dental%20Care!5e1!3m2!1sen!2sin!4v1749836494063!5m2!1sen!2sin"
      width="100%"
      height="180"
      className="w-full h-48 border-0"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>


            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1" htmlFor="message">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute top-3 left-3 text-gray-400" size={18} />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                {status && (
                  <p
                    className={`text-sm font-medium ${
                      status.type === "success" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {status.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-300 ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
