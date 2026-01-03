import React from "react";
import { ImSpinner2 } from "react-icons/im";

function Button({
  label,
  onClick,
  className = "",
  children,
  loading = false,
  disabled = false,
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      className={`flex items-center gap-2 rounded-full whitespace-nowrap transition-opacity ${isDisabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"} ${className} `}
    >
      {/* Spinner */}
      {loading && (
        <ImSpinner2 className="animate-spin text-current" size={16} />
      )}

      {/* Icon slot */}
      {!loading && children}

      <span className="leading-none">{loading ? "Đang xử lý..." : label}</span>
    </button>
  );
}

export default Button;
