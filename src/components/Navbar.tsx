"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Experience", href: "/#experience" },
  { name: "Case Studies", href: "/#projects" },
  { name: "Resume", href: "/resume" },
  { name: "GitHub", href: "https://github.com/TmpstLord", external: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 160 && !open);
  });

  const renderLink = (
    item: (typeof navLinks)[number],
    className: string,
    onClick?: () => void,
  ) =>
    item.external ? (
      <a
        key={item.name}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={className}
      >
        {item.name}
      </a>
    ) : (
      <Link
        key={item.name}
        href={item.href}
        onClick={onClick}
        className={className}
      >
        {item.name}
      </Link>
    );

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[rgb(16_28_38/0.85)] backdrop-blur-md print:hidden"
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="display flex items-center gap-3 text-2xl tracking-wide sm:text-3xl"
        >
          <span
            aria-hidden
            className="h-2.5 w-2.5 shrink-0 rotate-45 bg-[var(--bolt)]"
          />
          <span>
            Tempest<span className="text-[var(--bolt)]"></span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 text-lg md:flex">
          {navLinks.map((item) => renderLink(item, "mark"))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="bg-[var(--bolt)] px-4 py-2 text-sm font-semibold text-[var(--squall)] transition-transform hover:-translate-y-0.5 sm:text-base"
          >
            Get in Touch
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="p-2 text-[var(--rain)] transition-colors hover:text-[var(--bone)] md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[var(--line)] md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((item) =>
                renderLink(item, "display py-2 text-3xl", () => setOpen(false)),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute inset-x-0 -bottom-px h-px origin-left bg-[var(--bolt)]"
      />
    </motion.header>
  );
}
