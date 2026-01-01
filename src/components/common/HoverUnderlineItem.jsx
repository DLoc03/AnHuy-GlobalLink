import React, { useState } from "react";

function HoverUnderlineItem({
  label,
  className,
  onClick,
  textStyle,
  borderColor,
}) {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      className={`cursor-pointer ${className}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
    >
      <p className={textStyle}>{label}</p>
      <div
        className={`${isHover ? "w-full" : "w-0"} h-1 bg-${borderColor} transition-all duration-200`}
      />
    </button>
  );
}

export default HoverUnderlineItem;
