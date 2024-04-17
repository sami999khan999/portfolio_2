import { navLinks } from "@/constants";
import React from "react";
import NavLinks from "./NavLinks";
import { Phone } from "lucide-react";
import Link from "next/link";

const Nav = ({
  className,
  ulClass,
  navLinkClass,
}: {
  className?: string;
  ulClass?: string;
  navLinkClass?: string;
}) => {
  return (
    <nav className={`flex items-center gap-12  ${className}`}>
      <NavLinks ulClass={ulClass} navLinkClass={navLinkClass} />

      <Link href={"/contact"} className="btn btn-primary">
        <Phone size={24} />
        Contact me
      </Link>
    </nav>
  );
};

export default Nav;
