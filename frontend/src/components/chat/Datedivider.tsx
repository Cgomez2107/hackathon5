import React from "react";

interface DateDividerProps {
  label: string; // e.g. "Today", "Yesterday", "Oct 14"
}

export const DateDivider: React.FC<DateDividerProps> = ({ label }) => {
  return (
    <div className="flex justify-center my-4">
      <span className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-slate-300 text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
        {label}
      </span>
    </div>
  );
};

export default DateDivider;
