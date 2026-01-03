import React from "react";
import footerBg from "@assets/background/footer.jpg";
import { appContent } from "@/constants/global";
import { abouts, contacts, services } from "@/constants/footer";
import Button from "../common/Button";
import Input from "../common/Input";
import { Send } from "lucide-react";

function Footer() {
  return (
    <footer className="relative w-full">
      <div className="to-secondary absolute z-10 h-full w-full bg-linear-to-r from-black opacity-90" />
      <div
        className="absolute h-full w-full bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
      <div className="relative z-20 grid w-full grid-cols-2 gap-y-6 px-4 py-12 sm:px-12">
        <div className="col-span-2 space-y-3 lg:col-span-1">
          <h1 className="w-fit border-b border-white py-2 text-4xl font-bold text-white text-shadow-2xs">
            {appContent.company_name}
          </h1>
          <div className="space-y-2">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.url}
                  href={contact.url}
                  target="blank"
                  className="flex gap-x-3 text-white"
                >
                  <Icon size={20} />
                  <span className="text-sm">{contact.name}</span>
                </a>
              );
            })}
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-2 gap-x-12 gap-y-3 lg:col-span-1">
          <div className="col-span-3 space-y-2 sm:col-span-1">
            <h1 className="w-full border-b border-white py-2 text-lg font-medium text-white text-shadow-2xs">
              {abouts.heading}
            </h1>
            <div className="space-y-1">
              {abouts.content.map((about) => (
                <Button
                  key={about.id}
                  label={about.name}
                  className="py-1 text-sm text-wrap text-white hover:underline active:underline"
                />
              ))}
            </div>
          </div>
          <div className="col-span-3 space-y-2 sm:col-span-1">
            <h1 className="w-full border-b border-white py-2 text-lg font-medium text-white text-shadow-2xs">
              {services.heading}
            </h1>
            <div className="space-y-1">
              {services.content.map((about) => (
                <Button
                  key={about.id}
                  label={about.name}
                  className="py-1 text-sm text-wrap text-white hover:underline active:underline"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary relative z-20 flex w-full flex-col justify-center gap-1 py-3 text-xs text-white sm:flex-row">
        <p className="shink-0 text-center">
          Copyright © 2026, all rights reserved.{" "}
        </p>
        <a
          href={appContent.suri_url}
          target="blank"
          className="shink-0 text-center hover:text-amber-400 hover:underline active:text-amber-400"
        >
          Powered by Suri Technologies
        </a>
      </div>
    </footer>
  );
}

export default Footer;
