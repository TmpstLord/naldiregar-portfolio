"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const groups = [
  { dir: "backend", items: ["Laravel", "Express.js", "TypeScript"] },
  { dir: "database", items: ["MySQL", "Firebase"] },
  { dir: "game", items: ["Unity DOTS", "Godot"] },
];

const COMMAND = "tree stack/";
const TYPE_SPEED_MS = 28; // Kecepatan ketik perintah (ms per huruf)
const EXEC_PAUSE_MS = 140; // Jeda sesaat setelah Enter sebelum stdout keluar
const LINE_STEP_S = 0.055; // Jeda cetak antar baris stdout (55ms)

export default function StackTree() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  const [typedCount, setTypedCount] = useState(0);
  const [startStdout, setStartStdout] = useState(false);

  useEffect(() => {
    if (!inView) return;

    if (reduce) {
      setTypedCount(COMMAND.length);
      setStartStdout(true);
      return;
    }

    let current = 0;
    let pauseTimer: ReturnType<typeof setTimeout>;

    const typeTimer = setInterval(() => {
      current += 1;
      setTypedCount(current);

      if (current >= COMMAND.length) {
        clearInterval(typeTimer);
        pauseTimer = setTimeout(() => {
          setStartStdout(true);
        }, EXEC_PAUSE_MS);
      }
    }, TYPE_SPEED_MS);

    return () => {
      clearInterval(typeTimer);
      clearTimeout(pauseTimer);
    };
  }, [inView, reduce]);

  // Hitung nomor urut baris global agar tercetak beruntun seperti stdout
  let lineIndex = 0;
  const indexedGroups = groups.map((g) => {
    const dirLine = lineIndex++;
    const indexedItems = g.items.map((item, idx) => ({
      name: item,
      line: lineIndex++,
      isLast: idx === g.items.length - 1,
    }));
    return { dir: g.dir, dirLine, items: indexedItems };
  });

  const totalPackages = groups.reduce((sum, g) => sum + g.items.length, 0);
  const summaryLine = lineIndex;

  const snapTransition = (line: number) =>
    reduce
      ? { duration: 0 }
      : {
          duration: 0.1, // Muncul cepat ala buffer terminal
          delay: line * LINE_STEP_S,
        };

  return (
    <section
      ref={ref}
      aria-label="Teknologi utama"
      className="border-y border-[var(--line)] bg-[var(--deck)] py-20"
    >
      <div className="mx-auto max-w-6xl px-6 font-mono">
        {/* Baris Prompt & Ketikan Perintah */}
        <p className="flex items-center gap-2.5 text-lg text-[var(--rain)]">
          <span aria-hidden className="select-none text-[var(--bolt)]">
            $
          </span>
          <span className="text-[var(--bone)]">
            {reduce ? COMMAND : COMMAND.slice(0, typedCount)}
          </span>
          <span
            aria-hidden
            className="caret inline-block h-4 w-2 bg-[var(--bolt)]"
          />
        </p>

        {/* Output Pohon Direktori */}
        <div className="mt-8 grid gap-12 sm:grid-cols-3">
          {indexedGroups.map((g) => (
            <div key={g.dir}>
              <motion.p
                initial={reduce ? false : { opacity: 0 }}
                animate={startStdout ? { opacity: 1 } : { opacity: 0 }}
                transition={snapTransition(g.dirLine)}
                className="text-2xl text-[var(--bone)]"
              >
                <span aria-hidden className="mr-3 text-[var(--rain)]">
                  ▾
                </span>
                {g.dir}/
              </motion.p>

              <ul className="ml-2.5 mt-4 pl-8">
                {g.items.map((item) => (
                  <motion.li
                    key={item.name}
                    initial={reduce ? false : { opacity: 0 }}
                    animate={startStdout ? { opacity: 1 } : { opacity: 0 }}
                    transition={snapTransition(item.line)}
                    className={`group relative flex items-center gap-3 py-2 text-xl text-[var(--rain)] transition-colors before:absolute before:-left-8 before:top-1/2 before:h-px before:w-6 before:bg-[var(--line)] after:absolute after:-left-8 after:top-0 after:w-px after:bg-[var(--line)] hover:text-[var(--bone)] ${
                      item.isLast ? "after:h-1/2" : "after:h-full"
                    }`}
                  >
                    <span
                      aria-hidden
                      className="h-2 w-2 bg-transparent transition-colors group-hover:bg-[var(--bolt)]"
                    />
                    {item.name}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Baris Ringkasan Khas Perintah tree */}
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={startStdout ? { opacity: 1 } : { opacity: 0 }}
          transition={snapTransition(summaryLine)}
          className="mt-10 text-sm text-[var(--rain)]/75"
        >
          {groups.length} directories, {totalPackages} packages
        </motion.p>
      </div>
    </section>
  );
}
