"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import type { ContactMessageInput } from "@/lib/validations";

// Ganti dengan alamat email aktif yang kamu gunakan untuk melamar kerja
const CONTACT_EMAIL = "emailkamu@gmail.com";

type FieldErrors = Partial<Record<keyof ContactMessageInput, string[]>>;

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  // State form kontak
  const [formData, setFormData] = useState<ContactMessageInput>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Gagal menyalin email:", err);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFieldErrors({});
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setFieldErrors(data.errors);
        }
        setSubmitStatus({
          type: "error",
          text: data.message || "Periksa kembali isian formulir.",
        });
        return;
      }

      setSubmitStatus({
        type: "success",
        text: data.message || "Pesan berhasil dikirim!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus({
        type: "error",
        text: "Gagal terhubung ke server. Silakan coba lagi.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-800/50">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="relative overflow-hidden p-8 sm:p-12 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/95 to-cyan-950/30">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Kolom Kiri: Info Kontak & Salin Email */}
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Open to Opportunities
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Tertarik Berkolaborasi atau Rekrutmen?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Terbuka untuk posisi <strong>Backend Engineer</strong>,{" "}
                <strong>Full-Stack Web Developer</strong>, maupun{" "}
                <strong>Game Systems Developer</strong>. Kirim pesan langsung
                lewat formulir di samping atau salin email di bawah.
              </p>

              <div className="flex flex-col gap-3 mt-8 sm:flex-row lg:flex-col">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-semibold rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
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

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl border border-slate-700 bg-slate-950/60 text-slate-200 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Buka Aplikasi Email
                </a>
              </div>

              <div className="pt-6 mt-8 border-t border-slate-800/80">
                <a
                  href="https://github.com/TmpstLord"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  GitHub @TmpstLord
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Kolom Kanan: Form Pesan Tervalidasi */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="p-6 sm:p-8 rounded-2xl border border-slate-800/90 bg-slate-950/75 space-y-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Input Nama */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
                    >
                      Nama
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Nama Anda / Perusahaan"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                    {fieldErrors.name?.[0] && (
                      <p className="mt-1.5 text-xs text-rose-400">
                        {fieldErrors.name[0]}
                      </p>
                    )}
                  </div>

                  {/* Input Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="nama@perusahaan.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                    {fieldErrors.email?.[0] && (
                      <p className="mt-1.5 text-xs text-rose-400">
                        {fieldErrors.email[0]}
                      </p>
                    )}
                  </div>
                </div>

                {/* Input Subjek */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
                  >
                    Subjek
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Contoh: Tawaran Interview Backend Developer"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  {fieldErrors.subject?.[0] && (
                    <p className="mt-1.5 text-xs text-rose-400">
                      {fieldErrors.subject[0]}
                    </p>
                  )}
                </div>

                {/* Input Pesan */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tuliskan detail proyek, posisi yang ditawarkan, atau pertanyaan..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                  {fieldErrors.message?.[0] && (
                    <p className="mt-1.5 text-xs text-rose-400">
                      {fieldErrors.message[0]}
                    </p>
                  )}
                </div>

                {/* Banner Status Response */}
                {submitStatus && (
                  <div
                    className={`flex items-center gap-2.5 p-3.5 text-xs font-medium rounded-xl border ${
                      submitStatus.type === "success"
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                        : "bg-rose-500/10 border-rose-500/30 text-rose-400"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0" />
                    )}
                    <span>{submitStatus.text}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
