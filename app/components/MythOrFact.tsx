"use client";
import { useState } from "react";
import { MYTHS_DATA, type Verdict, type MythItem } from "./myths-data";

const VERDICT_LABELS: Record<Verdict, { label: string; emoji: string; color: string }> = {
  myth: { label: "افسانه", emoji: "❌", color: "red" },
  fact: { label: "واقعیت", emoji: "✅", color: "green" },
  depends: { label: "بستگی دارد", emoji: "🤔", color: "amber" },
};

const EVIDENCE_LABELS: Record<MythItem["evidenceLevel"], { label: string; cls: string }> = {
  established: {
    label: "شواهد قطعی",
    cls: "bg-green-500/15 text-green-600 border-green-500/40",
  },
  emerging: {
    label: "شواهد در حال بررسی",
    cls: "bg-amber-500/15 text-amber-600 border-amber-500/40",
  },
  hypothesis: {
    label: "فرضیه علمی",
    cls: "bg-blue-500/15 text-blue-600 border-blue-500/40",
  },
  uncertain: {
    label: "عدم قطعیت",
    cls: "bg-slate-500/15 text-slate-500 border-slate-400/40",
  },
};

export function MythOrFact() {
  const [index, setIndex] = useState(0);
  const [userChoice, setUserChoice] = useState<Verdict | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const item = MYTHS_DATA[index];
  const isLast = index === MYTHS_DATA.length - 1;
  const isCorrect = userChoice === item.verdict;

  const handleChoice = (choice: Verdict) => {
    if (userChoice) return;
    setUserChoice(choice);
    if (choice === item.verdict) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (isLast) {
      setShowResult(true);
    } else {
      setIndex(index + 1);
      setUserChoice(null);
    }
  };

  const restart = () => {
    setIndex(0);
    setUserChoice(null);
    setScore(0);
    setShowResult(false);
  };

  // ═══ نتیجه ═══
  if (showResult) {
    const percent = Math.round((score / MYTHS_DATA.length) * 100);
    const level =
      percent >= 80
        ? { emoji: "🧠", title: "تحلیلگر عالی", desc: "دقت بالایی در تشخیص واقعیت از افسانه داری!" }
        : percent >= 60
        ? { emoji: "🔬", title: "محقق دقیق", desc: "خوب تشخیص می‌دی، کمی تمرین بیشتر بهترش می‌کنه." }
        : { emoji: "🌱", title: "در حال یادگیری", desc: "کاملاً طبیعیه! با مطالعه بیشتر قوی‌تر می‌شی." };

    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="glass rounded-3xl p-10">
          <div className="text-7xl mb-4">{level.emoji}</div>
          <h2 className="text-3xl font-black text-gradient mb-2">
            {level.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            {level.desc}
          </p>

          <div className="grid grid-cols-3 gap-4 my-8">
            <div className="p-4 rounded-2xl bg-green-500/10">
              <div className="text-3xl font-black text-green-600">{score}</div>
              <p className="text-xs mt-1">صحیح</p>
            </div>
            <div className="p-4 rounded-2xl bg-red-500/10">
              <div className="text-3xl font-black text-red-500">
                {MYTHS_DATA.length - score}
              </div>
              <p className="text-xs mt-1">نادرست</p>
            </div>
            <div className="p-4 rounded-2xl bg-turquoise-500/10">
              <div className="text-3xl font-black text-turquoise-500">
                {percent}%
              </div>
              <p className="text-xs mt-1">دقت</p>
            </div>
          </div>

          <button
            onClick={restart}
            className="px-8 py-3 rounded-full bg-gradient-to-l from-ocean-600 to-turquoise-500 text-white font-medium shadow-lg hover:-translate-y-0.5 transition"
          >
            🔄 شروع مجدد
          </button>
        </div>
      </div>
    );
  }

  // ═══ سوال ═══
  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-2">
          <span>ادعا {index + 1} از {MYTHS_DATA.length}</span>
          <span>امتیاز: {score}</span>
        </div>
        <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-l from-ocean-600 to-turquoise-500 transition-all duration-500"
            style={{ width: `${((index + (userChoice ? 1 : 0)) / MYTHS_DATA.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="glass rounded-3xl p-8">
        {/* ادعا */}
        <div className="mb-6 p-5 rounded-2xl bg-gradient-to-l from-ocean-600/10 to-turquoise-500/10 border border-turquoise-500/30">
          <p className="text-xs text-turquoise-600 font-bold mb-2">
            🤔 این ادعا درست است؟
          </p>
          <p className="text-lg font-medium leading-relaxed">
            «{item.statement}»
          </p>
        </div>

        {/* گزینه‌ها */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {(Object.keys(VERDICT_LABELS) as Verdict[]).map((v) => {
            const cfg = VERDICT_LABELS[v];
            const isChosen = userChoice === v;
            const isTheAnswer = item.verdict === v;

            let cls = "p-5 rounded-2xl border-2 transition-all text-center";
            if (!userChoice) {
              cls += " border-slate-200 dark:border-slate-700 hover:border-turquoise-400 hover:-translate-y-0.5";
            } else if (isTheAnswer) {
              cls += " border-green-500 bg-green-500/10";
            } else if (isChosen) {
              cls += " border-red-500 bg-red-500/10";
            } else {
              cls += " border-slate-200 dark:border-slate-700 opacity-50";
            }

            return (
              <button
                key={v}
                onClick={() => handleChoice(v)}
                disabled={!!userChoice}
                className={cls}
              >
                <div className="text-3xl mb-2">{cfg.emoji}</div>
                <div className="font-bold">{cfg.label}</div>
                {userChoice && isChosen && !isTheAnswer && (
                  <p className="text-xs text-red-500 mt-2">انتخاب شما</p>
                )}
                {userChoice && isTheAnswer && (
                  <p className="text-xs text-green-600 mt-2">
                    {isChosen ? "✓ درست!" : "پاسخ درست"}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        {/* نتیجه + توضیح */}
        {userChoice && (
          <div className="mt-6 space-y-4">
            {/* پیام درست/غلط */}
            <div
              className={`p-4 rounded-2xl text-center font-bold ${
                isCorrect
                  ? "bg-green-500/10 text-green-600"
                  : "bg-red-500/10 text-red-600"
              }`}
            >
              {isCorrect ? "🎉 آفرین! درست تشخیص دادی." : "😅 اشکالی نداره، توضیح علمی رو بخون."}
            </div>

            {/* تگ شواهد */}
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium ${
                  EVIDENCE_LABELS[item.evidenceLevel].cls
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {EVIDENCE_LABELS[item.evidenceLevel].label}
              </span>
            </div>

            {/* توضیح */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">📚</span>
                <span className="font-bold text-sm">توضیح علمی</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
                {item.explanation}
              </p>

              {/* منابع */}
              <div className="pt-3 border-t border-dashed border-slate-300 dark:border-slate-700">
                <p className="text-xs font-bold text-slate-500 mb-2">منابع:</p>
                <ul className="space-y-1">
                  {item.sources.map((s, i) => (
                    <li key={i}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-turquoise-500 hover:text-turquoise-600 underline decoration-dotted"
                      >
                        {s.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* دکمه بعدی */}
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-full bg-gradient-to-l from-ocean-600 to-turquoise-500 text-white font-medium shadow-lg hover:-translate-y-0.5 transition"
              >
                {isLast ? "دیدن نتیجه 🎉" : "ادعای بعدی →"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}