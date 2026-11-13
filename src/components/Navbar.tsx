import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Nama Brand */}
        <Link
          href="/"
          className="font-bold text-white tracking-tight text-lg hover:text-cyan-400 transition-colors"
        >
          Naldi<span className="text-cyan-500">-Regar</span>
        </Link>

        {/* Menu Navigasi */}
        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link
            href="/#projects"
            className="hover:text-cyan-400 transition-colors"
          >
            Case Studies
          </Link>
          <Link
            href="https://github.com/TmpstLord"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </Link>
        </nav>

        {/* Tombol Kontak / Hire */}
        <div>
          <a
            href="mailto:emailkamu@example.com"
            className="px-4 py-2 text-xs font-semibold rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
