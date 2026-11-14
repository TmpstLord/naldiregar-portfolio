import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { featuredProjects } from "@/lib/data";
import HeroTitle from "@/components/HeroTitle";

export async function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found | MasterOfTempest" };
  }

  return {
    title: `${project.title} | MasterOfTempest`,
    description: project.description,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = featuredProjects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 pb-28 pt-32">
      <Link href="/#projects" className="mark text-lg">
        Kembali ke studi kasus teknis
      </Link>

      <article className="mt-14">
        <header className="pb-12">
          <p className="text-lg text-[var(--bolt)]">
            {project.role}
            <span className="text-[var(--rain)]"> — {project.timeline}</span>
          </p>

          <HeroTitle
            as="h1"
            lines={[project.title]}
            className="mt-4 text-[clamp(2.75rem,8vw,6rem)] leading-[0.95]"
          />

          <p className="mt-8 max-w-2xl text-xl leading-9 text-[var(--bone)]/85">
            {project.description}
          </p>

          <p className="mt-6 text-[var(--rain)]">
            <span className="text-[var(--bone)]">Teknologi:</span>{" "}
            {project.techStack.join(", ")}
          </p>

          {(project.githubUrl || project.liveUrl) && (
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 text-lg">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--bolt)] px-5 py-2.5 font-semibold text-[var(--squall)] transition-transform hover:-translate-y-0.5"
                >
                  Lihat repository GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mark"
                >
                  Kunjungi live demo
                </a>
              )}
            </div>
          )}
        </header>

        {project.coverImage && (
          <div className="relative aspect-video overflow-hidden border border-[var(--line)] bg-[var(--deck)]">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        )}

        {project.metrics && project.metrics.length > 0 && (
          <dl className="mt-14 grid gap-x-10 gap-y-8 border-y border-[var(--line)] py-10 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="text-sm text-[var(--rain)]">{metric.label}</dt>
                <dd className="display mt-1 text-4xl text-[var(--bolt)]">
                  {metric.value}
                </dd>
                <dd className="mt-1 text-sm text-[var(--rain)]">
                  {metric.note}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <section className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="display text-3xl">Tantangan dan permasalahan</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--bone)]/85">
              {project.problem}
            </p>
          </div>
          <div>
            <h2 className="display text-3xl">Solusi dan pendekatan teknis</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--bone)]/85">
              {project.solution}
            </p>
          </div>
        </section>

        <section className="mt-16 border-t border-[var(--line)] pt-12">
          <h2 className="display text-3xl sm:text-4xl">
            Arsitektur dan implementasi kunci
          </h2>
          <ul className="mt-8 space-y-5">
            {project.architectureHighlights.map((highlight, index) => (
              <li
                key={index}
                className="flex gap-4 text-lg leading-8 text-[var(--bone)]/85"
              >
                <span
                  aria-hidden
                  className="mt-3 h-2 w-2 shrink-0 rotate-45 bg-[var(--bolt)]"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        {project.gallery && project.gallery.length > 0 && (
          <section className="mt-16">
            <h2 className="display text-3xl sm:text-4xl">
              Dokumentasi dan tangkapan layar
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {project.gallery.map((item, idx) => (
                <figure key={idx}>
                  <div className="relative aspect-video overflow-hidden border border-[var(--line)] bg-[var(--deck)]">
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      sizes="(max-width: 640px) 100vw, 448px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm leading-6 text-[var(--rain)]">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <div className="mt-20 flex flex-wrap items-baseline justify-between gap-4 border-t border-[var(--line)] pt-8">
          <p className="text-lg text-[var(--bone)]/85">
            Tertarik membahas detail teknis atau arsitektur proyek ini?
          </p>
          <Link href="/#contact" className="mark text-lg">
            Hubungi saya
          </Link>
        </div>
      </article>
    </main>
  );
}
