import Link from "next/link";
import { featuredProjects } from "@/lib/data";
import { getTopGithubRepos } from "@/lib/github";

export default async function Home() {
  const githubRepos = await getTopGithubRepos();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      {/* 1. Hero Section */}
      <section className="relative px-6 pt-32 pb-20 mx-auto max-w-7xl lg:px-8 lg:pt-48">
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
              href="https://github.com/ImpostLord"
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

      {/* 4. Live GitHub Repositories Section */}
      <section className="py-24 border-t sm:py-32 border-slate-800/50 bg-slate-900/20">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Latest GitHub Repositories
            </h2>
            <a
              href="https://github.com/ImpostLord"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
            >
              Lihat semua di GitHub &rarr;
            </a>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-10 auto-rows-fr sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {githubRepos.length > 0 ? (
              githubRepos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-6 transition-colors border rounded-xl bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-slate-400 group-hover:text-white"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      {repo.language && (
                        <span className="text-xs font-medium text-cyan-400">
                          {repo.language}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400">
                      {repo.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 line-clamp-2 text-slate-400">
                      {repo.description ||
                        "Tidak ada deskripsi pada repository ini."}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-6 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      ⭐ {repo.stargazers_count}
                    </span>
                  </div>
                </a>
              ))
            ) : (
              <p className="text-slate-400">
                Sedang mengambil data repositori...
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
