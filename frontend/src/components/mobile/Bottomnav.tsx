import React, { useState } from "react";

interface NavItem {
  id: string;
  label: string;
  icon: string;
  href?: string;
}

interface BottomNavProps {
  items?: NavItem[];
  defaultActive?: string;
  onChange?: (id: string) => void;
}

const defaultItems: NavItem[] = [
  { id: "explore", label: "Explore", icon: "explore", href: "#" },
  { id: "saved", label: "Saved", icon: "favorite", href: "#" },
  { id: "bookings", label: "Bookings", icon: "confirmation_number", href: "#" },
  { id: "profile", label: "Profile", icon: "person", href: "#" },
];

export const BottomNav: React.FC<BottomNavProps> = ({
  items = defaultItems,
  defaultActive = "explore",
  onChange,
}) => {
  const [active, setActive] = useState(defaultActive);

  const handleClick = (id: string) => {
    setActive(id);
    onChange?.(id);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto border-t border-primary/5 bg-white/90 backdrop-blur-md px-4 pb-6 pt-2 z-50">
      <div className="flex gap-2 justify-around">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={item.href ?? "#"}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.id);
              }}
              className={`flex flex-1 flex-col items-center justify-end gap-1 transition-colors ${
                isActive ? "text-primary" : "text-primary/40"
              }`}
            >
              <div className="flex h-8 items-center justify-center">
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0",
                  }}
                >
                  {item.icon}
                </span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-tighter">
                {item.label}
              </p>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
