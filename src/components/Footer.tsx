import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import  {FaWhatsapp}  from "react-icons/fa"
const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="Old Glory Dental Clinic"
                className="h-10 mr-3"
              />
              <div>
                <h3 className="font-bold text-lg text-blue-700">Old Glory</h3>
                <p className="text-sm text-green-600">Dental Clinic</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Providing exceptional dental care with a gentle touch. Your smile is our priority.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/oldgloryorthodontics/" className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/oldgloryorthodontics/" className="w-10 h-10 rounded-full bg-pink-700 flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                <Instagram size={18} />
              </a>
              <a
  href="https://wa.me/919216213329"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
>
  <FaWhatsapp size={18} />
</a>
            </div>
          
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              {["/", "/about", "/services", "/book", "/gallery", "/contact"].map((path, i) => (
                <li key={path}>
                  <Link
                    href={path}
                    className="text-gray-600 hover:text-blue-700 transition-colors"
                  >
                    {["Home", "About Us", "Our Services", "Book Appointment", "Gallery", "Contact Us"][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Our Services</h3>
            <ul className="space-y-2">
              {[
                "General Dentistry",
                "Cosmetic Dentistry",
                "Dental Implants",
                "Orthodontics",
                "Pediatric Dentistry",
                "RCT (Root Canal Therapy)",
                "Emergency Care",
                
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-600 hover:text-blue-700 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-blue-700 mr-3 mt-1 shrink-0" size={18} />
                <span className="text-gray-600">
                124/505, Vikramaditya Marg 80 ft road, Main Gate, 
                <br />
                opposite Dwarika Das Residency, Sector 12,
                <br />
                 Mansarovar, Jaipur, Rajasthan 302020
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="text-blue-700 mr-3 mt-1 shrink-0" size={18} />
                <span className="text-gray-600">
                  (+91) 92162 13329<br />
                  (+91) 98874 93549
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="text-blue-700 mr-3 shrink-0" size={18} />
                <a href="mailto:drtanmaysharma@gmail.com" className="text-gray-600 hover:text-blue-700">
                  drtanmaysharma@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="text-blue-700 mr-3 mt-1 shrink-0" size={18} />
                <span className="text-gray-600">
                  Mon-Sat: 10:30 AM - 2:00 PM<br />
                  5:30 PM –8:00 PM <br />
                  Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Old Glory Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
