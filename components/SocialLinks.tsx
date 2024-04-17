import { socialLinks } from "@/constants";
import React from "react";

const SocialLinks = ({
  icon,
  className,
  linkStyle,
}: {
  icon: boolean;
  className?: string;
  linkStyle?: string;
}) => {
  return (
    <div className={`flex items-center justify-center gap-5 ${className}`}>
      {socialLinks.map((link, index) => (
        <a
          href={link.url}
          className={`text-gray-700 hover:text-purple transition-colors ${linkStyle}`}
        >
          {icon ? (
            <link.icon strokeWidth={0} fill="currentColor" />
          ) : (
            link.label
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
