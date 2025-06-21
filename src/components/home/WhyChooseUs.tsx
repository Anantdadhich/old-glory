import { Shield, Clock, Award, Users } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Expert Dentists",
    description:
      "Our team consists of highly qualified and experienced dental professionals dedicated to providing exceptional care.",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Modern Technology",
    description:
      "We use the latest dental technology and techniques to ensure efficient and comfortable treatments.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Affordable Care",
    description:
      "We offer transparent pricing and flexible payment options to make dental care accessible to everyone.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Family-Friendly",
    description:
      "Our clinic welcomes patients of all ages, providing specialized care for every family member.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Old Glory Dental Clinic is dedicated to providing the highest
            quality dental care in a comfortable and welcoming environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-5">
                <div className="text-blue-600">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
