import Link from "next/link";
import { GithubRepo } from "@/types/portfolio"; // Memastikan tipe data terpanggil
import { featuredProjects } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      {/* 1. Hero Section */}
      <section className="relative px-6 pt-32 pb-20 mx-auto max-w-7xl lg:px-8 lg:pt-48">
        {/* Efek grid latar belakang khas developer */}
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

          <div className="flex items-center gap-x-6 mt-10">
            <Link
              href="#projects"
              className="px-5 py-3 text-sm font-semibold text-slate-900 transition-colors bg-cyan-500 rounded-md hover:bg-cyan-400 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              Lihat Technical Case Study
            </Link>
            <a
              href="https://github.com/NaldiRegar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-white transition-colors hover:text-cyan-400"
            >
              Kunjungi GitHub <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Tech Stack Section (Sekilas) */}
      <section className="py-12 border-y border-slate-800/50 bg-slate-900/50">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <p className="text-sm font-semibold tracking-wide text-center uppercase text-slate-500">
            Teknologi & Ekosistem Utama
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8 opacity-75">
            {/* Daftar stack sementara berbasis teks, nanti bisa diganti SVG icon */}
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
                className="text-xl font-bold tracking-tight text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
      {/* 3. Featured Projects Section */}
      <section id="projects" className="py-24 sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Technical Case Studies
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Bedah arsitektur dan dokumentasi teknis dari sistem yang pernah
              saya bangun.
            </p>
          </div>

          {/* Grid Kartu Proyek */}
          <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 auto-rows-fr sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="relative flex flex-col justify-between p-8 transition-colors border rounded-2xl bg-slate-900 border-slate-800 hover:border-cyan-500/50"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs">
                    {project.techStack.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="relative z-10 px-3 py-1.5 font-medium rounded-full bg-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="relative group">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white transition-colors group-hover:text-cyan-400">
                      <Link href={`/projects/${project.slug}`}>
                        <span className="absolute inset-0"></span>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 line-clamp-3 text-slate-400">
                      {project.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
