import Link from "next/link";
import { ParticleCanvas } from "./components/ParticleCanvas";
import { SizeComparison } from "./components/SizeComparison";
import { SourcesMap } from "./components/SourcesMap";
import { JourneyTimeline } from "./components/JourneyTimeline";
import { FactsList } from "./components/FactsList";
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ═══ HERO ═══ */}
     <section className="relative overflow-hidden gradient-ocean text-white">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ocean-950/80" />

  <ParticleCanvas />

  <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-40 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm">
            <span className="h-2 w-2 rounded-full bg-turquoise-400 animate-pulse" />
            مرجع علمی تعاملی فارسی
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
            میکروپلاستیک‌ها؛
            <br />
            <span className="text-gradient">
              ذرات کوچکی که داستان بزرگی برای زمین دارند
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            از آب و غذا تا هوا و بدن انسان؛ میکروپلاستیک‌ها کجا هستند و چه چیزی
            درباره آن‌ها می‌دانیم؟
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#what"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-l from-ocean-600 to-turquoise-500 text-white font-medium shadow-lg hover:-translate-y-0.5 transition"
            >
              🔬 میکروپلاستیک چیست؟
            </a>
            <a
              href="#stats"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/40 text-white hover:bg-white/10 transition"
            >
              ✨ کشف علمی را شروع کن
            </a>
          </div>
        </div>

        <a
          href="#stats"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-white transition"
        >
          <span className="text-xs mb-1">کشف کن</span>
          <span className="text-2xl">↓</span>
        </a>
      </section>
      <SizeComparison />
      <SourcesMap />
      <JourneyTimeline />
     {/* <FactsList />*/}
      {/* ═══ STATS ═══ */}
      <section id="stats" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { value: "۱۱M", label: "تن پلاستیک وارد اقیانوس‌ها (سالانه)", source: "UNEP" },
            { value: "۷۰۰+", label: "گونه آسیب‌دیده", source: "UNEP" },
            { value: "۵g", label: "پلاستیک هفتگی در رژیم (تخمین)", source: "WWF" },
            { value: "۲۴۰۰+", label: "مطالعه منتشرشده", source: "PubMed" },
          ].map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition"
            >
              <div className="text-4xl md:text-5xl font-black text-gradient">
                {s.value}
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {s.label}
              </p>
              <p className="mt-1 text-xs text-slate-400">منبع: {s.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ WHAT IS ═══ */}
      <section id="what" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          میکروپلاستیک چیست؟
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          میکروپلاستیک‌ها به ذرات پلاستیکی گفته می‌شود که اندازه‌شان کمتر از{" "}
          <strong>۵ میلی‌متر</strong> است. این ذرات از تجزیه پلاستیک‌های بزرگ‌تر
          یا به‌صورت مستقیم در محصولات صنعتی تولید می‌شوند و امروزه در آب، خاک،
          هوا و حتی بدن انسان یافت شده‌اند.
        </p>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          آماده‌ای دانشت را بسنجی؟
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Quiz تعاملی، آزمایشگاه، و پرسش و پاسخ علمی
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-8 py-4 rounded-full bg-gradient-to-l from-ocean-600 to-turquoise-500 text-white font-medium shadow-lg hover:-translate-y-0.5 transition">
            شروع Quiz
          </button>
          <button className="px-8 py-4 rounded-full border border-ocean-500/40 hover:bg-ocean-50 dark:hover:bg-ocean-900/40 transition">
            ورود به آزمایشگاه
          </button>
        </div>
      </section>
    </main>
  );
}