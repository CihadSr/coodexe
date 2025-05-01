"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Burak Yıldız",
    title: "Girişimci | Kurucu, Dijimatik",
    comment:
      "Coodexe ile çalışmak işimizi bir üst seviyeye taşıdı. Hem hızlı hem de gerçekten güven veren bir süreç yaşadık.",
  },
  {
    name: "Ayşe Koç",
    title: "Diyetisyen",
    comment:
      "Tasarım, hız ve destek açısından beklentimin çok üzerinde bir hizmet aldım. Her aşamada bilgilendirildim.",
  },
  {
    name: "Emre Can",
    title: "Eğitim Danışmanı",
    comment:
      "SEO sonuçlarımız gözle görülür şekilde iyileşti. Süreç boyunca ulaşılabilir olmak harikaydı.",
  },
];

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-24 bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-white transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Müşterilerimizin <span className="text-blue-600 dark:text-blue-400">Görüşleri</span>
        </h2>

        <div
          className={`grid ${
            isMobile ? "grid-cols-1 gap-8" : "grid-cols-3 gap-6"
          } justify-items-center`}
        >
          {testimonials.map(({ name, title, comment }, i) => (
            <div
              key={i}
              className="relative bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-zinc-700 max-w-sm flex flex-col gap-4"
            >
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">"{comment}"</p>
              <div className="pt-4 border-t border-gray-200 dark:border-zinc-700">
                <p className="font-semibold text-sm text-gray-900 dark:text-white">{name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}