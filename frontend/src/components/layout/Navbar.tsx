import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import Logo from "../ui/Logo";

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "Create Farm", href: "/createFarm" },
  { label: "Chat", href: "/chat" },
  { label: "Farm View", href: "/farmView" },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer flex-shrink-0">
          <Logo />
        </Link>

        {/* Desktop links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-xs lg:text-sm font-semibold hover:text-primary transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions - responsive buttons */}
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
          <Button variant="ghost" size="sm" icon="language" className="hidden sm:flex">
            EN
          </Button>
          <Link to="/createFarm" className="hidden md:block">
            <Button variant="accent" size="md">
              Register your farm
            </Button>
          </Link>
          <Link to="/home" className="hidden md:block">
            <Button variant="outline" size="md">
              Enter
            </Button>
          </Link>
          {/* Mobile menu toggle placeholder */}
          <Button variant="outline" size="sm" icon="menu" className="md:hidden">
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
