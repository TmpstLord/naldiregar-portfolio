import ProjectSection from "@/components/ProjectSection";
import Link from "next/link";
import { featuredProjects, experiences } from "@/lib/data";
import ContactSection from "@/components/ContactSection";
import { getTopGithubRepos } from "@/lib/github";
import {
  ArrowUpRight,
  Briefcase,
  Award,
  BadgeCheck,
  Star,
  FolderGit2,
} from "lucide-react";

export default async function Home() {
  const githubRepos = await getTopGithubRepos();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      {/* 1. Hero Section */}
      <section className="relative px-6 pt-32 pb-20 mx-auto max-w-7xl lg:px-8 lg:pt-44">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium border rounded-full text-cyan-400 border-cyan-500/30 bg-cyan-500/10">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-cyan-400"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-cyan-500"></span>
            </span>
            Available for Hire (Backend / Fullstack Role)
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Raynaldi Irfansya Regar
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-slate-400 sm:text-3xl">
            Full-Stack Web & Game Backend Engineer
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Membangun sistem operasional yang solid dengan{" "}
            <strong>Laravel & Express.js</strong>, dan mengoptimalkan performa
            game menggunakan <strong>Unity DOTS & Godot</strong>. Berpengalaman
            merancang arsitektur database transaksional dan integrasi API yang
            tangguh.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 transition-all bg-cyan-500 rounded-lg hover:bg-cyan-400 shadow-lg shadow-cyan-500/20"
            >
              Lihat Technical Case Study
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/TmpstLord"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white transition-colors border rounded-lg border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:text-cyan-400"
            >
              Kunjungi GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Tech Stack Section */}
      <section className="py-12 border-y border-slate-800/50 bg-slate-900/40">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <p className="text-xs font-semibold tracking-widest text-center uppercase text-slate-500">
            Teknologi & Ekosistem Utama
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              "Laravel",
              "Express.js",
              "TypeScript",
              "MySQL",
              "Firebase",
              "Unity DOTS",
              "Godot",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-semibold transition-colors border rounded-lg bg-slate-900/80 border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Experience & Milestones Section (BARU) */}
      <section id="experience" className="py-24 border-b border-slate-800/50">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Experience & Milestones
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Rekam jejak pengembangan perangkat lunak, magang industri, dan
              kompetisi tingkat nasional.
            </p>
          </div>

          <div className="relative mt-14 border-l border-slate-800 ml-3 space-y-10">
            {experiences.map((item) => (
              <div key={item.id} className="relative pl-8 group">
                {/* Titik indikator timeline */}
                <span className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 ring-2 ring-cyan-500/60 group-hover:ring-cyan-400 transition-all">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </span>

                <div className="p-6 transition-all border rounded-2xl bg-slate-900/40 border-slate-800/80 hover:border-cyan-500/40">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {item.type === "Internship" && (
                        <Briefcase className="w-3.5 h-3.5" />
                      )}
                      {item.type === "Competition" && (
                        <Award className="w-3.5 h-3.5" />
                      )}
                      {item.type === "Certification" && (
                        <BadgeCheck className="w-3.5 h-3.5" />
                      )}
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-cyan-400/90">
                    {item.organization}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-md bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Projects Section */}
      <ProjectSection projects={featuredProjects} />

      {/* 5. Live GitHub Repositories Section */}
      <section className="py-24 border-t border-slate-800/50 bg-slate-900/20">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Latest GitHub Repositories
            </h2>
            <a
              href="https://github.com/TmpstLord"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
            >
              Lihat semua di GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-10 auto-rows-fr lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {githubRepos.length > 0 ? (
              githubRepos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-6 transition-all border rounded-xl bg-slate-900/50 border-slate-800 hover:-translate-y-1 hover:border-cyan-500/50 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <FolderGit2 className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                      {repo.language && (
                        <span className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-cyan-500/10 text-cyan-400">
                          {repo.language}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {repo.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 line-clamp-2 text-slate-400">
                      {repo.description ||
                        "Tidak ada deskripsi pada repository ini."}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-6 text-xs font-medium text-slate-500">
                    <Star className="w-3.5 h-3.5 text-amber-400/80" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                </a>
              ))
            ) : (
              <p className="text-slate-400">Memuat data repositori...</p>
            )}
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
