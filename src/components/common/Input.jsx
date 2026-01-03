import React from "react";

function Input({
  label,
  placeholder,
  onChange,
  value,
  className,
  disabled = false,
}) {
  return (
    <>
      {label && <p className="text-sm">{label}</p>}
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`${className} px-6 py-2 focus:outline-none`}
      />
    </>
  );
}

export default Input;
