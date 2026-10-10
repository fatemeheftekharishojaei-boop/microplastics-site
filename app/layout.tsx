import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "میکروپلاستیک‌ها | مرجع علمی تعاملی فارسی",
  description:
    "مرجع جامع فارسی درباره میکروپلاستیک‌ها، نانوپلاستیک‌ها و تأثیر آن‌ها بر بدن انسان، محیط‌زیست و آینده زمین؛ بر پایه منابع علمی معتبر.",
  keywords: [
    "میکروپلاستیک",
    "نانوپلاستیک",
    "میکروپلاستیک چیست",
    "میکروپلاستیک در آب",
    "میکروپلاستیک و سلامت",
    "آلودگی پلاستیکی",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}