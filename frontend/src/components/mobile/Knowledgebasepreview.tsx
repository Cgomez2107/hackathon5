import React from "react";

export interface KBField {
  label: string;
  value?: string; // if present → filled; if absent → pending
}

interface KnowledgeBasePreviewProps {
  completionPercent: number;
  fields: KBField[];
}

export const KnowledgeBasePreview: React.FC<KnowledgeBasePreviewProps> = ({
  completionPercent,
  fields,
}) => {
  const filled = fields.filter((f) => f.value);
  const pending = fields.filter((f) => !f.value);

  return (
    <section className="mt-8 px-6 pb-12">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-primary font-bold text-lg">
          Your AI knowledge base so far
        </h3>
        <div className="bg-primary/10 px-3 py-1 rounded-full text-xs font-bold text-primary">
          {completionPercent}% Complete
        </div>
      </div>

      <div className="bg-white dark:bg-background-dark/50 border border-primary/10 rounded-2xl p-5 shadow-sm">
        <div className="space-y-4">
          {/* Filled fields */}
          {filled.map((field) => (
            <div key={field.label} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-green-600 text-sm mt-1">
                check_circle
              </span>
              <div>
                <p className="text-primary/40 text-[10px] uppercase font-bold tracking-widest">
                  {field.label}
                </p>
                <p className="text-primary font-medium">{field.value}</p>
              </div>
            </div>
          ))}

          {/* Pending fields */}
          {pending.length > 0 && (
            <div className="grid grid-cols-2 gap-y-4 pt-2 border-t border-primary/5">
              {pending.map((field) => (
                <div
                  key={field.label}
                  className="flex items-start gap-3 opacity-50"
                >
                  <span className="material-symbols-outlined text-primary/30 text-sm mt-1">
                    radio_button_unchecked
                  </span>
                  <div>
                    <p className="text-primary/60 text-[10px] uppercase font-bold tracking-widest">
                      {field.label}
                    </p>
                    <div className="h-3 w-14 bg-primary/10 rounded mt-1" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBasePreview;
