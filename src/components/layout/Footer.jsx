import React from "react";
import footerBg from "@assets/background/footer.jpg";

function Footer() {
  return (
    <footer className="relative w-full">
      <div className="bg-secondary absolute z-10 h-full w-full opacity-90" />
      <div
        className="absolute h-full w-full bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
      <div className="grid w-full grid-cols-12 gap-x-6 gap-y-3 p-6"></div>
    </footer>
  );
}

export default Footer;
