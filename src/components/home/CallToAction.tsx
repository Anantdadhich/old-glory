import { Phone } from "lucide-react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-500 to-green-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-bold text-3xl md:text-4xl mb-6">
          Ready to Schedule Your Visit?
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-10 opacity-90">
          Contact us today to book your appointment with our expert dental team.
          We look forward to helping you achieve your best smile!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            href="/book"
            className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all shadow-lg"
          >
            Book an Appointment
          </Link>
          <a
            href="tel:+919216213329"
            className="flex items-center text-white font-medium hover:underline"
          >
            <Phone size={20} className="mr-2" />
            (+91) 92162 13329
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
