"use client";
import { useState } from "react";

const SOURCES = [
  { icon: "🧴", name: "بطری‌های پلاستیکی", desc: "با حرارت و نور، ذرات ریز آزاد می‌کنند.", stat: "بیش از ۱ میلیون بطری در دقیقه در جهان مصرف می‌شود" },
  { icon: "📦", name: "بسته‌بندی مواد غذایی", desc: "منبع اصلی میکروپلاستیک در رژیم غذایی.", stat: "حدود ۴۰٪ پلاستیک تولیدی برای بسته‌بندی" },
  { icon: "👕", name: "لباس‌های مصنوعی", desc: "هر بار شست‌وشو میلیون‌ها الیاف آزاد می‌کند.", stat: "تا ۷۰۰,۰۰۰ الیاف در هر شست‌وشو" },
  { icon: "🚗", name: "لاستیک خودرو", desc: "سایش تایرها منبع مهم میکروپلاستیک در هوا.", stat: "حدود ۲۰٪ میکروپلاستیک محیط از لاستیک" },
  { icon: "💄", name: "لوازم آرایشی", desc: "میکروبیدها در برخی محصولات.", stat: "در بسیاری کشورها ممنوع شده" },
  { icon: "🌊", name: "زباله‌های دریایی", desc: "تجزیه تدریجی به ذرات کوچک‌تر.", stat: "۱۱ میلیون تن در سال وارد اقیانوس‌ها" },
  { icon: "🏭", name: "فعالیت‌های صنعتی", desc: "پلاستیک‌های صنعتی در تولید و حمل.", stat: "منبع مهم در کشورهای صنعتی" },
  { icon: "🛍️", name: "کیسه‌های پلاستیکی", desc: "تجزیه طولانی و آزادسازی ذرات.", stat: "۵۰۰ میلیارد کیسه در سال" },
];

export function SourcesMap() {
  const [active, setActive] = useState(0);
  const item = SOURCES[active];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <header className="text-center mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-green-500/40 bg-green-500/10 text-green-600 text-xs font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          شواهد قطعی
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          میکروپلاستیک‌ها از کجا می‌آیند؟
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          روی هر منبع کلیک کن تا اطلاعات علمی آن را ببینی
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {SOURCES.map((s, i) => (
          <button
            key={s.name}
            onClick={() => setActive(i)}
            className={`p-4 rounded-2xl border-2 transition-all text-center ${
              active === i
                ? "border-turquoise-500 bg-turquoise-500/10 -translate-y-1"
                : "border-slate-200 dark:border-slate-700 hover:border-turquoise-400"
            }`}
          >
            <div className="text-3xl mb-2">{s.icon}</div>
            <div className="text-xs font-medium">{s.name}</div>
          </button>
        ))}
      </div>

      <div className="glass rounded-3xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-7xl md:text-8xl">{item.icon}</div>
          <div className="flex-1 text-center md:text-right">
            <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              {item.desc}
            </p>
            <div className="inline-block px-4 py-2 rounded-full bg-ocean-500/10 border border-ocean-500/30 text-sm">
              📊 {item.stat}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}