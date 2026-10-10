"use client";
import { useState } from "react";

const ITEMS = [
  { name: "نانوپلاستیک", um: 0.05, color: "#e879f9", icon: "🔬" },
  { name: "سلول انسانی", um: 20, color: "#f59e0b", icon: "🦠" },
  { name: "میکروپلاستیک", um: 50, color: "#14b8a6", icon: "💧" },
  { name: "تار مو", um: 70, color: "#475569", icon: "💇" },
  { name: "دانه نمک", um: 300, color: "#94a3b8", icon: "🧂" },
];

function sizeOf(um: number) {
  const ratio = Math.log10(um * 1000 + 1) / Math.log10(300 * 1000);
  return Math.max(10, Math.min(90, ratio * 90));
}

export function SizeComparison() {
  const [val, setVal] = useState(50);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <header className="text-center mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-green-500/40 bg-green-500/10 text-green-600 text-xs font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          شواهد قطعی
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          اندازه‌ها را مقایسه کن
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          میکروپلاستیک‌ها ذراتی کمتر از ۵ میلی‌متر هستند؛ نانوپلاستیک‌ها حتی
          کوچک‌تر از ۱ میکرومتر.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="glass rounded-3xl p-8">
          <div className="flex items-end justify-around h-80 gap-2">
            {ITEMS.map((it) => {
              const s = sizeOf(it.um);
              return (
                <div
                  key={it.name}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: `${s}px`,
                      height: `${s}px`,
                      background: `radial-gradient(circle at 30% 30%, ${it.color}, ${it.color}dd)`,
                      boxShadow: `0 0 20px ${it.color}55`,
                    }}
                  />
                  <span className="text-xs text-center whitespace-nowrap">
                    {it.icon} {it.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <label className="block">
            <span className="text-sm font-medium">
              اندازه ذره: <strong>{val} میکرومتر</strong>
            </span>
            <input
              type="range"
              min={0.01}
              max={300}
              step={0.1}
              value={val}
              onChange={(e) => setVal(parseFloat(e.target.value))}
              className="w-full mt-3 accent-turquoise-500"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>نانوپلاستیک</span>
              <span>دانه نمک</span>
            </div>
          </label>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            اسلایدر را حرکت بده و ببین اندازه ذرات مختلف نسبت به هم چطور تغییر
            می‌کنه. این مقایسه تقریبی است و برای درک بهتر مفهوم طراحی شده.
          </p>

          <div className="p-4 rounded-xl bg-ocean-50 dark:bg-ocean-950/40 border border-ocean-200 dark:border-ocean-800">
            <p className="text-xs leading-relaxed">
              💡 <strong>نکته علمی:</strong> ذراتی که اندازه‌شان کمتر از ۵
              میلی‌متر باشد «میکروپلاستیک» و کمتر از ۱ میکرومتر «نانوپلاستیک»
              نام‌گذاری می‌شوند.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}