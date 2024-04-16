import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import { Phone } from "lucide-react";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-20 max-width border-b border-peach">
      <Link href={"/"}>
        <h5 className="text-purple text-xl font-semibold">Sami Khan.</h5>
      </Link>

      <nav className="flex items-center gap-12">
        <ul className="flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li>
              <NavLinks href={link.url} lable={link.label} className="" />
            </li>
          ))}
        </ul>
        <Link href={"/contact"} className="btn btn-primary">
          <Phone size={24} />
          Contact me
        </Link>
      </nav>
      <MobileNav />
    </header>
  );
};

export default Header;
