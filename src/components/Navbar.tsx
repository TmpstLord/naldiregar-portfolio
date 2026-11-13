"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Experience", href: "/#experience" },
    { name: "Case Studies", href: "/#projects" },
    { name: "GitHub", href: "https://github.com/TmpstLord", external: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-800/60">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Title: MasterOfTempest */}
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 font-extrabold text-white tracking-wider text-xl sm:text-2xl hover:opacity-90 transition-opacity group"
        >
          <span className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
            <Terminal className="w-5 h-5" />
          </span>
          <span>
            MasterOf<span className="text-cyan-400">Tempest</span>
          </span>
        </Link>

        {/* Menu Navigasi Desktop */}
        <nav className="hidden md:flex items-center gap-10 text-sm lg:text-base font-medium text-slate-300">
          {navLinks.map((item) =>
            item.external ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </Link>
            ),
          )}
        </nav>

        {/* Tombol CTA Desktop + Tombol Hamburger Mobile */}
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all"
          >
            Get in Touch
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800/80 bg-slate-950/95 px-6 py-4 space-y-3">
          {navLinks.map((item) =>
            item.external ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-slate-300 hover:text-cyan-400"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-slate-300 hover:text-cyan-400"
              >
                {item.name}
              </Link>
            ),
          )}
        </div>
      )}
    </header>
  );
}
