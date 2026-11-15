"use client";

import { useEffect, useRef } from "react";

type P = { x: number; y: number; px: number; py: number; life: number };

/**
 * Garis-garis tipis yang mengalir seperti angin badai.
 * Kursor memutar arus di sekitarnya dan memicu percikan aksen kuning.
 */
export default function FlowField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;
    let visible = true;
    let ps: P[] = [];

    const spawn = (): P => {
      const x = Math.random() * w;
      const y = Math.random() * h;
      return { x, y, px: x, py: y, life: 80 + Math.random() * 160 };
    };

    const resize = (force = false) => {
      const nextW = canvas.clientWidth;
      const nextH = canvas.clientHeight;
      // Hindari reset partikel jika hanya tinggi address-bar mobile yang berubah
      if (!force && Math.abs(nextW - w) < 2 && Math.abs(nextH - h) < 80) {
        return;
      }

      w = nextW;
      h = nextH;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ps = Array.from(
        { length: Math.min(700, Math.floor((w * h) / 2600)) },
        spawn,
      );
    };

    const step = () => {
      t += 1;
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";

      const calmPath = new Path2D();
      const boltPath = new Path2D();

      for (const p of ps) {
        const a =
          (Math.sin(p.x * 0.0021 + t * 0.004) +
            Math.cos(p.y * 0.0027 - t * 0.003) +
            Math.sin((p.x + p.y) * 0.0012 + t * 0.002)) *
          Math.PI *
          0.8;
        let vx = Math.cos(a);
        let vy = Math.sin(a);

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.hypot(dx, dy);
        const inVortex = d < 160 && d > 0.1;

        if (d < 200 && d > 0.1) {
          const k = 1 - d / 200;
          vx += (-dy / d) * k * 2.4 + (dx / d) * k * 0.8;
          vy += (dx / d) * k * 2.4 + (dy / d) * k * 0.8;
        }

        p.px = p.x;
        p.py = p.y;
        p.x += vx * 1.4;
        p.y += vy * 1.4;

        const targetPath = inVortex ? boltPath : calmPath;
        targetPath.moveTo(p.px, p.py);
        targetPath.lineTo(p.x, p.y);

        if (--p.life <= 0 || p.x < 0 || p.x > w || p.y < 0 || p.y > h) {
          Object.assign(p, spawn());
        }
      }

      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(140,160,174,0.7)";
      ctx.stroke(calmPath);

      ctx.strokeStyle = "rgba(250,204,21,0.55)";
      ctx.stroke(boltPath);
    };

    const loop = () => {
      if (visible) step();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };
    const onResize = () => resize(false);

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });

    resize(true);
    io.observe(canvas);
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);

    if (reduce) {
      for (let i = 0; i < 220; i++) step();
    } else {
      // Pre-warm agar arus angin langsung terlihat saat pertama kali halaman dimuat
      for (let i = 0; i < 35; i++) step();
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom,#000_55%,transparent)]"
    />
  );
}
