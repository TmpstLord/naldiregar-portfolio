import type { Metadata } from "next";
import Link from "next/link";
import PrintResumeButton from "@/components/PrintResumeButton";
import {
  ArrowLeft,
  Mail,
  MapPin,
  Globe,
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  FolderGit2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resume / CV | Raynaldi Irfansya Regar (MasterOfTempest)",
  description:
    "Curriculum Vitae Raynaldi Irfansya Regar — Full-Stack Web & Game Backend Engineer.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen px-6 pt-28 pb-24 mx-auto max-w-4xl lg:px-8 bg-slate-950 text-slate-200 print:bg-white print:text-slate-900 print:pt-4 print:pb-4 print:px-4">
      {/* Bar Navigasi & Tombol Print (Disembunyikan saat dicetak) */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors text-slate-400 hover:text-cyan-400"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </Link>

        <PrintResumeButton />
      </div>

      {/* Lembar Dokumen CV */}
      <article className="p-8 sm:p-12 rounded-3xl border border-slate-800 bg-slate-900/50 space-y-10 print:border-none print:bg-white print:p-0 print:space-y-6">
        {/* Header Identitas */}
        <header className="pb-8 border-b border-slate-800 print:border-slate-300 print:pb-5">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl print:text-slate-950">
                Raynaldi Irfansya Regar, S.Kom
              </h1>
              <p className="mt-1.5 text-lg font-semibold text-cyan-400 print:text-slate-700">
                Full-Stack Web & Game Backend Engineer
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 w-fit print:hidden">
              @MasterOfTempest
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-5 text-xs sm:text-sm text-slate-400 print:text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400 print:text-slate-700" />
              Manado, Sulawesi Utara (Open to Relocation / Remote)
            </span>
            <a
              href="mailto:irfanregar33@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-cyan-400 print:text-slate-700"
            >
              <Mail className="w-4 h-4 text-cyan-400 print:text-slate-700" />
              irfanregar33@gmail.com
            </a>
            <a
              href="https://github.com/TmpstLord"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-cyan-400 print:text-slate-700"
            >
              <Globe className="w-4 h-4 text-cyan-400 print:text-slate-700" />
              github.com/TmpstLord
            </a>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-300 print:text-slate-700">
            Lulusan Sistem Informasi (Cum Laude, IPK 3.85/4.00) dengan fokus
            pada perancangan arsitektur backend, RESTful API, manajemen database
            relasional maupun cloud, serta optimasi performa sistem game
            berbasis data-oriented (Unity DOTS/ECS) dan Godot Engine.
          </p>
        </header>

        {/* 1. Technical Skills */}
        <section>
          <h2 className="flex items-center gap-2 text-base font-bold uppercase tracking-wider text-white print:text-slate-950">
            <Code2 className="w-4 h-4 text-cyan-400 print:text-slate-800" />
            Keahlian Teknis
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 text-sm">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 print:bg-slate-50 print:border-slate-200">
              <p className="font-semibold text-cyan-400 print:text-slate-900">
                Backend & Web Development
              </p>
              <p className="mt-1 text-slate-300 print:text-slate-700">
                PHP, Laravel, Node.js, Express.js, TypeScript, Next.js, RESTful
                API, Zod Validation
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 print:bg-slate-50 print:border-slate-200">
              <p className="font-semibold text-cyan-400 print:text-slate-900">
                Database & Cloud Services
              </p>
              <p className="mt-1 text-slate-300 print:text-slate-700">
                MySQL (Relational Modeling & Indexing), Firebase Firestore,
                Cloud Data Sync
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 print:bg-slate-50 print:border-slate-200">
              <p className="font-semibold text-cyan-400 print:text-slate-900">
                Game Systems & Performance
              </p>
              <p className="mt-1 text-slate-300 print:text-slate-700">
                Unity DOTS / ECS (C#), Godot Engine (GDScript), State
                Architecture, Mobile Profiling
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 print:bg-slate-50 print:border-slate-200">
              <p className="font-semibold text-cyan-400 print:text-slate-900">
                Tools & Engineering Workflow
              </p>
              <p className="mt-1 text-slate-300 print:text-slate-700">
                Git, GitHub, Vercel CI/CD, VS Code, Unity Profiler, QGIS
              </p>
            </div>
          </div>
        </section>

        {/* 2. Experience */}
        <section>
          <h2 className="flex items-center gap-2 text-base font-bold uppercase tracking-wider text-white print:text-slate-950">
            <Briefcase className="w-4 h-4 text-cyan-400 print:text-slate-800" />
            Pengalaman & Organisasi
          </h2>
          <div className="mt-4 space-y-5">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-bold text-white print:text-slate-950">
                  Backend Web Developer Intern (PKL) — PT Media Makasiow
                </h3>
                <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                  2024
                </span>
              </div>
              <ul className="mt-2 ml-4 space-y-1.5 text-sm list-disc text-slate-300 print:text-slate-700">
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
                <h3 className="text-base font-bold text-white print:text-slate-950">
                  Pengurus & Koordinator Kepanitiaan — HIMSIFOR Unsrat
                </h3>
                <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                  Universitas Sam Ratulangi
                </span>
              </div>
              <p className="mt-1.5 text-sm text-slate-300 print:text-slate-700">
                Berperan aktif dalam Himpunan Mahasiswa Sistem Informasi serta
                mengoordinasikan teknis pelaksanaan kegiatan akademik dan
                kemahasiswaan tingkat fakultas.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Selected Engineering Projects */}
        <section>
          <h2 className="flex items-center gap-2 text-base font-bold uppercase tracking-wider text-white print:text-slate-950">
            <FolderGit2 className="w-4 h-4 text-cyan-400 print:text-slate-800" />
            Proyek & Riset Teknis Utama
          </h2>
          <div className="mt-4 space-y-4 text-sm">
            <div>
              <div className="flex flex-wrap justify-between gap-2">
                <h3 className="font-bold text-white print:text-slate-950">
                  Ocean Hero Performance Benchmark (Unity DOTS/ECS vs.
                  MonoBehaviour OOP)
                </h3>
                <span className="text-xs font-mono text-cyan-400 print:text-slate-600">
                  2026 • Riset Skripsi
                </span>
              </div>
              <p className="mt-1 text-slate-300 print:text-slate-700">
                Evaluasi empiris perbandingan efisiensi memori, garbage
                collection, dan stabilitas frame rate (FPS) antara arsitektur
                ECS dan OOP pada game mobile 2D menggunakan pengujian langsung
                di perangkat Android.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap justify-between gap-2">
                <h3 className="font-bold text-white print:text-slate-950">
                  RUSDI — Digital Waste Bank Platform
                </h3>
                <span className="text-xs font-mono text-cyan-400 print:text-slate-600">
                  2024 • Node.js, Express, Firebase, MySQL
                </span>
              </div>
              <p className="mt-1 text-slate-300 print:text-slate-700">
                Platform bank sampah digital end-to-end untuk pencatatan
                transaksi setoran, konversi saldo nasabah, dan dashboard
                pelaporan operasional. Lolos hingga Final Nasional Abdidaya PPK
                Ormawa 2024.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap justify-between gap-2">
                <h3 className="font-bold text-white print:text-slate-950">
                  2D Educational Game Systems & Backend Architecture
                </h3>
                <span className="text-xs font-mono text-cyan-400 print:text-slate-600">
                  2026 • Godot Engine & GDScript
                </span>
              </div>
              <p className="mt-1 text-slate-300 print:text-slate-700">
                Pengembangan arsitektur Global State Manager terpusat, sistem
                timer misi multi-region, mekanik minigame, serta integrasi
                backend API.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Education */}
        <section>
          <h2 className="flex items-center gap-2 text-base font-bold uppercase tracking-wider text-white print:text-slate-950">
            <GraduationCap className="w-4 h-4 text-cyan-400 print:text-slate-800" />
            Pendidikan
          </h2>
          <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2 text-sm">
            <div>
              <h3 className="font-bold text-white print:text-slate-950">
                Universitas Sam Ratulangi (Unsrat), Manado
              </h3>
              <p className="text-slate-300 print:text-slate-700">
                Sarjana Komputer (S.Kom) — Program Studi Sistem Informasi, FMIPA
              </p>
            </div>
            <span className="font-semibold text-cyan-400 print:text-slate-800">
              IPK 3.85 / 4.00 (Cum Laude) • 2026
            </span>
          </div>
        </section>

        {/* 5. Certifications & Achievements */}
        <section>
          <h2 className="flex items-center gap-2 text-base font-bold uppercase tracking-wider text-white print:text-slate-950">
            <Award className="w-4 h-4 text-cyan-400 print:text-slate-800" />
            Sertifikasi & Prestasi
          </h2>
          <ul className="mt-3 ml-4 space-y-1.5 text-sm list-disc text-slate-300 print:text-slate-700">
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
