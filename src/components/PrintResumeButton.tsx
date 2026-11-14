"use client";

import { Printer } from "lucide-react";

export default function PrintResumeButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer print:hidden"
    >
      <Printer className="w-4 h-4" />
      Print / Save as PDF
    </button>
  );
}
