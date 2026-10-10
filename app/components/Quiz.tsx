"use client";
import { useState } from "react";
import { QUIZ_QUESTIONS } from "./quiz-data";

const LEVELS = [
  { min: 0, max: 3, emoji: "🌱", title: "تازه‌کار", desc: "تازه شروع کردی! با مطالعه بیشتر، خیلی پیشرفت می‌کنی." },
  { min: 4, max: 6, emoji: "🔬", title: "علاقه‌مند", desc: "خوب بلدی! دانش تو درباره میکروپلاستیک‌ها قابل توجه است." },
  { min: 7, max: 8, emoji: "🧪", title: "پژوهشگر", desc: "عالی! تو در این حوزه دانش قابل قبولی داری." },
  { min: 9, max: 10, emoji: "🧠", title: "متخصص", desc: "فوق‌العاده! دانش تو در سطح بالایی قرار داره." },
];

export function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const q = QUIZ_QUESTIONS[current];
  const isLast = current === QUIZ_QUESTIONS.length - 1;
  const score = answers.filter((a, i) => a === QUIZ_QUESTIONS[i].correctAnswer).length;
  const total = QUIZ_QUESTIONS.length;

  const handleSelect = (idx: number) => {
    if (showExplanation) return;
    setSelected(idx);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    setShowExplanation(true);
  };

  const handleNext = () => {
    const newAnswers = [...answers, selected!];
    setAnswers(newAnswers);
    setSelected(null);
    setShowExplanation(false);

    if (isLast) {
      setShowResult(true);
    } else {
      setCurrent(current + 1);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setShowResult(false);
    setShowExplanation(false);
  };

  // ═══ صفحه نتیجه ═══
  if (showResult) {
    const level = LEVELS.find((l) => score >= l.min && score <= l.max)!;
    const percent = Math.round((score / total) * 100);

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
            <div className="p-4 rounded-2xl bg-ocean-50 dark:bg-ocean-950/40">
              <div className="text-3xl font-black text-ocean-600">
                {score}/{total}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                پاسخ صحیح
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-turquoise-500/10">
              <div className="text-3xl font-black text-turquoise-500">
                {percent}%
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                امتیاز
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-eco-500/10">
              <div className="text-3xl font-black text-eco-500">
                {total - score}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                نیاز به مرور
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 text-sm text-slate-600 dark:text-slate-400 mb-6">
            💡 <strong>یادت باشه:</strong> این رتبه‌بندی صرفاً برای سرگرمی و
            آموزشه و ادعای تخصص حرفه‌ای نداره.
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

  // ═══ صفحه سوال ═══
  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-2">
          <span>سوال {current + 1} از {total}</span>
          <span>{Math.round(((current) / total) * 100)}%</span>
        </div>
        <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-l from-ocean-600 to-turquoise-500 transition-all duration-500"
            style={{ width: `${((current + (showExplanation ? 1 : 0)) / total) * 100}%` }}
          />
        </div>
      </div>

      <div className="glass rounded-3xl p-8">
        <h3 className="text-xl font-bold mb-6 leading-relaxed">
          {q.question}
        </h3>

        <div className="space-y-3">
          {q.options.map((opt, idx) => {
            const isCorrect = idx === q.correctAnswer;
            const isSelected = idx === selected;
            let cls =
              "w-full text-right p-4 rounded-2xl border-2 transition-all";

            if (!showExplanation) {
              cls += isSelected
                ? " border-turquoise-500 bg-turquoise-500/10"
                : " border-slate-200 dark:border-slate-700 hover:border-turquoise-400";
            } else {
              if (isCorrect) {
                cls += " border-eco-500 bg-eco-500/10";
              } else if (isSelected) {
                cls += " border-red-500 bg-red-500/10";
              } else {
                cls += " border-slate-200 dark:border-slate-700 opacity-60";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={showExplanation}
                className={cls}
              >
                <div className="flex items-center gap-3">
                  <span className="h-8 w-8 shrink-0 rounded-full bg-slate-100 dark:bg-slate-800 grid place-items-center text-sm font-bold">
                    {["الف", "ب", "پ", "ت"][idx]}
                  </span>
                  <span className="flex-1">{opt}</span>
                  {showExplanation && isCorrect && (
                    <span className="text-eco-500 text-xl">✓</span>
                  )}
                  {showExplanation && isSelected && !isCorrect && (
                    <span className="text-red-500 text-xl">✕</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* توضیح علمی */}
        {showExplanation && (
          <div className="mt-6 p-5 rounded-2xl bg-ocean-50 dark:bg-ocean-950/40 border border-ocean-200 dark:border-ocean-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">📚</span>
              <span className="font-bold text-sm">توضیح علمی</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-3">
              {q.explanation}
            </p>
            <p className="text-xs text-slate-500">
              منبع: {q.source}
            </p>
          </div>
        )}

        {/* دکمه‌ها */}
        <div className="mt-6 flex justify-end gap-3">
          {!showExplanation ? (
            <button
              onClick={handleSubmit}
              disabled={selected === null}
              className="px-6 py-3 rounded-full bg-gradient-to-l from-ocean-600 to-turquoise-500 text-white font-medium shadow-lg hover:-translate-y-0.5 transition disabled:opacity-40 disabled:hover:translate-y-0"
            >
              تایید پاسخ
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-full bg-gradient-to-l from-ocean-600 to-turquoise-500 text-white font-medium shadow-lg hover:-translate-y-0.5 transition"
            >
              {isLast ? "دیدن نتیجه 🎉" : "سوال بعدی →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}