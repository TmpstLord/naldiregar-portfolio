import type { Metadata } from "next";
import Link from "next/link";
import PrintResumeButton from "@/components/PrintResumeButton";

export const metadata: Metadata = {
  title: "Resume / CV | Raynaldi Irfansya Regar (MasterOfTempest)",
  description:
    "Curriculum Vitae Raynaldi Irfansya Regar — Full-Stack Web & Game Backend Engineer.",
};

const skills = [
  {
    title: "Backend & Web Development",
    text: "PHP, Laravel, Node.js, Express.js, TypeScript, Next.js, RESTful API, Zod Validation",
  },
  {
    title: "Database & Cloud Services",
    text: "MySQL (Relational Modeling & Indexing), Firebase Firestore, Cloud Data Sync",
  },
  {
    title: "Game Systems & Performance",
    text: "Unity DOTS / ECS (C#), Godot Engine (GDScript), State Architecture, Mobile Profiling",
  },
  {
    title: "Tools & Engineering Workflow",
    text: "Git, GitHub, Vercel CI/CD, VS Code, Unity Profiler, QGIS",
  },
];

const projects = [
  {
    title:
      "Ocean Hero Performance Benchmark (Unity DOTS/ECS vs. MonoBehaviour OOP)",
    meta: "2026 • Riset Skripsi",
    text: "Evaluasi empiris perbandingan efisiensi memori, garbage collection, dan stabilitas frame rate (FPS) antara arsitektur ECS dan OOP pada game mobile 2D menggunakan pengujian langsung di perangkat Android.",
  },
  {
    title: "RUSDI — Digital Waste Bank Platform",
    meta: "2024 • Node.js, Express, Firebase, MySQL",
    text: "Platform bank sampah digital end-to-end untuk pencatatan transaksi setoran, konversi saldo nasabah, dan dashboard pelaporan operasional. Lolos hingga Final Nasional Abdidaya PPK Ormawa 2024.",
  },
  {
    title: "2D Educational Game Systems & Backend Architecture",
    meta: "2026 • Godot Engine & GDScript",
    text: "Pengembangan arsitektur Global State Manager terpusat, sistem timer misi multi-region, mekanik minigame, serta integrasi backend API.",
  },
];

const h2Class = "display text-3xl sm:text-4xl print:text-2xl print:text-black";
const bodyClass = "text-[var(--bone)]/85 print:text-neutral-800";
const mutedClass = "text-[var(--rain)] print:text-neutral-600";

export default function ResumePage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 pb-28 pt-32 print:max-w-none print:bg-white print:px-4 print:pb-4 print:pt-4 print:text-neutral-900">
      {/* Bar navigasi dan tombol print (disembunyikan saat dicetak) */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link href="/" className="mark text-lg">
          Kembali ke beranda
        </Link>
        <PrintResumeButton />
      </div>

      <article className="space-y-14 print:space-y-6">
        {/* Identitas */}
        <header className="border-b border-[var(--line)] pb-10 print:border-neutral-300 print:pb-5">
          <h1 className="display text-5xl leading-[0.95] sm:text-7xl print:text-4xl print:text-black">
            Raynaldi Irfansya Regar, S.Kom
          </h1>
          <p className="mt-3 text-xl text-[var(--rain)] print:text-neutral-700">
            Full-Stack Web & Game Backend Engineer
          </p>

          <p className={`mt-6 flex flex-wrap gap-x-8 gap-y-2 ${mutedClass}`}>
            <span>Manado, Sulawesi Utara (Open to Relocation / Remote)</span>
            <a
              href="mailto:irfanregar33@gmail.com"
              className="mark print:no-underline"
            >
              irfanregar33@gmail.com
            </a>
            <a
              href="https://github.com/TmpstLord"
              target="_blank"
              rel="noopener noreferrer"
              className="mark print:no-underline"
            >
              github.com/TmpstLord
            </a>
          </p>

          <p className={`mt-6 max-w-3xl text-lg leading-8 ${bodyClass}`}>
            Lulusan Sistem Informasi (Cum Laude, IPK 3.85/4.00) dengan fokus
            pada perancangan arsitektur backend, RESTful API, manajemen database
            relasional maupun cloud, serta optimasi performa sistem game
            berbasis data-oriented (Unity DOTS/ECS) dan Godot Engine.
          </p>
        </header>

        {/* Keahlian teknis */}
        <section>
          <h2 className={h2Class}>Keahlian teknis</h2>
          <dl className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2 print:gap-y-3">
            {skills.map((s) => (
              <div key={s.title}>
                <dt className="font-semibold text-[var(--rain)] print:text-black">
                  {s.title}
                </dt>
                <dd className={`mt-1 ${bodyClass}`}>{s.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Pengalaman */}
        <section>
          <h2 className={h2Class}>Pengalaman dan organisasi</h2>
          <div className="mt-6 space-y-8 print:space-y-4">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold print:text-black">
                  Backend Web Developer Intern (PKL) — PT Media Makasiow
                </h3>
                <span className={mutedClass}>2024</span>
              </div>
              <ul
                className={`mt-3 ml-5 list-disc space-y-2 leading-7 ${bodyClass}`}
              >
                <li>
                  Merancang skema database relasional MySQL dan membangun
                  layanan RESTful API berbasis Laravel untuk portal pariwisata
                  regional <strong>Visit Suluttenggo</strong>.
                </li>
                <li>
                  Mengimplementasikan validasi request server-side dan
                  standardisasi struktur JSON response untuk integrasi antarmuka
                  frontend.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold print:text-black">
                  Pengurus & Koordinator Kepanitiaan — HIMSIFOR Unsrat
                </h3>
                <span className={mutedClass}>Universitas Sam Ratulangi</span>
              </div>
              <p className={`mt-3 leading-7 ${bodyClass}`}>
                Berperan aktif dalam Himpunan Mahasiswa Sistem Informasi serta
                mengoordinasikan teknis pelaksanaan kegiatan akademik dan
                kemahasiswaan tingkat fakultas.
              </p>
            </div>
          </div>
        </section>

        {/* Proyek */}
        <section>
          <h2 className={h2Class}>Proyek dan riset teknis utama</h2>
          <div className="mt-6 space-y-8 print:space-y-4">
            {projects.map((p) => (
              <div key={p.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold print:text-black">
                    {p.title}
                  </h3>
                  <span className="text-[var(--rain)] print:text-neutral-600">
                    {p.meta}
                  </span>
                </div>
                <p className={`mt-2 leading-7 ${bodyClass}`}>{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pendidikan */}
        <section>
          <h2 className={h2Class}>Pendidikan</h2>
          <div className="mt-6 flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 className="text-xl font-semibold print:text-black">
                Universitas Sam Ratulangi (Unsrat), Manado
              </h3>
              <p className={bodyClass}>
                Sarjana Komputer (S.Kom) — Program Studi Sistem Informasi, FMIPA
              </p>
            </div>
            <span className="font-semibold text-[var(--rain)] print:text-neutral-800">
              IPK 3.85 / 4.00 (Cum Laude) • 2026
            </span>
          </div>
        </section>

        {/* Sertifikasi dan prestasi */}
        <section>
          <h2 className={h2Class}>Sertifikasi dan prestasi</h2>
          <ul
            className={`mt-6 ml-5 list-disc space-y-2 leading-7 ${bodyClass}`}
          >
            <li>
              <strong>
                Sertifikasi Kompetensi Nasional Junior Web Developer (JWD)
              </strong>{" "}
              — Badan Nasional Sertifikasi Profesi (BNSP).
            </li>
            <li>
              <strong>Finalis Nasional Abdidaya PPK Ormawa 2024</strong> — Tim
              Digital Waste Bank RUSDI (Bali).
            </li>
            <li>
              <strong>Juara 1 Tingkat Universitas — LIDM 2024</strong> (Divisi
              Inovasi Teknologi Digital Pendidikan / ITDP) melalui aplikasi
              pembelajaran <em>SiPanca</em>.
            </li>
            <li>
              <strong>Juara 4 Tingkat Universitas — Gemastik 2024</strong>{" "}
              (Divisi Rekayasa Perangkat Lunak) melalui proyek <em>SIP5</em>.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
