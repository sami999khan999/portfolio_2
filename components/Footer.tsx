import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { contactDetails } from "@/constants";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-peach max-width ">
      <div className="flex items-center justify-between">
        <Logo />
        <NavLinks ulClass="max-mobile:gap-3 max-mobile:text-sm" />
        <SocialLinks
          className="max-mobile:hidden"
          icon={true}
          linkStyle="w-8 h-8 bg-purple text-peach rounded flex items-center justify-center hover:text-white duration-300"
        />
      </div>

      <div className="w-max border border-peach p-5 mx-auto flex gap-5 tablet:gap-10 flex-col tablet:flex-row items-center rounded-lg mt-5">
        {contactDetails.map((details, index) => (
          <div key={index} className="flex gap-3 items-center text-purple">
            <details.icon size={20} />
            <p className="text-gray-600">{details.text}</p>
          </div>
        ))}
      </div>

      <p className="text-center mt-8 text-gray-600 text-sm">
        Copyright ©️ {new Date().getFullYear()} Sami Khan. All rights resurved.
      </p>
    </footer>
  );
};

export default Footer;
