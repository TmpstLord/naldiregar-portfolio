"use client";

import { motion, useReducedMotion } from "framer-motion";

const HERO_SIZE = "text-[clamp(4.5rem,16vw,12.5rem)] leading-[0.84]";

export default function HeroTitle({
  lines,
  className = HERO_SIZE,
  as: Tag = "h1",
}: {
  lines: string[];
  className?: string;
  as?: "h1" | "h2";
}) {
  const reduce = useReducedMotion();

  return (
    <Tag className={`display ${className}`}>
      {lines.map((line, i) => (
        // padding + margin negatif: area potong lebih longgar agar ekor huruf (g, y) tidak terpotong
        <span
          key={line}
          className="-my-[0.2em] block overflow-hidden py-[0.2em]"
        >
          <motion.span
            className="block"
            initial={reduce ? false : { y: "140%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15 + i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
