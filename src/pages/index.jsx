import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/ui/about-section/AboutSection";
import FounderSection from "@/components/ui/founder-section/FounderSection";
import HeroSection from "@/components/ui/HeroSection";
import ServiceSection from "@/components/ui/service-section/ServiceSection";
import React from "react";

function Portfolio() {
  const handleScrollSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <Header onScroll={handleScrollSection} />
      <HeroSection />

      <div className="h-full space-y-6 bg-white px-2 py-6 xl:px-0">
        <AboutSection />
        <ServiceSection />
        <FounderSection />
      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
