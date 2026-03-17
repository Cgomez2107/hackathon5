import React from "react";

interface FABProps {
  label?: string;
  icon?: string;
  onClick?: () => void;
  color?: string; // tailwind bg class
}

export const FloatingActionButton: React.FC<FABProps> = ({
  label = "Ask Cumanday",
  icon = "chat",
  onClick,
  color = "bg-[#25D366]",
}) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-24 right-6 ${color} text-white flex items-center gap-2 px-4 py-3 rounded-full shadow-lg z-50 hover:scale-105 active:scale-95 transition-transform`}
    >
      <span className="material-symbols-outlined">{icon}</span>
      {label && <span className="text-sm font-bold">{label}</span>}
    </button>
  );
};

export default FloatingActionButton;
