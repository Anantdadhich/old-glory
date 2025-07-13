import { ArrowRight } from "lucide-react";
import Link from "next/link";

const transformations = [
  {
    before: "/bef.png",
    after: "/afte.png",
    title: "Metal Braces - 18 months treatment",
    description: "Complete smile transformation with traditional metal braces",
  },
];

const AmazingTransformations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Amazing Transformations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the life-changing results our patients have achieved with our expert care
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {transformations.map((transformation, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Before */}
                <div className="text-center">
                  <div className="relative mb-4">
                    <img
                      src={transformation.before}
                      alt="Before Braces"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Before
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Before Braces
                  </h3>
                </div>

                {/* After */}
                <div className="text-center">
                  <div className="relative mb-4">
                    <img
                      src={transformation.after}
                      alt="After Braces"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      After
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    After Braces
                  </h3>
                </div>
              </div>

            
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="https://wa.me/917678245349"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition duration-200  items-center gap-2 mx-auto inline-flex"
          >
            Start Your Transformation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AmazingTransformations; 