import Link from "next/link";

const LINKS = [
  { href: "/about", label: "درباره پروژه" },
  { href: "/contact", label: "تماس با ما" },
  { href: "/methodology", label: "روش‌شناسی و منابع" },
  { href: "/privacy", label: "حریم خصوصی" },
  { href: "/terms", label: "شرایط استفاده" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-3 text-gradient">
            میکروپلاستیک‌ها
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            مرجع علمی تعاملی فارسی درباره میکروپلاستیک‌ها و تأثیر آن‌ها بر
            انسان، محیط‌زیست و آینده زمین. تمام محتوا بر پایه منابع معتبر
            بین‌المللی.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">لینک‌های مفید</h4>
          <ul className="space-y-2 text-sm">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-slate-600 dark:text-slate-400 hover:text-turquoise-500 transition"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">منابع علمی مرجع</h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>🌍 WHO — سازمان جهانی بهداشت</li>
            <li>🌊 UNEP — برنامه محیط‌زیست سازمان ملل</li>
            <li>🔬 PubMed — پایگاه مقالات پزشکی</li>
            <li>📊 EPA — آژانس حفاظت محیط‌زیست</li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-slate-500">
        © ۱۴۰۴ — ساخته شده با 💙 برای زمین
      </div>
    </footer>
  );
}