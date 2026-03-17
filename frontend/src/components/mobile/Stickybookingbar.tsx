import React from "react";

interface StickyBookingBarProps {
  primaryLabel?: string;
  primaryIcon?: string;
  secondaryLabel?: string;
  secondaryIcon?: string;
  secondaryIconColor?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
}

export const StickyBookingBar: React.FC<StickyBookingBarProps> = ({
  primaryLabel = "Book directly — no commission",
  primaryIcon = "bolt",
  secondaryLabel = "Ask Cumanday on WhatsApp",
  secondaryIcon = "chat",
  secondaryIconColor = "text-emerald-600",
  onPrimary,
  onSecondary,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-primary/10 p-4 z-50">
      <div className="max-w-3xl mx-auto flex flex-col gap-2">
        <button
          onClick={onPrimary}
          className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          {primaryLabel}
          {primaryIcon && (
            <span className="material-symbols-outlined text-sm">
              {primaryIcon}
            </span>
          )}
        </button>
        <button
          onClick={onSecondary}
          className="w-full bg-primary/10 dark:bg-white/10 text-primary dark:text-slate-100 font-bold py-3 rounded-xl border border-primary/20 hover:bg-primary/20 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          {secondaryIcon && (
            <span className={`material-symbols-outlined ${secondaryIconColor}`}>
              {secondaryIcon}
            </span>
          )}
          {secondaryLabel}
        </button>
      </div>
    </div>
  );
};

export default StickyBookingBar;
