import React from "react";

function Logo({ size = 48 }) {
  return (
    <img
      src="/logo.jpg"
      alt="An Huy Global Link"
      className={`rounded-full`}
      style={{ width: `${size}px` }}
    />
  );
}

export default Logo;
