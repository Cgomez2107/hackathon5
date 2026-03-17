import React, { useState, useRef } from "react";

interface PhotoSlot {
  url?: string;
  alt?: string;
}

interface PhotoUploadGridProps {
  slots?: number;
  initialPhotos?: PhotoSlot[];
  onChange?: (photos: PhotoSlot[]) => void;
}

export const PhotoUploadGrid: React.FC<PhotoUploadGridProps> = ({
  slots = 3,
  initialPhotos = [],
  onChange,
}) => {
  const [photos, setPhotos] = useState<PhotoSlot[]>(initialPhotos);
  const inputRef = useRef<HTMLInputElement>(null);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);

  const handleSlotClick = (index: number) => {
    setPendingIndex(index);
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || pendingIndex === null) return;

    const url = URL.createObjectURL(file);
    const updated = [...photos];
    updated[pendingIndex] = { url, alt: file.name };
    setPhotos(updated);
    onChange?.(updated);
    // Reset so same file can be selected again
    e.target.value = "";
    setPendingIndex(null);
  };

  const handleRemove = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    const updated = [...photos];
    updated.splice(index, 1);
    setPhotos(updated);
    onChange?.(updated);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <div className="grid grid-cols-3 gap-4 mb-8">
        {Array.from({ length: slots }).map((_, i) => {
          const photo = photos[i];
          if (photo?.url) {
            return (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden border-2 border-primary group cursor-pointer"
                onClick={() => handleSlotClick(i)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${photo.url}')` }}
                />
                {/* Check badge */}
                <div className="absolute top-2 right-2 bg-primary text-white rounded-full p-1 shadow-lg">
                  <span className="material-symbols-outlined text-xs">
                    check
                  </span>
                </div>
                {/* Remove on hover */}
                <button
                  onClick={(e) => handleRemove(e, i)}
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                >
                  <span className="material-symbols-outlined text-white text-3xl">
                    delete
                  </span>
                </button>
              </div>
            );
          }
          return (
            <button
              key={i}
              onClick={() => handleSlotClick(i)}
              className="aspect-square rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 flex flex-col items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <span className="material-symbols-outlined text-primary/60 text-4xl">
                add
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default PhotoUploadGrid;
