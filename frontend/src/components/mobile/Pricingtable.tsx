import React from "react";

export interface PricingRow {
  label: string;
  price: string;
  highlight?: boolean; // renders with accent background
}

interface PricingTableProps {
  title?: string;
  rows: PricingRow[];
}

export const PricingTable: React.FC<PricingTableProps> = ({
  title = "Pricing & Experiences",
  rows,
}) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-primary dark:text-slate-100 mb-4">
        {title}
      </h2>
      <div className="overflow-hidden rounded-xl border border-primary/10 bg-white dark:bg-background-dark">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 dark:bg-primary/20">
              <th className="p-4 text-sm font-bold text-primary dark:text-slate-200">
                Experience
              </th>
              <th className="p-4 text-sm font-bold text-primary dark:text-slate-200 text-right">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-primary/5">
            {rows.map((row) => (
              <tr
                key={row.label}
                className={
                  row.highlight ? "bg-primary/5 dark:bg-primary/10" : ""
                }
              >
                <td
                  className={`p-4 text-sm ${row.highlight ? "font-bold" : ""}`}
                >
                  {row.label}
                </td>
                <td
                  className={`p-4 text-sm font-bold text-right ${
                    row.highlight ? "text-primary" : ""
                  }`}
                >
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PricingTable;
