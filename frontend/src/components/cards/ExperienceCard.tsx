import React from "react";
import { Badge } from "../ui/Badge";

type BadgeVariant = "primary" | "secondary" | "accent";

interface ExperienceCardProps {
  image: string;
  imageAlt: string;
  rating: string;
  badgeLabel: string;
  badgeVariant?: BadgeVariant;
  title: string;
  location: string;
  price: string;
  onClick?: () => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  image,
  imageAlt,
  rating,
  badgeLabel,
  badgeVariant = "primary",
  title,
  location,
  price,
  onClick,
}) => {
  return (
    <div
      className="min-w-[400px] snap-start group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-[500px] rounded-3xl overflow-hidden mb-4">
        <img
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          src={image}
        />
        {/* Rating pill */}
        <div className="absolute top-4 right-4">
          <Badge variant="rating">{rating}</Badge>
        </div>
        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        {/* Content */}
        <div className="absolute bottom-6 left-6 text-white">
          <Badge variant={badgeVariant} className="mb-3">
            {badgeLabel}
          </Badge>
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          <p className="text-sm text-slate-300">
            {location} • {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
