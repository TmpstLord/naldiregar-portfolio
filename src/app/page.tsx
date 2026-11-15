import Link from "next/link";
import RevealHeading from "@/components/RevealHeading";
import ProjectSection from "@/components/ProjectSection";
import Experience from "@/components/Experience";
import FlowField from "@/components/FlowField";
import HeroTitle from "@/components/HeroTitle";
import HeroTagline from "@/components/HeroTagline";
import StackTree from "@/components/StackTree";
import ContactSection from "@/components/ContactSection";
import ProfilePhoto from "@/components/ProfilePhoto";
import { featuredProjects, experiences } from "@/lib/data";
import { getTopGithubRepos } from "@/lib/github";
import { ArrowUpRight } from "lucide-react";

export default async function Home() {
  const githubRepos = await getTopGithubRepos();

  return (
    <main className="min-h-screen bg-[var(--squall)] text-[var(--bone)]">
      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <FlowField />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-28 pt-40 lg:grid-cols-[1fr_280px] lg:items-end lg:pt-52">
          <div>
            <HeroTitle lines={["Raynaldi", "Irfansya", "Regar"]} />
            <HeroTagline
              text="Full-Stack Web & Game Backend Engineer"
              className="mt-8"
            />
            <p className="mt-6 max-w-xl text-xl leading-8 text-[var(--bone)]/85">
              Saya membangun sistem operasional dengan Laravel dan Express.js,
              lalu mengukur dan mengoptimalkan performa game di Unity DOTS dan
              Godot. Terbiasa merancang database transaksional dan integrasi
              API.
            </p>
            <p className="mt-4 text-[var(--rain)]">
              Sedang mencari peran Backend atau Full-stack.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-lg">
              <Link
                href="#projects"
                className="ui bg-[var(--bolt)] px-5 py-2.5 font-semibold text-[var(--squall)] transition-transform hover:-translate-y-0.5"
              >
                Lihat studi kasus
              </Link>
              <Link href="/resume" className="mark">
                Resume / CV
              </Link>
              <a
                href="https://github.com/TmpstLord"
                target="_blank"
                rel="noopener noreferrer"
                className="mark"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/raynaldi-irfansya-regar-91468944b"
                target="_blank"
                rel="noopener noreferrer"
                className="mark"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <ProfilePhoto />
        </div>
      </section>

      {/* Teknologi utama */}
      <StackTree />

      {/* Pengalaman */}
      <Experience items={experiences} />

      {/* Studi kasus */}
      <ProjectSection projects={featuredProjects} />

      {/* GitHub */}
      <section id="github" className="border-t border-[var(--line)] py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <RevealHeading className="text-5xl leading-none sm:text-6xl">
                Repositori terbaru
              </RevealHeading>
              <p className="mt-4 text-base text-[var(--rain)]">
                Kode sumber terbuka, eksperimen arsitektur, dan dokumentasi
                proyek di GitHub.
              </p>
            </div>
            <a
              href="https://github.com/TmpstLord?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="mark text-lg"
            >
              Semua repositori di GitHub
            </a>
          </div>

          {githubRepos.length > 0 ? (
            <ul className="mt-12 grid gap-5 md:grid-cols-2">
              {githubRepos.map((repo, idx) => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col justify-between border border-[var(--line)] bg-[var(--deck)]/55 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--bolt)]/75 hover:bg-[var(--deck)]"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-xs text-[var(--rain)]/70">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <h3 className="font-mono text-lg font-medium text-[var(--bone)] transition-colors group-hover:text-[var(--bolt)] sm:text-xl">
                            {repo.name}
                          </h3>
                        </div>
                        <ArrowUpRight
                          aria-hidden
                          className="h-5 w-5 shrink-0 text-[var(--rain)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--bolt)]"
                        />
                      </div>

                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--rain)]">
                        {repo.description || "Belum ada deskripsi."}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-[var(--line)]/60 pt-4 font-mono text-xs text-[var(--rain)]">
                      <span className="flex items-center gap-2">
                        <span
                          aria-hidden
                          className={`h-2 w-2 rounded-full ${
                            repo.language
                              ? "bg-[var(--bolt)]"
                              : "bg-[var(--rain)]/50"
                          }`}
                        />
                        <span>{repo.language || "Repository"}</span>
                      </span>

                      {repo.stargazers_count > 0 && (
                        <span className="text-[var(--bone)]">
                          ★ {repo.stargazers_count}
                        </span>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-12 border-t border-[var(--line)] py-6 text-[var(--rain)]">
              Belum ada repositori publik yang bisa ditampilkan.
            </p>
          )}
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
