import React from "react";

interface AIInsightNoteProps {
  message: React.ReactNode;
  icon?: string;
}

export const AIInsightNote: React.FC<AIInsightNoteProps> = ({
  message,
  icon = "auto_awesome",
}) => {
  return (
    <div className="flex gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10 mb-10">
      <div className="shrink-0 text-primary">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <p className="text-primary/80 text-sm leading-relaxed">{message}</p>
    </div>
  );
};

export default AIInsightNote;
