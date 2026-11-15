"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import type { ContactMessageInput } from "@/lib/validations";

// Ganti dengan alamat email aktif yang kamu gunakan untuk melamar kerja
const CONTACT_EMAIL = "emailkamu@gmail.com";

type FieldErrors = Partial<Record<keyof ContactMessageInput, string[]>>;

const inputClass =
  "w-full border-0 border-b border-[var(--line)] bg-transparent px-0 py-3 text-lg text-[var(--bone)] placeholder:text-[var(--rain)]/60 transition-colors focus:border-[var(--bolt)] focus:outline-none";
const labelClass = "block text-sm text-[var(--rain)]";
const errorClass = "mt-2 text-sm text-[#ff9d8a]";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
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
        if (data.errors) setFieldErrors(data.errors);
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
    <section
      id="contact"
      className="border-t border-[var(--line)] bg-[var(--deck)] py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[2fr_3fr]">
        {/* Kiri: ajakan dan kontak langsung */}
        <div>
          <h2 className="display text-5xl leading-none sm:text-6xl">
            Tertarik berkolaborasi atau rekrutmen?
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-[var(--bone)]/85">
            Saya terbuka untuk posisi Backend Engineer, Full-Stack Web
            Developer, maupun Game Systems Developer. Kirim pesan lewat
            formulir, atau hubungi langsung lewat email.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 text-lg">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="mark cursor-pointer"
            >
              {copied ? "Email tersalin" : `Salin ${CONTACT_EMAIL}`}
            </button>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mark">
              Buka aplikasi email
            </a>
          </div>

          <p className="mt-10 text-[var(--rain)]">
            Atau lihat kode saya di{" "}
            <a
              href="https://github.com/TmpstLord"
              target="_blank"
              rel="noopener noreferrer"
              className="mark"
            >
              GitHub @TmpstLord
            </a>
          </p>
        </div>

        {/* Kanan: formulir */}
        <form onSubmit={handleSubmit} noValidate className="space-y-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
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
                className={inputClass}
              />
              {fieldErrors.name?.[0] && (
                <p className={errorClass}>{fieldErrors.name[0]}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
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
                className={inputClass}
              />
              {fieldErrors.email?.[0] && (
                <p className={errorClass}>{fieldErrors.email[0]}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className={labelClass}>
              Subjek
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Contoh: Tawaran interview Backend Developer"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className={inputClass}
            />
            {fieldErrors.subject?.[0] && (
              <p className={errorClass}>{fieldErrors.subject[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Pesan
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tuliskan detail proyek, posisi yang ditawarkan, atau pertanyaan"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`${inputClass} resize-none`}
            />
            {fieldErrors.message?.[0] && (
              <p className={errorClass}>{fieldErrors.message[0]}</p>
            )}
          </div>

          {submitStatus && (
            <p
              role="status"
              className={`border-l-2 py-1 pl-4 ${
                submitStatus.type === "success"
                  ? "border-[#8fd3a8] text-[#8fd3a8]"
                  : "border-[#ff9d8a] text-[#ff9d8a]"
              }`}
            >
              {submitStatus.text}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="ui inline-flex cursor-pointer items-center gap-2 bg-[var(--bolt)] px-6 py-3 text-lg font-semibold text-[var(--squall)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Mengirim...
              </>
            ) : (
              "Kirim pesan"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
