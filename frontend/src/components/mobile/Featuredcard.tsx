import React from "react";

interface Language {
  code: string;
}

interface FeaturedCardProps {
  image: string;
  imageAlt: string;
  badge?: string;
  title: string;
  location: string;
  rating: number;
  price: number;
  currency?: string;
  priceUnit?: string;
  languages?: Language[];
  onClick?: () => void;
}

export const FeaturedCard: React.FC<FeaturedCardProps> = ({
  image,
  imageAlt,
  badge,
  title,
  location,
  rating,
  price,
  currency = "USD",
  priceUnit = "person",
  languages = [],
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-background-dark group cursor-pointer"
    >
      {/* Image */}
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt={imageAlt}
        />
      </div>

      {/* Badge */}
      {badge && (
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <span className="material-symbols-outlined text-xs text-primary">
            verified
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
            {badge}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-1">
          <div>
            <h3 className="text-lg font-bold text-primary dark:text-slate-100">
              {title}
            </h3>
            <p className="text-sm text-primary/60 dark:text-slate-400 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">
                location_on
              </span>
              {location}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg">
            <span className="material-symbols-outlined text-sm text-yellow-600">
              star
            </span>
            <span className="text-sm font-bold text-yellow-700 dark:text-yellow-500">
              {rating}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-primary dark:text-slate-100 font-bold text-lg">
            ${price} {currency}{" "}
            <span className="text-xs font-normal text-primary/60">
              / {priceUnit}
            </span>
          </p>
          {languages.length > 0 && (
            <div className="flex gap-1">
              {languages.map((lang) => (
                <span
                  key={lang.code}
                  className="px-1.5 py-0.5 rounded bg-primary/5 text-[10px] font-bold text-primary/70"
                >
                  {lang.code}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
