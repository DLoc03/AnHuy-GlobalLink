import { sectionIds } from "@/constants/sectionId";
import React from "react";

function FounderCard({ founder }) {
  return (
    <div
      id={sectionIds.founder}
      className="relative flex h-full flex-col rounded-3xl bg-white sm:flex-row"
    >
      {/* IMAGE */}
      <div className="relative w-full sm:w-2/5">
        <img
          src={founder.image}
          alt={founder.name}
          className="h-56 w-full rounded-3xl object-cover sm:h-64 lg:h-80 xl:h-68"
        />
        <div className="absolute bottom-4 z-10 flex w-full justify-center lg:bottom-6">
          <div className="rounded-full border-2 border-white bg-black/50 px-6 py-1 text-sm text-white">
            {founder.position}
          </div>
        </div>

        {/* overlay */}
        <div className="absolute inset-0 h-56 rounded-3xl bg-linear-to-t from-black/40 via-black/10 to-transparent sm:h-64 lg:h-80 xl:h-68" />
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-5">
        {/* Header */}
        <div>
          <span className="bg-primary/10 text-primary inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide">
            {founder.position}
          </span>

          <h3 className="mt-2 text-xl font-bold text-gray-900">
            {founder.name}
          </h3>
        </div>

        {/* Divider */}
        <div className="from-primary/40 my-3 h-px w-full bg-linear-to-r to-transparent" />

        {/* Content */}
        <p className="text-sm leading-relaxed text-gray-600">
          {founder.content}
        </p>
      </div>
    </div>
  );
}

export default FounderCard;
