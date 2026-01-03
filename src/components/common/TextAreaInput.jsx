import React from "react";

function TextAreaInput({
  label,
  placeholder,
  value,
  onChange,
  className = "",
  disabled = false,
  required = false,
  error = "",
  rows = 4,
}) {
  return (
    <div className="space-y-1">
      {label && (
        <p className="text-sm font-medium">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </p>
      )}

      <textarea
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full resize-none rounded-2xl border px-6 py-3 text-sm transition focus:outline-none ${
          error
            ? "border-red-500 focus:ring-2 focus:ring-red-300"
            : "focus:border-primary focus:ring-primary/30 border-gray-300 focus:ring-2"
        } ${disabled ? "cursor-not-allowed bg-gray-100" : ""} ${className} `}
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default TextAreaInput;
