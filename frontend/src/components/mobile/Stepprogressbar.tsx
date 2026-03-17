import React from "react";

interface StepProgressBarProps {
  current: number;
  total: number;
  stepLabel?: string; // e.g. "Photos"
}

export const StepProgressBar: React.FC<StepProgressBarProps> = ({
  current,
  total,
  stepLabel,
}) => {
  const percent = Math.round((current / total) * 100);

  return (
    <div className="px-6 pt-6 pb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-primary/70 text-sm font-medium uppercase tracking-wider">
          Step {current} of {total}
        </span>
        {stepLabel && (
          <span className="text-primary font-bold">{stepLabel}</span>
        )}
      </div>
      <div className="h-3 w-full bg-primary/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default StepProgressBar;
