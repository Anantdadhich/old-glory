import {
  FaTooth,
  FaSmile,
  FaGem,
  FaTeethOpen,
  FaBrush,
  FaSyringe,
  FaTeeth,
  FaShieldAlt,
  FaXRay,
  FaSun,
  FaChild,
  FaAmbulance,
} from "react-icons/fa";
import {BrushCleaning} from "lucide-react"

import Image from "next/image";

const services = [
  {
    title: "General Dentistry",
    description:
      "Experience comprehensive dental care with our expert team. From routine check‑ups to advanced treatments, we ensure your oral health is in perfect condition.",
    icon: FaTooth,
    color: "#4F46E5",
    image: "/images/services/gen.jpg",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Our cosmetic dentistry services effectively improve the appearance of your teeth through our reliable dental bonding, braces, enamel shaping, and gum reshaping services so as to help you have the perfect looking healthy teeth. Now, you can flaunt that perfect smile and boost your confidence.",
    icon: FaSmile,
    color: "#EC4899",
    image: "/images/services/comsetic.jpeg",
  },
  {
    title: "Dental Jewellery",
    description:
      "Dental jewellery is the new trend nowadays and to provide your teeth a spark and help it look fashionable, you can go through our reliable dental procedure of attaching diamond or any other jewellery to your teeth.",
    icon: FaGem,
    color: "#A855F7",
    image: "/images/services/jew.jpeg",
  },
  {
    title: "Dental Implants",
    description:
      "If you’re tired of having a missing, decayed or problematic tooth, you can replace it with our reliable implants that look and feel just like natural teeth and are not prone to any damage, helping you have good looking healthy teeth.",
    icon: FaTeethOpen,
    color: "#6366F1",
    image: "/images/services/implemants.jpg",
  },
  {
    title: "Dentures",
    description:
      "We provide you with perfect and easily removable replacements to your missing teeth, availing both complete and partial denture services. Our dentures not only help you have healthy and impressive teeth but are also easily affordable.",
    icon: BrushCleaning,
    color: "#D97706",
    image: "/images/services/dentures.jpeg",
  },
  {
    title: "Oral Surgery",
    description:
      "You can rely on our experienced specialists performing dental surgery for tooth extraction, prosthodontics, using crowns, veneers or bridges in case you have wisdom tooth or are suffering from infected or damages teeth.",
    icon: FaSyringe,
    color: "#F87171",
    image: "/images/services/oral.jpg",
  },
  {
    title: "Orthodontics",
    description:
      "Patients suffering from malpositioned teeth or jaws can avail our orthodontics services to correctly position them in order to facilitate chewing, functioning and alignment of teeth to help you have healthy and alluring teeth.",
    icon: FaTeeth,
    color: "#10B981",
    image: "/images/services/otho.jpeg",
  },
  {
    title: "Preventative Dentistry",
    description:
      "To provide your teeth perfect care, we avail our preventative dentistry services so as to keep your teeth healthy and hygienic through routine checkups, dental cleanups avoiding cavities, infections and enamel loss..",
    icon: FaShieldAlt,
    color: "#0EA5E9",
    image: "/images/services/prev.jpg",
  },
  {
    title: "RCT (Root Canal Therapy)",
    description:
      "To eliminate the infections and give proper protection to teeth, we specialize in providing you with effective root canal therapy to treat any cavity or inflammation in the tooth’s root.",
    icon: FaXRay,
    color: "#F43F5E",
    image: "/images/services/rct.jpeg",
  },
  {
    title: "Teeth Whitening",
    description:
      "Our teeth whitening services help you prevent yellowing of teeth, flaunt a perfect smile and make it look good and healthy.",
    icon: FaSun,
    color: "#FBBF24",
    image: "/images/services/white.jpeg",
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Gentle, child‑friendly dental care that makes visits enjoyable. Our specialized team ensures a positive experience for your little ones.",
    icon: FaChild,
    color: "#3B82F6",
    image: "/images/services/pedia.jpeg",
  },
  {
    title: "Emergency Dental Care",
    description:
      "24/7 emergency dental services when you need them most. Quick, effective treatment for dental trauma and severe pain.",
    icon: FaAmbulance,
    color: "#EF4444",
    image: "/images/services/mer.jpg",
  },
];



const ServicesList = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Comprehensive Services
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Discover our wide range of dental services designed to keep your smile healthy, beautiful, and confident
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  style={{ backgroundColor: `${service.color}20` }}
                />
              </div>
              <div className="p-8">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon 
                    size={32}
                    style={{ color: service.color }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
