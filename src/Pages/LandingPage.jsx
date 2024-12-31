import FaqSection from "@/components/Landing/FaqSection";
import HeroSection from "../components/Landing/HeroSection";
import KeySolutionSection from "../components/Landing/KeySolutionSection";
import ServiceSection from "../components/Landing/ServiceSection";
import TeamSection from "../components/Landing/TeamSection";
import ToolsSection from "../components/Landing/ToolsSection";
import TestimonialSection from "@/components/Landing/TestimonialSection";
import JourneySection from "@/components/Landing/JourneySection";

function LandingPage() {
  return (
    <section className="overflow-x-hidden" >
      <HeroSection />
      <ToolsSection />
      <ServiceSection />
      <KeySolutionSection />
      <TeamSection />
      <FaqSection />
      <TestimonialSection />
      <JourneySection />
    </section>
  )
}

export default LandingPage;
