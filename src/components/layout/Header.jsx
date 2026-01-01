import React, { useState } from "react";
import Logo from "../common/Logo";
import Button from "../common/Button";
import IconButton from "../common/IconButton";
import { MenuIcon } from "lucide-react";
import MenuDropdown from "../ui/MenuDropdown";
import { menuHeader } from "@/constants/menus";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      className={`shadow-main fixed top-0 z-50 flex w-full justify-between bg-black/50 px-4 py-3 text-white backdrop-blur-sm lg:px-8 xl:px-16`}
    >
      <div className="z-20 w-full">
        <Logo />
      </div>
      <div className="flex items-center gap-2 sm:gap-6">
        <div className="relative">
          <IconButton
            className={
              "transform rounded-full p-2 duration-200 active:rotate-180 active:bg-white/20 sm:hidden"
            }
            onClick={() => setOpenMenu(!openMenu)}
          >
            <MenuIcon />
          </IconButton>
          <MenuDropdown
            open={openMenu}
            onClose={() => setOpenMenu(false)}
            className={"text-md mt-3 w-fit rounded-md bg-black/80 font-medium"}
            align={"right"}
            menus={menuHeader}
          />
        </div>
        <Button
          label={"Dịch vụ"}
          className={"hidden hover:underline sm:inline-block"}
        />
        <Button
          label="Liên hệ"
          className={
            "hidden min-w-fit rounded-full border-2 border-white px-6 py-2 hover:bg-white/20 sm:inline-block"
          }
        />
      </div>
    </div>
  );
}

export default Header;
