export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-10 text-sm text-[var(--rain)] print:hidden">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p>
          © 2026 Raynaldi Irfansya Regar. Dibuat dengan Next.js dan Tailwind
          CSS.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/TmpstLord"
            target="_blank"
            rel="noopener noreferrer"
            className="mark"
          >
            GitHub
          </a>
          {/* Ganti dengan URL profil LinkedIn kamu */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mark"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
