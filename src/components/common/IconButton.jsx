import React from "react";

function IconButton({ className, children, onClick }) {
  return (
    <button className={`${className} cursor-pointer`} onClick={onClick}>
      {children}
    </button>
  );
}

export default IconButton;
