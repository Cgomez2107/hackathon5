import React from "react";

type BadgeVariant = "primary" | "secondary" | "accent" | "rating";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  accent: "bg-accent text-white",
  // White pill for star ratings on cards
  rating:
    "bg-white/90 dark:bg-background-dark/90 text-secondary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1",
};

export const Badge: React.FC<BadgeProps> = ({
  variant = "primary",
  children,
  className = "",
}) => {
  if (variant === "rating") {
    return (
      <span className={`${variantClasses.rating} ${className}`}>
        <span className="material-symbols-outlined text-sm">star</span>
        {children}
      </span>
    );
  }

  return (
    <span
      className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
