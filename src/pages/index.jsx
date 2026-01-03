import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/ui/about-section/AboutSection";
import CommitSection from "@/components/ui/commit-section/CommitSection";
import ContactSection from "@/components/ui/ContactSection";
import FounderSection from "@/components/ui/founder-section/FounderSection";
import HeroSection from "@/components/ui/HeroSection";
import PartnerSection from "@/components/ui/PartnerSection";
import ServiceSection from "@/components/ui/service-section/ServiceSection";
import WhyChooseSection from "@/components/ui/why-choose-section/WhyChooseSection";
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
    <div className="bg-white">
      <Header onScroll={handleScrollSection} />
      <HeroSection onSCroll={handleScrollSection} />

      <div className="mx-auto h-full max-w-7xl space-y-6 px-2 py-6 xl:px-0">
        <AboutSection />
        <ServiceSection />
        <FounderSection />
        <PartnerSection />
        <CommitSection />
        <WhyChooseSection />
        <ContactSection />
      </div>
      <Footer onScroll={handleScrollSection} />
    </div>
  );
}

export default Portfolio;
