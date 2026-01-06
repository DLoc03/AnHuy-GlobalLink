import React, { useState } from "react";

function HoverUnderlineItem({
  label,
  className,
  onClick,
  textStyle,
  borderColor,
  selected,
  id,
}) {
  const [isHover, setIsHover] = useState(false);
  const isActive = selected === id;
  return (
    <button
      className={`cursor-pointer ${className}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
    >
      <p className={textStyle}>{label}</p>
      <div
        className={`${isHover || isActive ? "w-full" : "w-0"} h-1 bg-${borderColor} transition-all duration-200`}
      />
    </button>
  );
}

export default HoverUnderlineItem;
