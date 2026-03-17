import React from "react";

type IconColor = "primary" | "secondary" | "accent";

interface FeatureCardProps {
  icon: string; // material-symbols icon name
  iconColor?: IconColor;
  title: string;
  description: string;
  linkLabel?: string;
  onLinkClick?: () => void;
}

const iconColorClasses: Record<IconColor, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
};

const linkColorClasses: Record<IconColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary dark:text-primary",
  accent: "text-accent",
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconColor = "primary",
  title,
  description,
  linkLabel,
  onLinkClick,
}) => {
  return (
    <div className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl border border-white dark:border-slate-700 text-center hover:shadow-lg transition-shadow">
      <div
        className={`w-16 h-16 ${iconColorClasses[iconColor]} rounded-2xl flex items-center justify-center mx-auto mb-6`}
      >
        <span className="material-symbols-outlined text-4xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
        {description}
      </p>
      {linkLabel && (
        <span
          onClick={onLinkClick}
          className={`${linkColorClasses[iconColor]} font-bold inline-flex items-center gap-1 cursor-pointer hover:underline`}
        >
          {linkLabel}
          <span className="material-symbols-outlined">chevron_right</span>
        </span>
      )}
    </div>
  );
};

export default FeatureCard;
