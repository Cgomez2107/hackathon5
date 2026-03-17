import React, { useState } from "react";

interface MiniCardProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  price: number;
  currency?: string;
  onClick?: () => void;
}

export const MiniCard: React.FC<MiniCardProps> = ({
  image,
  imageAlt,
  title,
  subtitle,
  price,
  currency = "USD",
  onClick,
}) => {
  const [saved, setSaved] = useState(false);

  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-primary/10 rounded-xl overflow-hidden shadow-sm border border-primary/5 cursor-pointer group"
    >
      <div className="aspect-square relative overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
          alt={imageAlt}
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSaved((s) => !s);
          }}
          className="absolute top-2 right-2 size-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
        >
          <span
            className={`material-symbols-outlined text-lg transition-colors ${
              saved ? "text-red-500" : "text-primary"
            }`}
            style={{ fontVariationSettings: saved ? "'FILL' 1" : "'FILL' 0" }}
          >
            favorite
          </span>
        </button>
      </div>
      <div className="p-3">
        <h4 className="font-bold text-primary dark:text-slate-100 text-sm truncate">
          {title}
        </h4>
        <p className="text-[10px] text-primary/60 dark:text-slate-400">
          {subtitle}
        </p>
        <p className="mt-2 text-accent-green font-bold text-sm">
          ${price} {currency}
        </p>
      </div>
    </div>
  );
};

export default MiniCard;
