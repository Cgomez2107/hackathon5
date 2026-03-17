import React from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "outline"
  | "ghost"
  | "white-outline"
  | "icon-round";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string; // material-symbols icon name
  iconPosition?: "left" | "right";
  children?: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  // Filled amber — main CTA (navbar "Register your farm")
  accent:
    "bg-accent hover:bg-primary text-white font-bold shadow-sm transition-all",
  // Filled green — solid action (hero "Explore experiences")
  primary:
    "bg-secondary text-white font-bold shadow-xl hover:scale-105 transition-transform",
  // Filled orange
  secondary:
    "bg-primary hover:bg-primary/90 text-white font-bold shadow-sm transition-all",
  // Bordered green / orange — "Enter"
  outline:
    "border-2 border-secondary text-secondary dark:border-primary dark:text-primary font-bold hover:bg-secondary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all",
  // Transparent with border for dark backgrounds — hero "Register your business"
  "white-outline":
    "border-2 border-white/80 text-white font-bold backdrop-blur-sm hover:bg-white hover:text-slate-900 transition-all",
  // Subtle icon/text — language switcher
  ghost:
    "text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",
  // Circular icon button — carousel arrows
  "icon-round":
    "rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 transition-colors",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  children,
  className = "",
  ...props
}) => {
  const isIconRound = variant === "icon-round";

  return (
    <button
      className={[
        isIconRound ? "size-12 rounded-full" : sizeClasses[size],
        variantClasses[variant],
        "inline-flex items-center justify-center gap-1.5",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="material-symbols-outlined text-[1.1em] leading-none">
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="material-symbols-outlined text-[1.1em] leading-none">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
