"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({
  ulClass,
  className,
  navLinkClass,
}: {
  ulClass?: string;
  className?: string;
  navLinkClass?: string;
}) => {
  const pathName = usePathname();

  return (
    <div className={className}>
      <ul className={`flex items-center gap-8 ${ulClass}`}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              key={index}
              className={`py-3 text-gray-700 hover:text-purple transition-colors relative block after:block after:absolute after:left-0 after:h-0.5 after:bg-purple after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left ${className} ${navLinkClass} ${
                pathName === link.url
                  ? "after:scale-x-100 after:origin-right"
                  : "after:scale-x-0 after:origin-left"
              }`}
              href={link.url}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
