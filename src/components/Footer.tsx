export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950 py-12 text-slate-400 text-sm print:hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          © 2026 Raynaldi Irfansya Regar. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/TmpstLord"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
