"use client";

import { useEffect, useState } from "react";

const COMMAND = "whoami";

// Pengaturan waktu (milidetik)
const START_DELAY = 900; // tunggu judul hero selesai masuk
const COMMAND_MS = 70; // kecepatan mengetik perintah
const PAUSE_MS = 350; // jeda seperti menekan Enter
const ROLE_MS = 35; // kecepatan mengetik jabatan

/** Kursor blok kuning. Lebarnya 0 supaya tidak menggeser teks di sekitarnya. */
function Caret({ blink }: { blink: boolean }) {
  return (
    <span aria-hidden className="relative inline-block w-0 align-baseline">
      <span
        className={`absolute bottom-[-0.12em] left-[0.12em] block h-[0.85em] w-[0.5em] bg-[var(--bolt)] ${
          blink ? "caret" : ""
        }`}
      />
    </span>
  );
}

export default function HeroTagline({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [cmdN, setCmdN] = useState(0);
  const [roleN, setRoleN] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    // Pengguna memilih "reduce motion": langsung tampilkan semuanya
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timers.push(
        setTimeout(() => {
          setCmdN(COMMAND.length);
          setRoleN(text.length);
        }, 0),
      );
      return () => timers.forEach(clearTimeout);
    }

    let at = START_DELAY;
    for (let i = 1; i <= COMMAND.length; i++) {
      at += COMMAND_MS;
      timers.push(setTimeout(() => setCmdN(i), at));
    }
    at += PAUSE_MS;
    for (let i = 1; i <= text.length; i++) {
      at += ROLE_MS;
      timers.push(setTimeout(() => setRoleN(i), at));
    }

    return () => timers.forEach(clearTimeout);
  }, [text]);

  const cmdDone = cmdN >= COMMAND.length;
  const roleDone = roleN >= text.length;

  return (
    <div className={className}>
      {/* Baris perintah */}
      <p aria-hidden className="font-mono text-sm text-[var(--rain)]">
        <span className="text-[var(--bolt)]">$</span>{" "}
        <span className="text-[var(--bone)]">{COMMAND.slice(0, cmdN)}</span>
        {roleN === 0 && <Caret blink={cmdN === 0 || cmdDone} />}
      </p>

      {/* Jabatan. Teks lengkap tetap ada untuk pembaca layar dan mesin pencari,
          dan sisa teks yang belum diketik disembunyikan agar tata letak tidak bergeser. */}
      <h2 className="display mt-2 text-2xl text-[var(--rain)] sm:text-3xl">
        <span className="sr-only">{text}</span>
        <span aria-hidden>
          {text.slice(0, roleN)}
          {roleN > 0 && <Caret blink={roleDone} />}
          <span className="opacity-0">{text.slice(roleN)}</span>
        </span>
      </h2>
    </div>
  );
}
