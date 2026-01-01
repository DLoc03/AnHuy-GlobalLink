import React, { useEffect, useRef, useState } from "react";
import { slides } from "@/constants/slideBanner";
import { ArrowLeft, ArrowRight } from "lucide-react";
import IconButton from "../common/IconButton";

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const timeRef = useRef();
  const total = slides?.length;

  const nextSlide = () => {
    setDirection("next");
    setActiveIndex((prev) => (prev + 1) % total);
  };
  const prevSlide = () => {
    setDirection("prev");
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    timeRef.current = setInterval(nextSlide, 3000);
    return () => clearInterval(timeRef.current);
  }, [activeIndex]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${isActive ? "z-20 opacity-100" : "z-10 opacity-0"} `}
          >
            {/* Background image */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Center holder */}
              <div className="absolute top-1/2 left-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2">
                {/* Animated layer */}
                <div
                  className={`h-full w-full bg-cover bg-center transition-transform duration-[4000ms] ease-linear ${
                    isActive
                      ? "translate-x-0 scale-[1.3]"
                      : direction === "next"
                        ? "translate-x-10 scale-[1.15]"
                        : "-translate-x-10 scale-[1.15]"
                  }`}
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

            {/* Content */}
            <div
              className={`relative z-30 flex h-full max-w-7xl items-center px-8 transition-all duration-700 ${
                isActive
                  ? "translate-x-0 opacity-100"
                  : direction === "next"
                    ? "-translate-x-20 opacity-0"
                    : "translate-x-20 opacity-0"
              } `}
            >
              <div className="max-w-xl text-white">
                <h2 className="text-4xl leading-tight font-bold">
                  {item.title}
                </h2>
                <p className="mt-4 text-lg text-white/80">{item.subTitle}</p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 gap-3">
        <IconButton
          onClick={prevSlide}
          className="z-40 flex rounded-full bg-black/40 p-3 text-white hover:bg-black/60"
        >
          <ArrowLeft size={24} />
        </IconButton>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === activeIndex ? "w-6 bg-white" : "bg-white/50"
            }`}
          />
        ))}
        <IconButton
          onClick={nextSlide}
          className="z-40 rounded-full bg-black/40 p-3 text-white hover:bg-black/60"
        >
          <ArrowRight size={24} />
        </IconButton>
      </div>
    </div>
  );
}

export default HeroSection;
