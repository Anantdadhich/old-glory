"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Book Appointment", path: "/book" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white shadow-md py-2"
            : "bg-white/90 backdrop-blur-md py-4"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center bg-white">
              <img
                src="/logo.png"
                alt="Old Glory Dental Clinic"
                className="h-12 mr-3"
              />
              <div className="hidden md:block">
                <h1 className="font-bold text-xl text-blue-700">Old Glory</h1>
                <p className="text-sm text-green-600 font-medium">Dental Clinic</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={cn(
                    "px-4 py-2 rounded-md font-medium text-sm transition-colors hover:text-blue-700",
                    location.startsWith(item.path)
                      ? "text-blue-700"
                      : "text-gray-600"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center">
              <a
                href="tel:+919216213329"
                className="flex items-center text-blue-700 font-medium mr-6 hover:underline"
              >
                <Phone size={18} className="mr-2" />
                <span>(+91) 92162 13329</span>
              </a>
              <Link
                href="/book"
                className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-gray-700 focus:outline-none"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col transition-all duration-300 ease-in-out transform",
          isOpen ? "translate-x-0 opacity-100 bg-white" : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <img
              src="/logo.png"
              alt="Old Glory Dental Clinic"
              className="h-10 mr-2"
            />
            <div>
              <h1 className="font-bold text-lg text-blue-700">Old Glory</h1>
              <p className="text-sm text-green-600 font-medium">Dental Clinic</p>
            </div>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 p-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-md font-medium transition-all duration-200",
                location.startsWith(item.path)
                  ? "text-blue-700 bg-blue-50"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t space-y-3">
          <a
            href="tel:+919216213329"
            className="flex items-center justify-center gap-2 text-blue-700 font-medium py-3 px-4 bg-gray-50 rounded-md hover:bg-gray-100 transition"
          >
            <Phone size={18} />
            <span>(+91) 92162 13329</span>
          </a>
          <Link
            href="/book"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-blue-700 text-white px-4 py-3 rounded-md text-center font-medium hover:bg-blue-800 transition"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
