import React, { useState } from "react";

interface FilterOption {
  id: string;
  label: string;
  icon?: string;
}

interface FilterChipsProps {
  options: FilterOption[];
  defaultSelected?: string;
  onChange?: (id: string) => void;
}

export const FilterChips: React.FC<FilterChipsProps> = ({
  options,
  defaultSelected,
  onChange,
}) => {
  const [selected, setSelected] = useState(defaultSelected ?? options[0]?.id);

  const handleSelect = (id: string) => {
    setSelected(id);
    onChange?.(id);
  };

  return (
    <div className="flex gap-3 px-4 pb-2 overflow-x-auto no-scrollbar">
      {options.map((opt) => {
        const isActive = selected === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => handleSelect(opt.id)}
            className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 transition-all ${
              isActive
                ? "bg-primary text-white shadow-md"
                : "bg-white dark:bg-primary/20 border border-primary/10 text-primary/80 dark:text-slate-200 hover:bg-primary/5"
            }`}
          >
            {opt.icon && (
              <span
                className={`material-symbols-outlined text-sm ${isActive ? "text-white" : "text-accent-green"}`}
              >
                {opt.icon}
              </span>
            )}
            <p className="text-sm font-medium">{opt.label}</p>
          </button>
        );
      })}
    </div>
  );
};

export default FilterChips;

