"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Fact = {
  id: number;
  text: string;
  source: string;
  source_url: string;
};

export function FactsList() {
  const [facts, setFacts] = useState<Fact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase.from("facts").select("*");
      if (error) {
        setError(error.message);
      } else if (data) {
        setFacts(data);
      }
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-slate-500">⏳ در حال بارگذاری حقایق...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-red-500">خطا در بارگذاری: {error}</p>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <header className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          🔍 آیا می‌دانستید؟
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          حقایق علمی درباره میکروپلاستیک‌ها — با منبع معتبر
        </p>
      </header>

      <div className="grid gap-4">
        {facts.map((f) => (
          <article
            key={f.id}
            className="glass rounded-2xl p-6 hover:-translate-y-1 transition"
          >
            <p className="text-lg leading-relaxed mb-3">💡 {f.text}</p>
            <a
              href={f.source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-turquoise-500 underline decoration-dotted hover:text-turquoise-600"
            >
              منبع: {f.source}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}