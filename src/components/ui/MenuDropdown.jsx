import React, { useEffect, useRef } from "react";

function MenuDropdown({
  className,
  menus,
  open,
  onClose,
  align,
  containerRef,
  onClick,
}) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef?.current &&
        !containerRef.current.contains(event.target)
      ) {
        onClose?.();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [containerRef, onClose]);

  return (
    <div
      className={`absolute top-full p-2 shadow transition-opacity duration-500 ${className} ${
        align === "left" ? "left-0" : "right-0"
      } ${open ? "opacity-100" : "opacity-0"}`}
    >
      {menus.map((menu) => (
        <button
          key={menu.id}
          className="w-full px-3 py-2 text-left"
          onClick={() => onClick?.(menu.id)}
        >
          {menu.label}
        </button>
      ))}
    </div>
  );
}

export default MenuDropdown;
