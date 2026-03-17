import React from "react";

export interface Highlight {
  icon: string;
  label: string;
  value: string;
}

interface LiveHighlightGridProps {
  highlights: Highlight[];
  badgeLabel?: string;
}

export const LiveHighlightGrid: React.FC<LiveHighlightGridProps> = ({
  highlights,
  badgeLabel = "Live Data",
}) => {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-bold text-primary dark:text-slate-100">
          Today's highlights
        </h2>
        <span className="bg-primary/5 text-primary text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded font-bold">
          {badgeLabel}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {highlights.map((h) => (
          <div
            key={h.label}
            className="flex items-start gap-3 p-4 rounded-xl border border-primary/10 bg-white dark:bg-background-dark shadow-sm"
          >
            <span className="material-symbols-outlined text-primary shrink-0">
              {h.icon}
            </span>
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase">
                {h.label}
              </p>
              <p className="text-sm font-semibold">{h.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveHighlightGrid;
