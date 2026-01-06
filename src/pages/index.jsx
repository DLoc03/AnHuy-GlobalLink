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
import React, { useState } from "react";

function Portfolio() {
  const [selected, setSelected] = useState();
  const handleScrollSection = (sectionId) => {
    setSelected(sectionId);
    const el = document.getElementById(sectionId);
    const header = document.getElementById("header");

    if (!el) return;

    const headerHeight = header?.offsetHeight || 0;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - headerHeight - 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white">
      <Header onScroll={handleScrollSection} selected={selected} />
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
