import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { featuredProjects } from "@/lib/data";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  AlertCircle,
  Layers,
  Calendar,
  UserCheck,
} from "lucide-react";

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
    return {
      title: "Project Not Found | MasterOfTempest",
    };
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
    <main className="min-h-screen px-6 pt-28 pb-24 mx-auto max-w-4xl lg:px-8 bg-slate-950 text-slate-200">
      {/* Navigasi Kembali */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors text-cyan-400 hover:text-cyan-300"
      >
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Technical Case Studies
      </Link>

      <article className="mt-10">
        {/* Header Studi Kasus */}
        <header className="pb-10 border-b border-slate-800/80">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-4">
            <span className="inline-flex items-center gap-1.5 text-cyan-400">
              <UserCheck className="w-3.5 h-3.5" />
              {project.role}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {project.timeline}
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
            {project.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {project.description}
          </p>

          {/* Badge Tech Stack */}
          <div className="flex flex-wrap gap-2.5 mt-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1 text-xs font-semibold rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Tombol Tautan Eksternal */}
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-wrap items-center gap-4 mt-8">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition-all rounded-xl text-slate-950 bg-cyan-500 hover:bg-cyan-400 shadow-lg shadow-cyan-500/20"
                >
                  Lihat Repository GitHub
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition-colors rounded-xl border border-slate-700 bg-slate-900 text-white hover:border-cyan-500/50 hover:text-cyan-400"
                >
                  Kunjungi Live Demo
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </header>

        {/* Gambar Utama Proyek (Muncul otomatis jika coverImage diisi di data.ts) */}
        {project.coverImage && (
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 aspect-video shadow-2xl">
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

        {/* Ringkasan Metrik / Fokus Teknis */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-5 rounded-2xl border border-slate-800/90 bg-slate-900/50"
              >
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {metric.label}
                </p>
                <p className="mt-1.5 text-xl font-extrabold text-cyan-400">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs text-slate-400">{metric.note}</p>
              </div>
            ))}
          </section>
        )}

        {/* Problem & Solution */}
        <section className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2">
          <div className="p-6 sm:p-7 rounded-2xl border border-slate-800 bg-slate-900/40">
            <div className="inline-flex items-center gap-2 text-sm font-bold text-rose-400 mb-3">
              <AlertCircle className="w-4 h-4" />
              Tantangan & Permasalahan
            </div>
            <p className="text-sm leading-7 text-slate-300">
              {project.problem}
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl border border-cyan-500/20 bg-cyan-950/10">
            <div className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 mb-3">
              <CheckCircle2 className="w-4 h-4" />
              Solusi & Pendekatan Teknis
            </div>
            <p className="text-sm leading-7 text-slate-300">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Architecture Highlights */}
        <section className="p-6 sm:p-8 mt-8 rounded-2xl border border-slate-800 bg-slate-900/60">
          <h2 className="flex items-center gap-2.5 text-xl font-bold text-white">
            <Cpu className="w-5 h-5 text-cyan-400" />
            Arsitektur & Implementasi Kunci
          </h2>
          <ul className="mt-5 space-y-3.5">
            {project.architectureHighlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm leading-6 text-slate-300"
              >
                <Layers className="w-4 h-4 mt-1 shrink-0 text-cyan-400" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Galeri Dokumentasi & Screenshot (Muncul otomatis jika gallery diisi di data.ts) */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mt-10 space-y-5">
            <h2 className="text-xl font-bold text-white">
              Dokumentasi & Tangkapan Layar
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {project.gallery.map((item, idx) => (
                <figure
                  key={idx}
                  className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      sizes="(max-width: 640px) 100vw, 448px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-4 text-xs leading-5 text-slate-400">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Footer CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 mt-12 rounded-2xl border border-slate-800 bg-slate-900/40">
          <p className="text-sm text-slate-300">
            Tertarik membahas detail teknis atau arsitektur proyek ini?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 shrink-0"
          >
            Hubungi Saya
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </main>
  );
}
