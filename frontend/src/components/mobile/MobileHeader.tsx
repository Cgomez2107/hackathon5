import React from "react";
import Logo from "../ui/Logo";

interface MobileHeaderProps {
  title?: string;
  subtitle?: string;
  onNotificationClick?: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  onNotificationClick,
}) => {
  return (
    <header className="flex items-center bg-warm-cream dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50 border-b border-primary/5">
      <div className="flex items-center gap-2">
        <Logo />
      </div>
      <button
        onClick={onNotificationClick}
        className="text-primary dark:text-slate-100 flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 hover:bg-primary/10 transition-colors"
      >
        <span className="material-symbols-outlined">notifications</span>
      </button>
    </header>
  );
};

export default MobileHeader;
