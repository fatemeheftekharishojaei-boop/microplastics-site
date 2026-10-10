"use client";
import { useEffect, useRef } from "react";

export function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    // تعداد بیشتر + اندازه خیلی بزرگ‌تر
    const N = 35;
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: (Math.random() * 2 + 2) * dpr, // 2 تا 4 پیکسل
      vx: (Math.random() - 0.5) * 0.6 * dpr,
      vy: (Math.random() - 0.5) * 0.6 * dpr,
      hue:
        Math.random() > 0.66
          ? "45,212,191"   // فیروزه‌ای
          : Math.random() > 0.5
          ? "125,211,252"  // آبی روشن
          : "255,255,255", // سفید
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // درخشش خارجی
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 10);
        g.addColorStop(0, `rgba(${p.hue},1)`);
        g.addColorStop(0.4, `rgba(${p.hue},0.6)`);
        g.addColorStop(1, `rgba(${p.hue},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 10, 0, Math.PI * 2);
        ctx.fill();

        // هسته مرکزی سفید و روشن
        ctx.fillStyle = "rgba(255,255,255,0.95)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 0.6, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 h-full w-full pointer-events-none opacity-70"
      aria-hidden="true"
    />
  );
}