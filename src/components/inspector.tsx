"use client";

import { useEffect, useState } from "react";

type Stats = {
  fps: number;
  ms: number;
  heap: number | null;
  particles: string;
  vw: number;
  vh: number;
  load: number | null;
};

// Terisi otomatis di Vercel jika "Automatically expose System Environment Variables" aktif
const BUILD =
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "local";

const W = 232;
const H = 40;
const MAX_MS = 50;

/**
 * Overlay kecil ala profiler. Tekan ` (backtick) untuk membuka/menutup, Esc untuk menutup.
 * Pengukuran hanya berjalan saat panel terbuka, jadi tidak membebani halaman.
 */
export default function Inspector() {
  const [open, setOpen] = useState(false);
  const [stats, setStats] = useState<Stats | null>(null);
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.isContentEditable)
      )
        return;
      if (e.key === "`") setOpen((o) => !o);
      if (e.key === "Escape") setOpen(false);
    };
    const toggle = () => setOpen((o) => !o);
    window.addEventListener("keydown", onKey);
    window.addEventListener("inspector:toggle", toggle);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("inspector:toggle", toggle);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    let raf = 0;
    let last = performance.now();
    let lastReport = last;
    let frames = 0;
    let acc = 0;
    const times: number[] = [];

    const loop = (now: number) => {
      const dt = now - last;
      last = now;
      frames += 1;
      acc += dt;
      times.push(dt);
      if (times.length > 60) times.shift();

      if (now - lastReport >= 250) {
        const mem = (
          performance as unknown as { memory?: { usedJSHeapSize: number } }
        ).memory;
        const nav = performance.getEntriesByType("navigation")[0] as
          | PerformanceNavigationTiming
          | undefined;
        setStats({
          fps: Math.round((frames * 1000) / acc),
          ms: acc / frames,
          heap: mem ? mem.usedJSHeapSize / 1048576 : null,
          particles: document.documentElement.dataset.particles ?? "0",
          vw: window.innerWidth,
          vh: window.innerHeight,
          load:
            nav && nav.loadEventEnd > 0 ? Math.round(nav.loadEventEnd) : null,
        });
        setHistory([...times]);
        frames = 0;
        acc = 0;
        lastReport = now;
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [open]);

  if (!open) return null;

  const step = W / 59;
  const points = history
    .map(
      (dt, i) =>
        `${(i * step).toFixed(1)},${(H - (Math.min(dt, MAX_MS) / MAX_MS) * H).toFixed(1)}`,
    )
    .join(" ");
  const budgetY = H - (16.7 / MAX_MS) * H; // batas 60 FPS

  const rows: [string, string][] = stats
    ? [
        ["FPS", String(stats.fps)],
        ["Frame time", `${stats.ms.toFixed(1)} ms`],
        [
          "JS heap",
          stats.heap !== null
            ? `${stats.heap.toFixed(1)} MB`
            : "hanya di Chrome",
        ],
        ["Partikel angin", stats.particles],
        ["Viewport", `${stats.vw} × ${stats.vh}`],
        ["Halaman termuat", stats.load !== null ? `${stats.load} ms` : "-"],
        ["Build", BUILD],
      ]
    : [["Mengukur…", ""]];

  return (
    <aside
      role="dialog"
      aria-label="Inspector performa halaman"
      className="fixed bottom-10 left-4 z-[80] w-64 border border-[var(--line)] bg-[rgb(23_39_51/0.95)] p-4 font-mono text-xs backdrop-blur print:hidden"
    >
      <div className="flex items-center justify-between">
        <p className="text-[var(--bone)]">Inspector</p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Tutup inspector"
          className="cursor-pointer text-[var(--rain)] hover:text-[var(--bone)]"
        >
          Esc
        </button>
      </div>

      <dl className="mt-3 space-y-1.5 tabular-nums">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4">
            <dt className="text-[var(--rain)]">{k}</dt>
            <dd className="text-[var(--bone)]">{v}</dd>
          </div>
        ))}
      </dl>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-4 h-10 w-full"
        role="img"
        aria-label="Grafik waktu frame, 60 frame terakhir"
      >
        <line
          x1="0"
          x2={W}
          y1={budgetY}
          y2={budgetY}
          stroke="var(--rain)"
          strokeDasharray="3 3"
          strokeWidth="1"
        />
        <polyline
          points={points}
          fill="none"
          stroke="var(--bolt)"
          strokeWidth="1.5"
        />
      </svg>
      <p className="mt-1 text-[10px] text-[var(--rain)]">
        Garis putus-putus: batas 16,7 ms (60 FPS)
      </p>
    </aside>
  );
}
