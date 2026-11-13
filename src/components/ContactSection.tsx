"use client";

import { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";

// Ganti dengan alamat email aktif yang kamu gunakan untuk melamar kerja
const CONTACT_EMAIL = "emailkamu@gmail.com";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Gagal menyalin email:", err);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-800/50">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="relative overflow-hidden p-8 sm:p-12 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/30">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Open to Opportunities
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tertarik Berkolaborasi atau Rekrutmen?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Saya terbuka untuk posisi <strong>Backend Engineer</strong>,{" "}
              <strong>Full-Stack Web Developer</strong>, maupun{" "}
              <strong>Game Systems Developer</strong>. Silakan salin email di
              bawah atau hubungi saya lewat GitHub.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              {/* Tombol Salin Email */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-semibold rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Email Tersalin!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Salin Email ({CONTACT_EMAIL})
                  </>
                )}
              </button>

              {/* Tombol Kirim Email Langsung */}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl border border-slate-700 bg-slate-950/60 text-slate-200 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Buka Aplikasi Email
              </a>

              {/* Tautan GitHub */}
              <a
                href="https://github.com/TmpstLord"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                GitHub @TmpstLord
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
