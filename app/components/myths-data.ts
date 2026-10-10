export type Verdict = "myth" | "fact" | "depends";

export type MythItem = {
  statement: string;
  verdict: Verdict;
  explanation: string;
  sources: { name: string; url: string }[];
  evidenceLevel: "established" | "emerging" | "hypothesis" | "uncertain";
};

export const MYTHS_DATA: MythItem[] = [
  {
    statement: "میکروپلاستیک‌ها در همه غذاها و نوشیدنی‌ها وجود دارند.",
    verdict: "depends",
    explanation:
      "مطالعات نشان می‌دهد میکروپلاستیک‌ها در بسیاری از غذاها، آب، نمک، عسل و حتی هوا یافت می‌شوند. اما مقدار آن‌ها بسیار متفاوت است و در همه موارد یکسان نیست. در واقع می‌توان گفت «در بیشتر موارد یافت می‌شوند، ولی نه همه جا و نه به یک مقدار».",
    sources: [
      { name: "WHO — Microplastics in drinking-water", url: "https://www.who.int/publications/i/item/9789241516198" },
      { name: "Environmental Science & Technology (2019)", url: "https://pubs.acs.org/doi/10.1021/acs.est.9b02540" },
    ],
    evidenceLevel: "established",
  },
  {
    statement: "میکروپلاستیک‌ها باعث بیماری‌های جدی در انسان می‌شوند.",
    verdict: "depends",
    explanation:
      "مطالعات نشان داده‌اند میکروپلاستیک‌ها در بدن انسان یافت می‌شوند (خون، ریه، جفت)، اما هنوز شواهد قطعی برای اثبات اثرات مستقیم و جدی آن‌ها بر سلامت انسان وجود ندارد. این موضوع یکی از مهم‌ترین زمینه‌های در حال بررسی در علم است. بیایید محتاط باشیم: نه انکار کنیم و نه ادعای قطعی داشته باشیم.",
    sources: [
      { name: "WHO — Dietary and inhalation exposure to nano- and microplastic particles", url: "https://www.who.int/publications/i/item/9789240054608" },
      { name: "Environment International (2022)", url: "https://www.sciencedirect.com/journal/environment-international" },
    ],
    evidenceLevel: "emerging",
  },
  {
    statement: "بطری‌های پلاستیکی می‌توانند میکروپلاستیک در آب آزاد کنند.",
    verdict: "fact",
    explanation:
      "بله، مطالعات نشان داده‌اند بطری‌های پلاستیکی — به‌ویژه وقتی در معرض حرارت یا نور خورشید قرار بگیرند — می‌توانند ذرات میکروپلاستیک در آب آزاد کنند. مقدار آن بسته به نوع پلاستیک، دما و مدت نگهداری متفاوت است.",
    sources: [
      { name: "Journal of Hazardous Materials (2024)", url: "https://www.sciencedirect.com/journal/journal-of-hazardous-materials" },
      { name: "NIH — Microplastics in bottled water", url: "https://www.ncbi.nlm.nih.gov/" },
    ],
    evidenceLevel: "established",
  },
  {
    statement: "جوشاندن آب، میکروپلاستیک‌ها را کاملاً از بین می‌برد.",
    verdict: "myth",
    explanation:
      "جوشاندن آب به‌تنهایی نمی‌تواند میکروپلاستیک‌ها را کاملاً حذف کند. یک مطالعه جدید (۲۰۲۴) نشان داد که جوشاندن آب سخت (آب حاوی مواد معدنی) می‌تواند تا حدی این ذرات را کاهش دهد، اما ادعای «حذف کامل» نادرست است. فیلترهای مخصوص تصفیه آب می‌توانند مؤثرتر باشند.",
    sources: [
      { name: "Environmental Science & Technology Letters (2024)", url: "https://pubs.acs.org/journal/estlcu" },
    ],
    evidenceLevel: "emerging",
  },
  {
    statement: "میکروپلاستیک‌ها فقط در اقیانوس‌ها وجود دارند.",
    verdict: "myth",
    explanation:
      "میکروپلاستیک‌ها در اقیانوس‌ها، رودخانه‌ها، خاک، آب‌های زیرزمینی، هوا و حتی برف کوهستان‌های دورافتاده یافت شده‌اند. در واقع آن‌ها تقریباً در هر جای زمین حضور دارند — از قله‌های اورست تا عمیق‌ترین نقاط اقیانوس.",
    sources: [
      { name: "UNEP — Plastic Pollution", url: "https://www.unep.org/plastic-pollution" },
      { name: "Nature (2020)", url: "https://www.nature.com/" },
    ],
    evidenceLevel: "established",
  },
  {
    statement: "هر بار شست‌وشوی لباس‌های مصنوعی می‌تواند هزاران الیاف میکروپلاستیک آزاد کند.",
    verdict: "fact",
    explanation:
      "بله، مطالعات نشان می‌دهد هر بار شست‌وشوی لباس‌های مصنوعی (مثل پلی‌استر، نایلون و اکریلیک) می‌تواند تا ۷۰۰,۰۰۰ الیاف میکروپلاستیک آزاد کند. این الیاف از طریق فاضلاب وارد محیط‌زیست و آب‌ها می‌شوند.",
    sources: [
      { name: "Environmental Science & Technology (2016)", url: "https://pubs.acs.org/doi/10.1021/acs.est.6b03045" },
      { name: "UNEP — Fashion's plastic problem", url: "https://www.unep.org/" },
    ],
    evidenceLevel: "established",
  },
  {
    statement: "میکروبیدهای پلاستیکی در همه محصولات آرایشی استفاده می‌شوند.",
    verdict: "myth",
    explanation:
      "در بسیاری از کشورها (از جمله کشورهای اتحادیه اروپا و آمریکا) استفاده از میکروبیدهای پلاستیکی در محصولات آرایشی ممنوع شده است. با این حال، در برخی محصولات و در برخی کشورها همچنان ممکن است استفاده شوند. پس «همه» نادرست است.",
    sources: [
      { name: "European Environment Agency", url: "https://www.eea.europa.eu/" },
      { name: "US FDA — Microbeads", url: "https://www.fda.gov/" },
    ],
    evidenceLevel: "established",
  },
  {
    statement: "میکروپلاستیک‌ها می‌توانند به مغز انسان برسند.",
    verdict: "emerging",
    explanation:
      "مطالعات اخیر روی حیوانات نشان داده‌اند نانوپلاستیک‌ها می‌توانند از سد خونی-مغزی عبور کنند. یک مطالعه (۲۰۲۴) نشان داد ذرات میکروپلاستیک در بافت مغز انسان یافت شده‌اند. اما این موضوع همچنان در حال بررسی است و نیاز به تحقیقات بیشتر دارد.",
    sources: [
      { name: "Nature Medicine (2024)", url: "https://www.nature.com/nm/" },
      { name: "Science Advances", url: "https://www.science.org/journal/sciadv" },
    ],
    evidenceLevel: "emerging",
  },
  {
    statement: "پلاستیک‌ها به‌طور طبیعی در اقیانوس تجزیه می‌شوند و مشکلی ایجاد نمی‌کنند.",
    verdict: "myth",
    explanation:
      "پلاستیک‌ها به‌طور طبیعی به‌سختی تجزیه می‌شوند. به‌جای تجزیه کامل، آن‌ها به ذرات کوچک‌تر (میکروپلاستیک و نانوپلاستیک) تبدیل می‌شوند که صدها سال در محیط باقی می‌مانند و وارد زنجیره غذایی می‌شوند.",
    sources: [
      { name: "UNEP — Marine Litter", url: "https://www.unep.org/" },
      { name: "NOAA — Microplastics", url: "https://oceanservice.noaa.gov/facts/microplastics.html" },
    ],
    evidenceLevel: "established",
  },
  {
    statement: "میکروپلاستیک‌ها می‌توانند وارد جفت انسان شوند.",
    verdict: "fact",
    explanation:
      "بله، یک مطالعه (2021) نشان داد ذرات میکروپلاستیک در جفت انسان یافت شده‌اند. این یافته نگرانی‌هایی درباره اثرات احتمالی بر سلامت جنین ایجاد کرده، اما هنوز شواهد کافی برای اثبات خطر مستقیم وجود ندارد.",
    sources: [
      { name: "Environment International (2021)", url: "https://www.sciencedirect.com/journal/environment-international" },
    ],
    evidenceLevel: "emerging",
  },
];