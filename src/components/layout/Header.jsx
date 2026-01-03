import React, { useEffect, useRef, useState } from "react";
import Logo from "../common/Logo";
import Button from "../common/Button";
import IconButton from "../common/IconButton";
import { Menu, MenuIcon } from "lucide-react";
import MenuDropdown from "../ui/MenuDropdown";
import { menuHeader } from "@/constants/menus";
import HoverUnderlineItem from "../common/HoverUnderlineItem";
import { headers } from "@/constants/header";

function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenMenu = () => {
    setIsClick((prev) => !prev);
    setOpenMenu((prev) => !prev);
  };
  return (
    <header className={`fixed top-0 z-50 w-full shadow-xl`}>
      <div
        className={`absolute z-10 h-full w-full bg-white transition-all duration-300`}
      />
      <div className="relative z-50 flex h-full w-full justify-between px-4 sm:px-6 lg:px-12">
        <div className="sm:flex-1">
          <Logo size={80} />
        </div>
        <div className="hidden flex-8 items-center justify-center gap-4 sm:flex xl:gap-8">
          {headers.map((menu) => (
            <HoverUnderlineItem
              key={menu.id}
              label={menu.label}
              className={"w-fit py-3"}
              borderColor={"secondary"}
              textStyle={"text-md text-secondary font-medium"}
            />
          ))}
        </div>
        <div className="hidden flex-1 items-center justify-end sm:flex">
          <Button
            label={"Liên hệ"}
            className={`bg-primary rounded-full px-6 py-3 text-white`}
          />
        </div>
        <div ref={menuRef} className="relative flex items-center sm:hidden">
          <IconButton
            className={"bg-primary transform p-2 text-white duration-200"}
            onClick={handleOpenMenu}
          >
            <Menu
              className={`${isClick && "rotate-180"} transform duration-200`}
            />
          </IconButton>
          <MenuDropdown
            containerRef={menuRef}
            menus={menuHeader}
            open={openMenu}
            onClose={() => setOpenMenu(false)}
            className={
              "text-primary divide-y divide-amber-400 bg-white font-bold shadow-lg"
            }
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
