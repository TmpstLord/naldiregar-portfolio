"use client";

import { Printer } from "lucide-react";

export default function PrintResumeButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex cursor-pointer items-center gap-2 bg-[var(--bolt,#facc15)] px-5 py-2.5 text-sm font-semibold text-[var(--squall)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bolt,#facc15)] print:hidden"
    >
      <Printer className="h-4 w-4" aria-hidden />
      Print / Save as PDF
    </button>
  );
}
