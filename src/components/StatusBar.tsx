"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { GitBranch } from "lucide-react";

const HOME_SECTIONS = [
  { id: "top", file: "index.tsx" },
  { id: "experience", file: "experience.tsx" },
  { id: "projects", file: "case-studies.tsx" },
  { id: "github", file: "repositories.tsx" },
  { id: "contact", file: "contact.tsx" },
];

const SEGMENTS = 10;

/**
 * Status bar tipis ala editor kode di dasar layar.
 * Menampilkan "file" yang sedang dibuka (section aktif), posisi scroll sebagai nomor baris,
 * bar progres bersegmen, dan tombol untuk membuka Inspector.
 */
export default function StatusBar() {
  const pathname = usePathname();
  const [section, setSection] = useState(HOME_SECTIONS[0].file);
  const [line, setLine] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (pathname !== "/") return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setLine(Math.floor(y / 20) + 1);
      setProgress(max > 0 ? Math.min(1, y / max) : 0);

      let current = HOME_SECTIONS[0].file;
      for (const s of HOME_SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4)
          current = s.file;
      }
      setSection(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  // Di halaman selain beranda, nama "file" mengikuti rute
  const file =
    pathname === "/"
      ? section
      : pathname.startsWith("/projects/")
        ? `projects/${pathname.split("/")[2]}.tsx`
        : `${pathname.slice(1)}.tsx`;

  const filled = Math.ceil(progress * SEGMENTS);

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex h-8 items-center justify-between gap-4 border-t border-[var(--line)] bg-[var(--deck)] px-4 font-mono text-[13px] text-[var(--rain)] print:hidden">
      <div className="flex min-w-0 items-center gap-4">
        <span className="flex items-center gap-1.5">
          <GitBranch className="h-3.5 w-3.5" aria-hidden />
          main
        </span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={file}
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="truncate text-[var(--bone)]"
          >
            {file}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-4">
        {pathname === "/" && (
          <span
            className="flex gap-[3px]"
            role="img"
            aria-label={`Posisi halaman ${Math.round(progress * 100)} persen`}
          >
            {Array.from({ length: SEGMENTS }, (_, i) => (
              <span
                key={i}
                className={`h-2 w-1.5 ${i < filled ? "bg-[var(--bolt)]" : "bg-[var(--line)]"}`}
              />
            ))}
          </span>
        )}
        {pathname === "/" && (
          <span className="hidden tabular-nums sm:inline">
            Ln {line}, Col 1
          </span>
        )}
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event("inspector:toggle"))}
          className="cursor-pointer text-[var(--bone)] transition-colors hover:text-[var(--bolt)]"
        >
          Inspector
        </button>
      </div>
    </div>
  );
}
