"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have this from shadcn, otherwise remove and use template literals

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Book Appointment", path: "/book" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full py-4 px-4 md:px-8 lg:px-12 flex items-center justify-between bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300">
        
        {/* --- Logo Section --- */}
        <Link href="/" className="flex items-center gap-3 z-50 group" onClick={() => setIsMenuOpen(false)}>
          {/* Custom SVG Logo from Design */}
          <div className="relative w-10 h-10 flex-shrink-0">
          <img src="/logo.png"></img>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#AEE9F5] rounded-full border-2 border-white"></div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-xl font-extrabold text-[#1A1A1A] leading-none tracking-tight">
              Old Glory
            </span>
            <span className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mt-0.5">
              Dental Clinic
            </span>
          </div>
        </Link>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={cn(
                  "hover:text-[#1A1A1A] transition-colors relative group py-1",
                  isActive ? "text-[#1A1A1A] font-semibold" : ""
                )}
              >
                {link.name}
                {/* Underline Animation */}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-[#AEE9F5] transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* --- Right Side Actions (Desktop) --- */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+919216213329"
            className="flex items-center gap-2 text-[#1A1A1A] font-bold text-sm hover:text-gray-600 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#F8F9FA] flex items-center justify-center border border-gray-100">
              <Phone className="w-4 h-4" />
            </div>
            <span>92162 13329</span>
          </a>
          <Link href="/book">
            <button className="bg-[#1A1A1A] text-white rounded-full px-6 py-2.5 hover:bg-gray-900 transition-all hover:scale-105 shadow-md text-sm font-bold">
              Book Appointment
            </button>
          </Link>
        </div>

        {/* --- Mobile Menu Toggle --- */}
        <button
          className="lg:hidden p-2 text-[#1A1A1A] hover:bg-gray-100 rounded-full transition-colors z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40 flex flex-col pt-28 px-6 pb-8 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-4 text-xl font-bold text-[#1A1A1A]">
              {navLinks.map((link) => {
                 const isActive = pathname === link.path;
                 return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between border-b border-gray-50 pb-4 group"
                  >
                    <span className={isActive ? "text-[#1A1A1A]" : "text-gray-500 group-hover:text-[#1A1A1A]"}>
                        {link.name}
                    </span>
                    {isActive && <div className="w-2 h-2 bg-[#AEE9F5] rounded-full"></div>}
                  </Link>
                )
              })}
              
              <div className="mt-6 flex flex-col gap-4">
                <a
                    href="tel:+919216213329"
                    className="flex items-center justify-center gap-2 text-[#1A1A1A] font-bold py-3 bg-gray-50 rounded-xl"
                >
                    <Phone className="w-5 h-5" />
                    <span>92162 13329</span>
                </a>
                <Link
                    href="/book"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full"
                >
                    <button className="w-full bg-[#1A1A1A] text-white py-4 text-lg rounded-xl font-bold shadow-lg">
                    Book Appointment
                    </button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}