import type { Metadata } from "next";
import { MythOrFact } from "../components/MythOrFact";

export const metadata: Metadata = {
  title: "افسانه یا واقعیت؟ | میکروپلاستیک‌ها",
  description:
    "آیا می‌توانید واقعیت را از افسانه درباره میکروپلاستیک‌ها تشخیص دهید؟ ۱۰ ادعای علمی با منابع معتبر.",
};

export default function MythsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <header className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm mb-4">
          <span className="h-2 w-2 rounded-full bg-turquoise-400 animate-pulse" />
          بازی علمی تعاملی
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          افسانه یا واقعیت؟
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          ۱۰ ادعا درباره میکروپلاستیک‌ها — آیا می‌توانی تشخیص دهی کدام افسانه،
          کدام واقعیت و کدام «بستگی دارد»؟
        </p>
      </header>

      <MythOrFact />
    </main>
  );
}