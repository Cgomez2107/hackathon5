import React from "react";

export interface Review {
  author: string;
  flag?: string; // emoji flag e.g. "🇺🇸"
  rating: number; // 1-5
  text: string;
}

interface ReviewListProps {
  reviews: Review[];
  totalCount?: number;
  onSeeAll?: () => void;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex text-amber-500 scale-75 origin-right">
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className="material-symbols-outlined"
        style={{ fontVariationSettings: i < rating ? "'FILL' 1" : "'FILL' 0" }}
      >
        star
      </span>
    ))}
  </div>
);

export const ReviewList: React.FC<ReviewListProps> = ({
  reviews,
  totalCount,
  onSeeAll,
}) => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-primary dark:text-slate-100 mb-4">
        Visitor Reviews
      </h2>
      <div className="space-y-4">
        {reviews.map((r) => (
          <div
            key={r.author}
            className="p-4 rounded-xl bg-white dark:bg-background-dark border border-primary/5"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">{r.author}</span>
                {r.flag && <span className="text-xs">{r.flag}</span>}
              </div>
              <StarRating rating={r.rating} />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              "{r.text}"
            </p>
          </div>
        ))}
      </div>

      {totalCount && (
        <button
          onClick={onSeeAll}
          className="mt-4 w-full text-center text-primary text-sm font-bold py-2 hover:underline"
        >
          See all {totalCount} reviews
        </button>
      )}
    </section>
  );
};

export default ReviewList;
