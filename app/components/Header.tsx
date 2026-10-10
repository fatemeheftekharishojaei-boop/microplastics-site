"use client";
import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/", label: "خانه" },
  { href: "/microplastics", label: "میکروپلاستیک چیست؟" },
  { href: "/health", label: "سلامت" },
  { href: "/environment", label: "محیط‌زیست" },
  { href: "/research", label: "پژوهش‌ها" },
  { href: "/videos", label: "ویدئوها" },
  { href: "/lab", label: "آزمایشگاه" },
  { href: "/quiz", label: "Quiz" },
  { href: "/faq", label: "پرسش و پاسخ" },
  { href: "/myths", label: "افسانه یا واقعیت؟" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="h-8 w-8 rounded-full gradient-ocean grid place-items-center">
            <span className="h-2 w-2 rounded-full bg-white/90 animate-pulse" />
          </span>
          <span className="text-gradient">میکروپلاستیک‌ها</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="px-3 py-2 rounded-full hover:bg-ocean-50 dark:hover:bg-ocean-900/40 transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/microplastics"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-l from-ocean-600 to-turquoise-500 text-white text-sm font-medium shadow-lg hover:-translate-y-0.5 transition"
          >
            ✨ شروع کشف
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-ocean-50 dark:hover:bg-ocean-900/40"
            onClick={() => setOpen((o) => !o)}
            aria-label="منو"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t glass px-4 py-3 grid gap-1">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-ocean-50 dark:hover:bg-ocean-900/40 transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}