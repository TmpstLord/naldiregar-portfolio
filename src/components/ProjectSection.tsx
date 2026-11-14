"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "@/types/portfolio";

type FilterCategory = "All" | "Web & Backend" | "Game Systems";

const FILTERS: FilterCategory[] = ["All", "Web & Backend", "Game Systems"];

export default function ProjectSection({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [openId, setOpenId] = useState<Project["id"] | null>(
    projects[0]?.id ?? null,
  );

  const isGameProject = (slug: string) =>
    slug === "ocean-hero-benchmark" || slug === "godot-game-systems";

  const inFilter = (p: Project, f: FilterCategory) =>
    f === "All"
      ? true
      : f === "Game Systems"
        ? isGameProject(p.slug)
        : !isGameProject(p.slug);

  const filtered = projects.filter((p) => inFilter(p, activeFilter));

  return (
    <section id="projects" className="border-t border-[var(--line)] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <h2 className="display text-5xl leading-none sm:text-6xl">
              Studi kasus teknis
            </h2>
            <p className="mt-5 max-w-md text-lg leading-7 text-[var(--rain)]">
              Bedah arsitektur dan dokumentasi teknis dari sistem yang pernah
              saya bangun.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter proyek"
            className="flex flex-wrap gap-2"
          >
            {FILTERS.map((f) => {
              const active = activeFilter === f;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setActiveFilter(f);
                    setOpenId(null);
                  }}
                  className={`px-3 py-1.5 text-sm transition-colors ${
                    active
                      ? "bg-[var(--bolt)] text-[var(--squall)]"
                      : "text-[var(--rain)] hover:text-[var(--bone)]"
                  }`}
                >
                  {f} ({projects.filter((p) => inFilter(p, f)).length})
                </button>
              );
            })}
          </div>
        </div>

        <ul className="mt-14 border-t border-[var(--line)]">
          {filtered.map((p) => {
            const isOpen = openId === p.id;
            const panelId = `panel-${p.slug}`;

            return (
              <li key={p.id} className="border-b border-[var(--line)]">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : p.id)}
                    className="flex w-full items-baseline justify-between gap-6 py-7 text-left"
                  >
                    <span className="display text-3xl sm:text-5xl">
                      <span
                        className={`box-decoration-clone px-1 transition-colors duration-300 ${
                          isOpen ? "bg-[var(--bolt)] text-[var(--squall)]" : ""
                        }`}
                      >
                        {p.title}
                      </span>
                    </span>
                    <span className="shrink-0 text-[var(--rain)]">
                      {p.timeline.split("•")[0].trim()}
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 pb-10 md:grid-cols-[1fr_2fr]">
                        <p className="text-[var(--bolt)]">{p.role}</p>
                        <div>
                          <p className="max-w-2xl text-lg leading-8 text-[var(--bone)]/85">
                            {p.description}
                          </p>
                          <p className="mt-4 text-sm italic text-[var(--rain)]">
                            {p.techStack.join(", ")}
                          </p>
                          <Link
                            href={`/projects/${p.slug}`}
                            className="mark mt-6 inline-block"
                          >
                            Baca studi kasus lengkap
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
