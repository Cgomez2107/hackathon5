import React from "react";

interface BookingDetail {
  icon: string;
  value: string;
}

interface BookingCardProps {
  image: string;
  imageAlt?: string;
  status?: "confirmed" | "pending" | "cancelled";
  farmName: string;
  experienceLabel: string;
  details: BookingDetail[]; // up to 4, shown in a 2-col grid
  totalPrice: string;
  time: string;
  onViewBooking?: () => void;
}

const statusConfig = {
  confirmed: { label: "Confirmed", color: "bg-green-500" },
  pending: { label: "Pending", color: "bg-yellow-500" },
  cancelled: { label: "Cancelled", color: "bg-red-500" },
};

export const BookingCard: React.FC<BookingCardProps> = ({
  image,
  imageAlt = "",
  status = "confirmed",
  farmName,
  experienceLabel,
  details,
  totalPrice,
  time,
  onViewBooking,
}) => {
  const { label, color } = statusConfig[status];

  return (
    <div className="flex flex-col items-end gap-1 ml-auto w-full max-w-[280px]">
      <div className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg border border-primary/10 w-full">
        {/* Hero image */}
        <div
          className="h-24 bg-cover bg-center relative"
          style={{ backgroundImage: `url("${image}")` }}
          aria-label={imageAlt}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-2 left-3">
            <span
              className={`${color} text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase`}
            >
              {label}
            </span>
          </div>
        </div>

        <div className="p-4 space-y-3">
          {/* Title */}
          <div>
            <h3 className="font-bold text-sm text-primary dark:text-slate-100">
              {farmName}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {experienceLabel}
            </p>
          </div>

          {/* Details grid */}
          {details.length > 0 && (
            <div className="grid grid-cols-2 gap-2 py-2 border-y border-primary/5">
              {details.map((d) => (
                <div
                  key={d.icon + d.value}
                  className="flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-primary text-[16px]">
                    {d.icon}
                  </span>
                  <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300">
                    {d.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Price + CTA */}
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              Total Price
            </span>
            <span className="text-sm font-bold text-primary dark:text-slate-100">
              {totalPrice}
            </span>
          </div>
          <button
            onClick={onViewBooking}
            className="w-full bg-primary text-white py-2 rounded-lg text-xs font-bold hover:bg-primary/90 transition-colors"
          >
            View booking
          </button>
        </div>
      </div>

      <div className="text-[10px] text-slate-400 mt-1">{time}</div>
    </div>
  );
};

export default BookingCard;
