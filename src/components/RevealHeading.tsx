"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Judul section yang naik dari balik topeng saat pertama kali terlihat, selaras dengan judul hero. */
export default function RevealHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <h2 className={`display ${className}`}>
      <span className="-my-[0.2em] block overflow-hidden py-[0.2em]">
        <motion.span
          className="block"
          initial={reduce ? false : { y: "130%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.span>
      </span>
    </h2>
  );
}
