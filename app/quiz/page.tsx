import { SizeComparison } from "./components/SizeComparison";
import type { Metadata } from "next";
import { Quiz } from "../components/Quiz";

export const metadata: Metadata = {
  title: "Quiz — چقدر درباره میکروپلاستیک‌ها می‌دانید؟",
  description:
    "آزمون تعاملی علمی درباره میکروپلاستیک‌ها، منابع، اثرات و پژوهش‌ها. دانش خود را بسنجید.",
};

export default function QuizPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <header className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm mb-4">
          <span className="h-2 w-2 rounded-full bg-turquoise-400 animate-pulse" />
          آزمون علمی تعاملی
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          چقدر درباره میکروپلاستیک‌ها می‌دانید؟
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          ۱۰ سوال علمی — پاسخ صحیح، توضیح علمی و منبع برای هر سوال
        </p>
      </header>

      <Quiz />
    </main>
  );
}