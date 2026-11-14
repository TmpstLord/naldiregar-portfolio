"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

interface PhotoItem {
  src: string;
  alt: string;
  caption: string;
  position?: string;
}

// Sesuaikan nama file di sini dengan foto yang kamu taruh di public/images/
const MY_PHOTOS: PhotoItem[] = [
  {
    src: "/images/foto-1.jpg",
    alt: "Raynaldi Irfansya Regar, S.Kom — Universitas Sam Ratulangi",
    caption: "S.Kom • Sistem Informasi Unsrat",
    position: "object-[22%_15%]",
  },
  {
    src: "/images/foto-2.jpg",
    alt: "Raynaldi Irfansya Regar — Dokumentasi 2",
    caption: "Software & Game Engineer",
    position: "object-center",
  },
  {
    src: "/images/foto-3.jpg",
    alt: "Raynaldi Irfansya Regar — Dokumentasi 3",
    caption: "MasterOfTempest",
    position: "object-center",
  },
];

export default function ProfilePhoto() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const currentPhoto = MY_PHOTOS[currentIndex];
  const hasMultiple = MY_PHOTOS.length > 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? MY_PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === MY_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative mx-auto lg:mx-0 w-72 sm:w-80 shrink-0 group">
      {/* Efek cahaya latar belakang */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-sky-500/10 to-transparent blur-xl" />

      {/* Bingkai Foto */}
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 shadow-2xl">
        {!failedImages[currentIndex] ? (
          <Image
            key={currentPhoto.src}
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            fill
            priority={currentIndex === 0}
            sizes="(max-width: 640px) 288px, 320px"
            className={`object-cover transition-all duration-300 ${
              currentPhoto.position || "object-center"
            }`}
            onError={() =>
              setFailedImages((prev) => ({ ...prev, [currentIndex]: true }))
            }
          />
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full p-6 text-center text-slate-500">
            <User className="w-14 h-14 text-cyan-500/50 mb-3" />
            <p className="text-xs font-mono text-slate-300">
              public{currentPhoto.src}
            </p>
            <p className="mt-1.5 text-[11px] text-slate-500">
              Simpan file foto dengan nama ini di folder public/images/
            </p>
          </div>
        )}

        {/* Gradasi bawah & Caption */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 pt-10">
          <p className="text-xs font-medium text-slate-200 truncate">
            {currentPhoto.caption}
          </p>

          {hasMultiple && (
            <div className="flex items-center gap-1.5 mt-2">
              {MY_PHOTOS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Lihat foto ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex
                      ? "w-5 bg-cyan-400"
                      : "w-1.5 bg-slate-500/70 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Tombol Geser Kiri & Kanan */}
        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Foto sebelumnya"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/70 border border-slate-700/80 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/50 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Foto berikutnya"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/70 border border-slate-700/80 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/50 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
