import React, { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

function SelectInput({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Chọn dịch vụ",
  required = false,
  error = "",
  disabled = false,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selectedLabel = options.find((opt) => opt.name === value)?.name || "";

  return (
    <div className="space-y-1" ref={ref}>
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((p) => !p)}
        className={`focus:ring-primary/40 relative mt-1 flex w-full items-center justify-between rounded-full border bg-white px-6 py-2 text-sm focus:ring-2 focus:outline-none ${error ? "border-red-400" : "border-gray-300"} ${disabled ? "cursor-not-allowed bg-gray-100" : "cursor-pointer"} `}
      >
        <span
          className={`truncate ${
            selectedLabel ? "text-gray-900" : "text-gray-400"
          }`}
        >
          {selectedLabel || placeholder}
        </span>

        <IoChevronDown
          className={`ml-3 shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          size={18}
        />
      </button>

      <div
        className={`absolute z-30 mt-2 w-fit overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 transition-all duration-200 ${open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"} `}
      >
        <ul className="max-h-64 overflow-y-auto py-2 text-sm">
          {options.map((opt) => {
            const active = opt.name === value;
            return (
              <li
                key={opt.id}
                onClick={() => {
                  onChange(opt.name);
                  setOpen(false);
                }}
                className={`cursor-pointer px-5 py-2 transition ${active ? "bg-primary/10 text-primary font-medium" : ""} hover:bg-primary/5`}
              >
                {opt.name}
              </li>
            );
          })}
        </ul>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default SelectInput;
