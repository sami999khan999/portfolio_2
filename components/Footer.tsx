import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-peach max-width ">
      <div className="flex items-center justify-between">
        <Logo />
        <NavLinks className="max-mobile:hidden" />
        <SocialLinks
          className="max-mobile:hidden"
          icon={true}
          linkStyle="w-8 h-8 bg-purple text-peach rounded flex items-center justify-center hover:text-white duration-300"
        />
      </div>
    </footer>
  );
};

export default Footer;
