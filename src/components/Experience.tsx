"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

type Item = {
  id: string | number;
  type: string;
  period: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
};

export default function Experience({ items }: { items: Item[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });

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
                  <p className="mt-1 text-[var(--bolt)]">{item.organization}</p>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--bone)]/85">
                    {item.description}
                  </p>
                  <p className="mt-3 text-sm italic text-[var(--rain)]">
                    {item.highlights.join(", ")}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
