'use client';


import Footer from "@/component/Footer";
import AiEngineeredSection from "@/component/sections/AiEngineeredSection";
import ConsultationSection from "@/component/sections/ConsultationSection";
import EngineeringServices from "@/component/sections/EngineeringServices";
import FaqSection from "@/component/sections/FaqSection";
import HeroSection from "@/component/sections/HeroSection";
import OverviewServices from "@/component/sections/OverviewServices";
import PlanningCallSection from "@/component/sections/PlanningCallSection";
import TestimonialsSection from "@/component/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TestimonialsSection />
      <AiEngineeredSection />
      <EngineeringServices />
      <PlanningCallSection />
      <OverviewServices />
      <FaqSection />
      <ConsultationSection />
      <Footer />
    </>
  );
}
