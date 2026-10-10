"use client";
import { useState } from "react";

const STEPS = [
  { icon: "🧴", title: "بطری پلاستیکی", desc: "یک بطری پلاستیکی معمولی در طبیعت رها می‌شود." },
  { icon: "☀️", title: "تجزیه تدریجی", desc: "نور خورشید، گرما و آب پلاستیک را شکننده می‌کنند." },
  { icon: "💧", title: "تبدیل به میکروپلاستیک", desc: "بطری به ذرات ریز کمتر از ۵ میلی‌متر تجزیه می‌شود." },
  { icon: "🌊", title: "ورود به آب", desc: "ذرات از طریق باران و فاضلاب وارد رودخانه و دریا می‌شوند." },
  { icon: "🐟", title: "زنجیره غذایی", desc: "پلانکتون‌ها و ماهی‌ها این ذرات را می‌خورند." },
  { icon: "🍽️", title: "ورود به غذای انسان", desc: "از طریق غذاهای دریایی، نمک، آب و هوا وارد بدن ما می‌شوند." },
  { icon: "🔬", title: "پژوهش علمی", desc: "دانشمندان در حال بررسی اثرات احتمالی بر سلامت انسان هستند." },
];

export function JourneyTimeline() {
  const [active, setActive] = useState(0);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <header className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          سفر یک ذره میکروپلاستیک
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          از بطری تا بدن انسان — داستان یک سفر ناخواسته
        </p>
      </header>

      {/* نوار پیشرفت با آیکون‌ها */}
      <div className="relative mb-12 hidden md:block">
        <div className="absolute top-1/2 right-8 left-8 h-1 -translate-y-1/2 bg-slate-200 dark:bg-slate-800 rounded" />
        <div
          className="absolute top-1/2 right-8 h-1 -translate-y-1/2 bg-gradient-to-l from-ocean-600 to-turquoise-500 rounded transition-all duration-500"
          style={{ width: `calc(${(active / (STEPS.length - 1)) * 100}% - 4rem)` }}
        />
        <div className="relative flex justify-between">
          {STEPS.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-14 w-14 rounded-full grid place-items-center text-2xl transition-all ${
                i <= active
                  ? "bg-gradient-to-l from-ocean-600 to-turquoise-500 text-white scale-110 shadow-lg"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-400"
              }`}
            >
              {s.icon}
            </button>
          ))}
        </div>
      </div>

      {/* کارت فعال */}
      <div className="glass rounded-3xl p-8 md:p-12 text-center">
        <div className="inline-block text-8xl mb-6">{STEPS[active].icon}</div>
        <div className="text-xs text-turquoise-500 font-bold mb-2">
          مرحله {active + 1} از {STEPS.length}
        </div>
        <h3 className="text-3xl font-bold mb-4">{STEPS[active].title}</h3>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {STEPS[active].desc}
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => setActive(Math.max(0, active - 1))}
            disabled={active === 0}
            className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition disabled:opacity-30"
          >
            → قبلی
          </button>
          <button
            onClick={() => setActive(Math.min(STEPS.length - 1, active + 1))}
            disabled={active === STEPS.length - 1}
            className="px-6 py-3 rounded-full bg-gradient-to-l from-ocean-600 to-turquoise-500 text-white shadow-lg hover:-translate-y-0.5 transition disabled:opacity-30 disabled:hover:translate-y-0"
          >
            بعدی ←
          </button>
        </div>
      </div>
    </section>
  );
}