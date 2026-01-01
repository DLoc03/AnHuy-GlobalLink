import React from "react";

function Button({ label, onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-2 rounded-full whitespace-nowrap ${className}`}
    >
      {children}
      <span className="leading-none">{label}</span>
    </button>
  );
}

export default Button;
