

import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import CallToAction from "@/components/home/CallToAction";
import { FAQ } from "@/components/home/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <TestimonialsPreview />
      <FAQ></FAQ>
      <CallToAction />
   </>
  );
};


