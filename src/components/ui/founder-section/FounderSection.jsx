import HeadingPill from "@/components/common/HeadingPill";
import { founders } from "@/constants/founder";
import React from "react";
import FounderCard from "./FounderCard";

function FounderSection() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6">
      <div className="col-span-2">
        <HeadingPill label={"Đội ngũ sáng lập"} />
      </div>
      {founders.map((founder) => (
        <div key={founder.id} className="col-span-2 lg:col-span-1">
          <FounderCard founder={founder} />
        </div>
      ))}
    </div>
  );
}

export default FounderSection;
