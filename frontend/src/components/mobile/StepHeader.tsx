import React from "react";

interface StepHeaderProps {
  title: string;
  onBack?: () => void;
}

export const StepHeader: React.FC<StepHeaderProps> = ({ title, onBack }) => {
  return (
    <header className="flex items-center p-4 border-b border-primary/10">
      <button
        onClick={onBack}
        className="text-primary p-2 hover:bg-primary/5 rounded-full transition-colors"
      >
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
      <h1 className="text-primary text-lg font-bold leading-tight flex-1 text-center pr-10">
        {title}
      </h1>
    </header>
  );
};

export default StepHeader;
