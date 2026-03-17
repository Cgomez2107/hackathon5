import React, { useState } from "react";

interface HeroGalleryProps {
  images: { url: string; alt?: string }[];
  onBack?: () => void;
}

export const HeroGallery: React.FC<HeroGalleryProps> = ({ images, onBack }) => {
  const [current, setCurrent] = useState(0);
  const [saved, setSaved] = useState(false);

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  const img = images[current];

  return (
    <div className="relative w-full h-[350px] md:h-[450px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), transparent 30%, rgba(0,0,0,0.6)), url("${img.url}")`,
        }}
        aria-label={img.alt}
      />

      {/* Top controls */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4">
        <button
          onClick={onBack}
          className="flex items-center justify-center size-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>

        <div className="flex gap-2">
          <button className="flex items-center justify-center size-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors">
            <span className="material-symbols-outlined">share</span>
          </button>
          <button
            onClick={() => setSaved((s) => !s)}
            className="flex items-center justify-center size-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
          >
            <span
              className={`material-symbols-outlined ${saved ? "text-red-400" : "text-white"}`}
              style={{ fontVariationSettings: saved ? "'FILL' 1" : "'FILL' 0" }}
            >
              favorite
            </span>
          </button>
        </div>
      </div>

      {/* Left / right tap zones (no visible arrows — mobile-first) */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-0 top-0 bottom-0 w-1/3 opacity-0"
            aria-label="Previous photo"
          />
          <button
            onClick={next}
            className="absolute right-0 top-0 bottom-0 w-1/3 opacity-0"
            aria-label="Next photo"
          />
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`size-1.5 rounded-full transition-all ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroGallery;
