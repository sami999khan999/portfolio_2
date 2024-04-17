import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import { Phone } from "lucide-react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-20 max-width border-b border-peach">
      <Logo />

      <Nav className="max-tablet:hidden" />
      <MobileNav />
    </header>
  );
};

export default Header;
