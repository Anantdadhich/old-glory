import { Heart, Award, Users, Shield } from "lucide-react";

const values = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Patient-Centered Care",
    description: "We prioritize your comfort and well-being, ensuring a personalized experience for every patient.",
    color: "#E3F2FD",
    textColor: "#0077B6",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Excellence",
    description: "We maintain the highest standards of dental care through continuous learning and innovation.",
    color: "#E8F5E9",
    textColor: "#2E8B57",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community",
    description: "We build lasting relationships with our patients and actively contribute to our community's health.",
    color: "#FFF3E0",
    textColor: "#E65100",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Integrity",
    description: "We practice honest and transparent communication, always putting our patients' needs first.",
    color: "#F3E5F5",
    textColor: "#7B1FA2",
  },
];

const MissionValues = () => {
  return (
    <section className="py-20" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'Poppins', fontWeight: 600, color: '#1F2937' }}>
            Our Mission & Values
          </h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto" style={{ color: '#4B5563' }}>
            We are committed to providing exceptional dental care while upholding our core values and mission to improve oral health in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: 'white' }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                style={{ backgroundColor: value.color }}
              >
                <div style={{ color: value.textColor }}>{value.icon}</div>
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  color: '#1F2937'
                }}
              >
                {value.title}
              </h3>
              <p style={{ color: '#4B5563' }}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionValues; 