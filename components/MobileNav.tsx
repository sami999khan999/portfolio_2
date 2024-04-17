"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Nav from "./Nav";
import { socialLinks } from "@/constants";
import SocialLinks from "./SocialLinks";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMeny = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tablet:hidden">
      <button
        onClick={toggleMeny}
        className="text-gray-700 hover:text-purple transition-colors"
      >
        <Menu />
      </button>

      <div
        className={`w-full h-full flex flex-col bg-peach-600 fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex w-full items-center justify-between h-20 max-width border-b border-peach">
          <Link href={"/"}>
            <h5 className="text-purple text-xl font-semibold">Sami Khan.</h5>
          </Link>
          <button
            onClick={toggleMeny}
            className="text-gray-700 hover:text-purple transition-colors"
          >
            <X />
          </button>
        </div>

        <Nav
          className="flex flex-col items-center justify-center flex-1"
          ulClass="flex-col gap-5"
          navLinkClass="text-3xl"
        />

        <SocialLinks
          icon={false}
          className={"w-full h-20 border-t border-peach max-width"}
        />
      </div>
    </div>
  );
};

export default MobileNav;
