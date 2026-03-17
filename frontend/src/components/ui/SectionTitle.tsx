import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  eyebrow?: string; // small label above title (e.g. "The Territory")
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = "center",
  eyebrow,
}) => {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-16 ${alignClass}`}>
      {eyebrow && (
        <span className="text-primary font-bold tracking-widest uppercase text-sm">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4">
        {title}
      </h2>
      {align === "center" && (
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
      )}
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-400 mt-4">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
