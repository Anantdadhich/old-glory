import { Star, CreditCard, Users, Award } from "lucide-react";

const features = [
  {
    icon: <Star className="h-8 w-8 text-yellow-500 fill-current" />,
    title: "4.9⭐ Google Rating",
    description: "Trusted by thousands of patients with excellent reviews",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-green-500" />,
    title: "EMI Options Available",
    description: "Flexible payment plans starting from ₹999/month",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "1500+ Patients Treated",
    description: "Successfully transformed smiles across Jaipur",
  },
  {
    icon: <Award className="h-8 w-8 text-purple-500" />,
    title: "Experienced Orthodontists",
    description: "10+ years of expertise in braces and alignment",
  },
];

const WhyChooseBraces = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect solution to match your smile goals — guided by our experienced team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                <div className="text-gray-600">{feature.icon}</div>
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

export default WhyChooseBraces; 