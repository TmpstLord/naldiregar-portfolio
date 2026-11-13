import { notFound } from "next/navigation";
import { featuredProjects } from "@/lib/data";
import Link from "next/link";

// 1. Tambahkan "async" pada komponen dan ubah tipe params menjadi Promise
export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 2. Tunggu params terbaca sempurna (Wajib di Next.js 15+)
  const resolvedParams = await params;

  // 3. Sekarang slug sudah berisi "ocean-hero-benchmark"
  const project = featuredProjects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-24 mx-auto max-w-4xl lg:px-8 bg-slate-950 text-slate-200">
      <Link
        href="/#projects"
        className="inline-flex items-center text-sm font-semibold transition-colors text-cyan-500 hover:text-cyan-400"
      >
        <span aria-hidden="true" className="mr-2">
          ←
        </span>{" "}
        Kembali ke Beranda
      </Link>

      <article className="mt-12">
        <div className="flex flex-wrap gap-3 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-300">
          {project.description}
        </p>

        {/* Placeholder untuk Bedah Teknis Mendalam */}
        <div className="pt-10 mt-10 border-t border-slate-800">
          <h2 className="text-2xl font-semibold text-white">
            Arsitektur & Tantangan Teknis
          </h2>
          <div className="p-6 mt-6 rounded-xl bg-slate-900 border border-slate-800">
            <p className="text-slate-400">
              Area ini sedang disiapkan. Nantinya akan diisi dengan bedah kode
              mendalam, alasan pemilihan arsitektur, diagram skema database, dan
              komparasi metrik performa.
            </p>
          </div>

          {project.githubUrl && (
            <div className="mt-8">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3 text-sm font-semibold transition-colors rounded-md text-slate-900 bg-cyan-500 hover:bg-cyan-400"
              >
                Lihat Source Code di GitHub
              </a>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
