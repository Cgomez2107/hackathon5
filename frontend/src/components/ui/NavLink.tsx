import React from "react";

interface NavLinkProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href = "#",
  children,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`text-sm font-semibold hover:text-primary transition-colors ${className}`}
    >
      {children}
    </a>
  );
};

export default NavLink;
