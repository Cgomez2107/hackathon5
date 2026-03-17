import React from "react";

interface MobileSearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const MobileSearchBar: React.FC<MobileSearchBarProps> = ({
  placeholder = "Find experiences in the PCC...",
  value = "",
  onChange,
}) => {
  return (
    <div className="px-4 py-4">
      <div className="flex w-full h-14 rounded-xl shadow-sm overflow-hidden">
        <div className="text-primary/60 flex bg-white dark:bg-primary/20 items-center justify-center pl-4">
          <span className="material-symbols-outlined">search</span>
        </div>
        <input
          className="flex w-full min-w-0 flex-1 bg-white dark:bg-primary/20 text-primary dark:text-slate-100 placeholder:text-primary/40 px-3 text-base font-normal focus:outline-none border-none rounded-r-xl"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          type="text"
        />
      </div>
    </div>
  );
};

export default MobileSearchBar;
