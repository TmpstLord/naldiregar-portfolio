"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

interface PhotoItem {
  src: string;
  alt: string;
  caption: string;
  position?: string;
}

const MY_PHOTOS: PhotoItem[] = [
  {
    src: "/images/foto-1.jpg",
    alt: "Raynaldi Irfansya Regar, S.Kom — Universitas Sam Ratulangi",
    caption: "S.Kom • Sistem Informasi Unsrat",
    position: "object-[50%_12%]",
  },
  // Aktifkan kembali jika file foto-2.jpg & foto-3.jpg sudah ditaruh di public/images/
  // {
  //   src: "/images/foto-2.jpg",
  //   alt: "Raynaldi Irfansya Regar — Dokumentasi 2",
  //   caption: "Software & Game Engineer",
  //   position: "object-center",
  // },
  // {
  //   src: "/images/foto-3.jpg",
  //   alt: "Raynaldi Irfansya Regar — Dokumentasi 3",
  //   caption: "Tempest",
  //   position: "object-center",
  // },
];

const ACCENT = "var(--bolt)";
const AUTOPLAY_MS = 5000;

export default function ProfilePhoto() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const [mounted, setMounted] = useState(false);
  const [paused, setPaused] = useState(false);

  const hasMultiple = MY_PHOTOS.length > 1;

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!mounted || !hasMultiple || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % MY_PHOTOS.length);
    }, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [currentIndex, mounted, hasMultiple, paused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? MY_PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MY_PHOTOS.length);
  };

  const arrowClass =
    "absolute top-1/2 -translate-y-1/2 border border-[var(--line)] bg-[var(--squall)]/85 p-1.5 text-[var(--bone)] " +
    "hover:border-[var(--bolt)] hover:text-[var(--bolt)] " +
    "focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--bolt)] " +
    "opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity cursor-pointer";

  return (
    <figure
      className="group relative mx-auto w-full max-w-[290px] lg:mx-0 lg:max-w-[310px] lg:self-center lg:justify-self-end"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Bingkai geometris offset */}
      <div
        aria-hidden
        className={`absolute inset-0 border transition-transform delay-500 duration-700 ease-out motion-reduce:transition-none ${
          mounted
            ? "translate-x-3 translate-y-3"
            : "translate-x-0 translate-y-0"
        }`}
        style={{ borderColor: ACCENT }}
      />

      {/* Kontainer Foto */}
      <div
        className={`relative aspect-[4/5] w-full overflow-hidden border border-[var(--line)] bg-[var(--squall)] transition-[clip-path] duration-1000 ease-out motion-reduce:transition-none ${
          mounted ? "[clip-path:inset(0)]" : "[clip-path:inset(0_0_100%_0)]"
        }`}
      >
        {MY_PHOTOS.map((photo, idx) => {
          const active = idx === currentIndex;
          return (
            <div
              key={photo.src}
              aria-hidden={!active}
              className={`absolute inset-0 transition-all duration-700 ease-out motion-reduce:transition-none ${
                active ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            >
              {!failedImages[idx] ? (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 1024px) 290px, 310px"
                  className={`object-cover ${photo.position || "object-center"}`}
                  onError={() =>
                    setFailedImages((prev) => ({ ...prev, [idx]: true }))
                  }
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                  <User className="mb-3 h-12 w-12 text-[var(--rain)]" />
                  <p className="font-mono text-xs text-[var(--bone)]">
                    public{photo.src}
                  </p>
                  <p className="mt-1.5 text-xs text-[var(--rain)]">
                    Simpan file foto di folder public/images/
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {/* Gradasi Bawah & Caption */}
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--squall)] via-[var(--squall)]/75 to-transparent p-4 pt-12">
          <div className="grid">
            {MY_PHOTOS.map((photo, idx) => (
              <p
                key={photo.src}
                className={`col-start-1 row-start-1 truncate font-mono text-xs tracking-wide text-[var(--bone)] transition-all duration-500 motion-reduce:transition-none ${
                  idx === currentIndex
                    ? "translate-y-0 opacity-100 delay-200"
                    : "translate-y-1 opacity-0"
                }`}
              >
                {photo.caption}
              </p>
            ))}
          </div>

          {hasMultiple && (
            <div className="mt-2 flex items-center gap-1.5">
              {MY_PHOTOS.map((photo, idx) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Lihat foto ${idx + 1}`}
                  aria-current={idx === currentIndex}
                  className="cursor-pointer py-1"
                >
                  <span
                    className={`block h-1 transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-5"
                        : "w-2 bg-[var(--rain)] hover:bg-[var(--bone)]"
                    }`}
                    style={
                      idx === currentIndex
                        ? { backgroundColor: ACCENT }
                        : undefined
                    }
                  />
                </button>
              ))}
            </div>
          )}
        </figcaption>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Foto sebelumnya"
              className={`${arrowClass} left-2.5`}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Foto berikutnya"
              className={`${arrowClass} right-2.5`}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>
    </figure>
  );
}
