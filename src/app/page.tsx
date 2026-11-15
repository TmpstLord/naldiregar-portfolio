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
            <RevealHeading className="text-5xl leading-none sm:text-6xl">
              Repositori terbaru
            </RevealHeading>
            <a
              href="https://github.com/TmpstLord"
              target="_blank"
              rel="noopener noreferrer"
              className="mark text-lg"
            >
              Semua repositori di GitHub
            </a>
          </div>

          <ul className="mt-12 border-t border-[var(--line)]">
            {githubRepos.length > 0 ? (
              githubRepos.map((repo) => (
                <li key={repo.id} className="border-b border-[var(--line)]">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid gap-2 py-6 md:grid-cols-[1.2fr_2fr_auto] md:items-baseline md:gap-8"
                  >
                    <span className="display text-2xl sm:text-3xl">
                      <span className="mark">{repo.name}</span>
                    </span>
                    <span className="text-[var(--rain)]">
                      {repo.description || "Belum ada deskripsi."}
                    </span>
                    <span className="text-sm text-[var(--rain)]">
                      {repo.language ? `${repo.language}, ` : ""}
                      {repo.stargazers_count} bintang
                    </span>
                  </a>
                </li>
              ))
            ) : (
              <li className="py-6 text-[var(--rain)]">
                Belum ada repositori publik yang bisa ditampilkan.
              </li>
            )}
          </ul>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
