"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "@/types/portfolio";

type FilterCategory = "All" | "Web & Backend" | "Game Systems";

const FILTERS: FilterCategory[] = ["All", "Web & Backend", "Game Systems"];

const extractYear = (timeline: string) => {
  const match = timeline.match(/\d{4}/);
  return match ? Number(match[0]) : 0;
};

export default function ProjectSection({ projects }: { projects: Project[] }) {
  const sortedProjects = [...projects].sort(
    (a, b) => extractYear(b.timeline) - extractYear(a.timeline),
  );

  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [openId, setOpenId] = useState<Project["id"] | null>(
    sortedProjects[0]?.id ?? null,
  );

  const isGameProject = (slug: string) =>
    slug === "ocean-hero-benchmark" || slug === "godot-game-systems";

  const inFilter = (p: Project, f: FilterCategory) =>
    f === "All"
      ? true
      : f === "Game Systems"
        ? isGameProject(p.slug)
        : !isGameProject(p.slug);

  const filtered = sortedProjects.filter((p) => inFilter(p, activeFilter));

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
                    const nextList = sortedProjects.filter((p) =>
                      inFilter(p, f),
                    );
                    setActiveFilter(f);
                    setOpenId(nextList[0]?.id ?? null);
                  }}
                  className={`ui cursor-pointer px-3 py-1.5 text-sm transition-colors ${
                    active
                      ? "bg-[var(--bolt)] font-semibold text-[var(--squall)]"
                      : "text-[var(--rain)] hover:text-[var(--bone)]"
                  }`}
                >
                  {f} ({sortedProjects.filter((p) => inFilter(p, f)).length})
                </button>
              );
            })}
          </div>
        </div>

        <ul className="mt-14 border-t border-[var(--line)]">
          {filtered.map((p, idx) => {
            const isOpen = openId === p.id;
            const panelId = `panel-${p.slug}`;
            const displayYear =
              extractYear(p.timeline) || p.timeline.split("•")[0].trim();

            return (
              <li key={p.id} className="border-b border-[var(--line)]">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : p.id)}
                    className="group flex w-full cursor-pointer items-baseline justify-between gap-6 py-7 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--bolt)]"
                  >
                    <span className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-xs text-[var(--rain)] sm:text-sm">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="display text-3xl sm:text-5xl">
                        <span
                          className={`box-decoration-clone -mx-1 px-2.5 transition-colors duration-300 ${
                            isOpen
                              ? "bg-[var(--bolt)] text-[var(--squall)]"
                              : "group-hover:text-[var(--bolt)]"
                          }`}
                        >
                          {p.title}
                        </span>
                      </span>
                    </span>

                    <span className="flex shrink-0 items-center gap-4 font-mono text-sm text-[var(--rain)]">
                      <span>{displayYear}</span>
                      <span
                        aria-hidden
                        className={`w-3 text-center text-base transition-colors ${
                          isOpen
                            ? "text-[var(--bolt)]"
                            : "group-hover:text-[var(--bone)]"
                        }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
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
                      <div className="grid gap-6 pb-10 pl-0 sm:pl-10 md:grid-cols-[1fr_2fr]">
                        <div>
                          <p className="font-mono text-sm text-[var(--bolt)]">
                            {p.role}
                          </p>
                          {p.coverImage && (
                            <Link
                              href={`/projects/${p.slug}`}
                              className="group/img relative mt-4 block aspect-video overflow-hidden border border-[var(--line)] bg-[var(--deck)] transition-colors hover:border-[var(--bolt)]"
                            >
                              <Image
                                src={p.coverImage}
                                alt={p.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 300px"
                                className="object-cover transition-transform duration-500 group-hover/img:scale-[1.03]"
                              />
                            </Link>
                          )}
                        </div>

                        <div>
                          <p className="max-w-2xl text-lg leading-8 text-[var(--bone)]/85">
                            {p.description}
                          </p>
                          <p className="mt-4 font-mono text-xs tracking-wide text-[var(--rain)]">
                            {p.techStack.join(" • ")}
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
