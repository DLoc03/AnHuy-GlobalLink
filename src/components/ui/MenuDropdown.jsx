import React from "react";

function MenuDropdown({ className, menus, open, onClose, align }) {
  return (
    <div
      className={` ${open ? "opacity-100" : "opacity-0"} absolute top-full divide-y divide-white p-2 shadow transition-opacity duration-300 ${className} ${align === "left" ? "left-0" : "right-0"}`}
    >
      {menus.map((menu) => (
        <button key={menu.id} className="px-3 py-2">
          {menu.label}
        </button>
      ))}
    </div>
  );
}

export default MenuDropdown;
