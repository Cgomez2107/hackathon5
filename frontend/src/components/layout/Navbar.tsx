import React from "react";
import { Button } from "../ui/Button";
import { NavLink } from "../ui/NavLink";

const navLinks = [
  { label: "Explore", href: "#" },
  { label: "For Operators", href: "#" },
  { label: "How it works", href: "#" },
  { label: "About the PCC", href: "#" },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="flex items-center text-secondary dark:text-primary">
            <span className="material-symbols-outlined text-3xl">eco</span>
            <span className="material-symbols-outlined text-2xl -ml-2">
              flutter_dash
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            CafIA
          </h1>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" icon="language">
            EN
          </Button>
          <Button variant="accent" size="md">
            Register your farm
          </Button>
          <Button variant="outline" size="md">
            Enter
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
