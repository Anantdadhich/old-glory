
import AmazingTransformations from "@/components/braces/AmazingTransformations";
import BracesFAQ from "@/components/braces/BracesFAQ";
import BracesHero from "@/components/braces/BracesHero";

import BracesTreatmentOptions from "@/components/braces/BracesTreatmentOptions";
import WhyChooseBraces from "@/components/braces/WhyChooseBraces";



export default function Braces() {
  return (
    <main>
      <BracesHero/>
      <WhyChooseBraces />
      <BracesTreatmentOptions />
    
      <AmazingTransformations />
    
      <BracesFAQ />
    </main>
  );
} 