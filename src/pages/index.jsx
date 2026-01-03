import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/ui/about-section/AboutSection";
import HeroSection from "@/components/ui/HeroSection";
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
      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
