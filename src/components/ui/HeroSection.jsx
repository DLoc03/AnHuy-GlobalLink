import React from "react";
import background from "@assets/background/hero_section.jpg";

function HeroSection() {
  return (
    <div
      className="bg-primary relative h-screen w-full bg-cover bg-fixed"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute z-10 h-full w-full bg-black/30" />
    </div>
  );
}

export default HeroSection;
