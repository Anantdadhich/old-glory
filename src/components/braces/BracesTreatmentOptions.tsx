import { Shield, Eye, Gem, Lock } from "lucide-react";
import Link from "next/link";

const treatmentOptions = [
  {
    title: "Metal Braces",
    subtitle: "Traditional and most effective option",
    description: "The most durable and fastest treatment option for complex cases",
    features: ["Most durable", "Fastest treatment", "Cost-effective", "Best for complex cases"],
    icon: <Shield className="h-8 w-8" />,
    color: "#3B82F6",
    popular: false,
  },
  {
    title: "Invisible Braces",
    subtitle: "Clear aligners for discrete treatment",
    description: "Nearly invisible clear aligners perfect for professionals",
    features: ["Nearly invisible", "Removable", "Comfortable", "Perfect for professionals"],
    icon: <Eye className="h-8 w-8" />,
    color: "#10B981",
    popular: true,
  },
  {
    title: "Ceramic Braces",
    subtitle: "Tooth-colored brackets for aesthetics",
    description: "Tooth-colored brackets that are less visible than traditional braces",
    features: ["Tooth-colored", "Less visible", "Effective", "Great for adults"],
    icon: <Gem className="h-8 w-8" />,
    color: "#8B5CF6",
    popular: false,
  },
  {
    title: "Retainers",
    subtitle: "Maintain your perfect smile post-treatment",
    description: "Custom-fit retainers to maintain alignment and prevent relapse",
    features: ["Maintains alignment", "Custom-fit", "Long-lasting", "Prevents relapse"],
    icon: <Lock className="h-8 w-8" />,
    color: "#F59E0B",
    popular: false,
  },
];

const BracesTreatmentOptions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Braces Treatment Options
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect solution to match your smile goals — guided by our experienced team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatmentOptions.map((option, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {option.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="flex items-start gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${option.color}15` }}
                >
                  <div style={{ color: option.color }}>{option.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 font-medium mb-2">
                    {option.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {option.description}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="https://wa.me/917678245349?text=Hi!%20I'd%20like%20to%20schedule%20a%20dental%20appointment%20🦷📅"
                className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
              >
                Get Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BracesTreatmentOptions; 