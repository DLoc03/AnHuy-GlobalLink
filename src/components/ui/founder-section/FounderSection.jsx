import HeadingPill from "@/components/common/HeadingPill";
import { founders } from "@/constants/founder";
import React from "react";
import FounderCard from "./FounderCard";
import MotionWrapper from "@/common/animations/MotionWrapper";
import { fadeInUp } from "@/common/animations/motionVariants";

function FounderSection() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6">
      <MotionWrapper variant={fadeInUp} className="col-span-2">
        <HeadingPill label={"Đội ngũ sáng lập"} />
      </MotionWrapper>
      {founders.map((founder, index) => (
        <MotionWrapper
          variant={fadeInUp}
          delay={0.2 + (index + 1) * 0.2}
          key={founder.id}
          className="col-span-2 lg:col-span-1"
        >
          <FounderCard founder={founder} />
        </MotionWrapper>
      ))}
    </div>
  );
}

export default FounderSection;
