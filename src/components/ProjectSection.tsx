"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Project } from "@/types/portfolio";
import { ArrowUpRight, Layers, Server, Gamepad2 } from "lucide-react";

type FilterCategory = "All" | "Web & Backend" | "Game Systems";

export default function ProjectSection({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const isGameProject = (slug: string) =>
    slug === "ocean-hero-benchmark" || slug === "godot-game-systems";

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Game Systems") return isGameProject(project.slug);
    return !isGameProject(project.slug);
  });

  const tabs: { label: FilterCategory; count: number; icon: ReactNode }[] = [
    {
      label: "All",
      count: projects.length,
      icon: <Layers className="w-3.5 h-3.5" />,
    },
    {
      label: "Web & Backend",
      count: projects.filter((p) => !isGameProject(p.slug)).length,
      icon: <Server className="w-3.5 h-3.5" />,
    },
    {
      label: "Game Systems",
      count: projects.filter((p) => isGameProject(p.slug)).length,
      icon: <Gamepad2 className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Technical Case Studies
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              Bedah arsitektur dan dokumentasi teknis dari sistem yang pernah
              saya bangun.
            </p>
          </div>

          {/* Tab Filter Interaktif */}
          <div className="inline-flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
            {tabs.map((tab) => {
              const isActive = activeFilter === tab.label;
              return (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveFilter(tab.label)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? "bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-500/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.5 text-[10px] rounded-md ${
                      isActive
                        ? "bg-slate-950/20 text-slate-950"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Kartu Proyek */}
        <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-14 auto-rows-fr lg:mx-0 lg:max-w-none md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="relative flex flex-col justify-between p-8 transition-all border rounded-2xl bg-slate-900/60 border-slate-800 hover:-translate-y-1 hover:border-cyan-500/50 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-cyan-400/90 mb-4">
                  <span>{project.role}</span>
                  <span className="text-slate-500">
                    {project.timeline.split("•")[0]}
                  </span>
                </div>

                <h3 className="flex items-start justify-between gap-3 text-xl font-bold leading-7 text-white transition-colors group-hover:text-cyan-400">
                  <Link href={`/projects/${project.slug}`}>
                    <span className="absolute inset-0"></span>
                    {project.title}
                  </Link>
                  <ArrowUpRight className="w-5 h-5 mt-1 shrink-0 text-slate-500 group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>

                <p className="mt-4 text-sm leading-6 line-clamp-3 text-slate-400">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-6 mt-6 border-t border-slate-800/70 text-xs">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="relative z-10 px-3 py-1 font-medium rounded-full bg-slate-800/80 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
