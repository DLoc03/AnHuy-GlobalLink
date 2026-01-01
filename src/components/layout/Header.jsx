import React, { useEffect, useState } from "react";
import Logo from "../common/Logo";
import Button from "../common/Button";
import IconButton from "../common/IconButton";
import { Menu, MenuIcon } from "lucide-react";
import MenuDropdown from "../ui/MenuDropdown";
import { menuHeader } from "@/constants/menus";
import HoverUnderlineItem from "../common/HoverUnderlineItem";

function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenMenu = () => {
    setIsClick(!isClick);
    setOpenMenu(!openMenu);
  };

  return (
    <header className={`fixed top-0 z-50 w-full shadow-xl`}>
      <div
        className={`absolute z-10 h-full w-full transition-all duration-300 ${isScroll ? "bg-primary opacity-90" : "bg-black opacity-70"}`}
      />
      <div className="relative z-50 flex h-full w-full justify-between px-4 py-3 sm:px-6 lg:px-12">
        <Logo size={60} />
        <div className="hidden items-center gap-4 sm:flex">
          <HoverUnderlineItem
            label={"Dịch vụ"}
            className={"w-20 py-3"}
            borderColor={"white"}
            textStyle={"text-md text-white"}
          />
          <Button
            label={"Liên hệ"}
            className={
              "rounded-full border-2 border-white px-6 py-3 text-white hover:bg-white/20"
            }
          />
        </div>
        <div className="relative flex items-center sm:hidden">
          <IconButton
            className={"text-primary transform bg-amber-300 p-2 duration-200"}
            onClick={handleOpenMenu}
          >
            <Menu
              className={`${isClick && "rotate-180"} transform duration-200`}
            />
          </IconButton>
          <MenuDropdown
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
