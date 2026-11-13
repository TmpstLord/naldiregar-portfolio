import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-slate-950 text-slate-200">
      <div className="max-w-md w-full text-center p-8 rounded-2xl border border-slate-800 bg-slate-900/50">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-6">
          <Terminal className="w-6 h-6" />
        </div>

        <p className="text-sm font-mono font-semibold text-cyan-400">
          ERROR 404 // ROUTE_NOT_FOUND
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mt-4 text-sm leading-6 text-slate-400">
          Endpoint atau halaman yang kamu tuju tidak tersedia atau sudah
          dipindahkan.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
