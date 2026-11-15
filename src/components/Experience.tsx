"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, FileText, X } from "lucide-react";

type Item = {
  id: string | number;
  type: string;
  period: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
  proofUrl?: string;
  proofLabel?: string;
};

type ActiveProof = {
  url: string;
  label: string;
  organization: string;
};

export default function Experience({ items }: { items: Item[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const [activeProof, setActiveProof] = useState<ActiveProof | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });

  useEffect(() => {
    if (!activeProof) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProof(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeProof]);

  const isPdf = activeProof?.url.toLowerCase().endsWith(".pdf");

  return (
    <section id="experience" className="border-t border-[var(--line)] py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[320px_1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="display text-5xl leading-none sm:text-6xl">
            Pengalaman dan pencapaian
          </h2>
          <p className="mt-5 max-w-xs text-lg leading-7 text-[var(--rain)]">
            Magang industri, sertifikasi, dan kompetisi tingkat nasional,
            diurutkan dari yang terbaru.
          </p>
        </div>

        <ol ref={ref} className="relative ml-2 space-y-14 pl-10">
          <span
            aria-hidden
            className="absolute bottom-2 left-0 top-2 w-px bg-[var(--line)]"
          />
          <motion.span
            aria-hidden
            style={{ scaleY }}
            className="absolute bottom-2 left-0 top-2 w-px origin-top bg-[var(--bolt)]"
          />

          {items.map((item) => (
            <li key={item.id} className="relative">
              <span
                aria-hidden
                className="absolute -left-[45px] top-3 h-2.5 w-2.5 rotate-45 bg-[var(--bone)]"
              />
              <div className="grid gap-4 sm:grid-cols-[140px_1fr]">
                <div>
                  <p className="display text-3xl">{item.period}</p>
                  <p className="mt-1 text-sm text-[var(--rain)]">{item.type}</p>
                </div>
                <div>
                  <h3 className="display text-2xl sm:text-3xl">{item.role}</h3>
                  <p className="mt-1 text-[var(--bone)]">{item.organization}</p>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--bone)]/85">
                    {item.description}
                  </p>
                  <p className="mt-3 text-sm italic text-[var(--rain)]">
                    {item.highlights.join(", ")}
                  </p>

                  {item.proofUrl && (
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveProof({
                            url: item.proofUrl!,
                            label: item.proofLabel || "Lihat bukti kredensial",
                            organization: item.organization,
                          })
                        }
                        className="mark inline-flex cursor-pointer items-center gap-1.5 font-mono text-sm"
                      >
                        <span>
                          {item.proofLabel || "Lihat bukti kredensial"}
                        </span>
                        <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Modal Pratinjau Kredensial */}
      <AnimatePresence>
        {activeProof && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={activeProof.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveProof(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[90vh] w-full max-w-4xl flex-col border border-[var(--line)] bg-[var(--squall)] shadow-2xl"
            >
              {/* Header Modal */}
              <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] bg-[var(--deck)] px-5 py-3.5">
                <div className="flex min-w-0 items-center gap-2.5">
                  <FileText
                    aria-hidden
                    className="h-4 w-4 shrink-0 text-[var(--bolt)]"
                  />
                  <div className="min-w-0">
                    <p className="truncate font-mono text-sm text-[var(--bone)]">
                      {activeProof.label}
                    </p>
                    <p className="truncate text-xs text-[var(--rain)]">
                      {activeProof.organization}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <a
                    href={activeProof.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 border border-[var(--line)] px-3 py-1.5 font-mono text-xs text-[var(--bone)] transition-colors hover:border-[var(--bolt)] hover:text-[var(--bolt)]"
                  >
                    <span>Tab baru</span>
                    <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveProof(null)}
                    aria-label="Tutup pratinjau"
                    className="cursor-pointer p-1.5 text-[var(--rain)] transition-colors hover:text-[var(--bone)]"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Konten File (PDF atau Gambar) */}
              <div className="flex-1 overflow-auto bg-[var(--squall)] p-4">
                {isPdf ? (
                  <iframe
                    src={activeProof.url}
                    title={activeProof.label}
                    className="h-[72vh] w-full border border-[var(--line)] bg-white"
                  />
                ) : (
                  <div className="flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={activeProof.url}
                      alt={activeProof.label}
                      className="max-h-[72vh] w-auto border border-[var(--line)] object-contain"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
