import React from "react";

function HeadingPill({ label }) {
  return (
    <div className="border-primary text-primary w-fit rounded-full border-2 px-6 py-1 font-medium">
      {label}
    </div>
  );
}

export default HeadingPill;
