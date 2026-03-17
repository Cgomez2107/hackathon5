import React from "react";
import { Button } from "../ui/Button";

interface SearchField {
  icon: string;
  label: string;
  placeholder: string;
}

const fields: SearchField[] = [
  { icon: "location_on", label: "Destination", placeholder: "Where to?" },
  {
    icon: "coffee",
    label: "Experience",
    placeholder: "Tour, stay, tasting...",
  },
  { icon: "calendar_month", label: "Dates", placeholder: "Add dates" },
  { icon: "group", label: "Travelers", placeholder: "Add guests" },
];

export const SearchBar: React.FC = () => {
  return (
    <div className="bg-white dark:bg-background-dark rounded-2xl shadow-2xl p-2 flex flex-col md:flex-row items-center gap-2 border border-slate-100 dark:border-slate-800">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-2 w-full">
        {fields.map((field, idx) => (
          <div
            key={field.label}
            className={`flex items-center gap-3 px-4 py-3 ${
              idx < fields.length - 1
                ? "border-r border-slate-100 dark:border-slate-800"
                : ""
            }`}
          >
            <span className="material-symbols-outlined text-slate-400">
              {field.icon}
            </span>
            <div className="text-left w-full">
              <p className="text-[10px] uppercase font-bold text-slate-400">
                {field.label}
              </p>
              <input
                className="bg-transparent border-none p-0 text-sm focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-400 w-full outline-none"
                placeholder={field.placeholder}
                type="text"
              />
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="secondary"
        size="sm"
        icon="search"
        className="w-full md:w-auto p-4 rounded-xl"
      />
    </div>
  );
};

export default SearchBar;
