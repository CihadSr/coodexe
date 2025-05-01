"use client";

import {
  Search,
  LayoutTemplate,
  TerminalSquare,
  ClipboardCheck,
  Globe2,
  Trophy,
  ArrowRightCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

const steps = [
  {
    title: "İhtiyaç Analizi",
    subtitle: "1-2 Gün",
    description: [
      "Proje ihtiyaçlarınızı birebir görüşmelerle detaylı analiz ediyoruz.",
      "Hedeflerinizi ve iş potansiyelinizi keşfederek doğru yol haritası çıkarıyoruz.",
      "Size özel stratejik çözüm planı hazırlıyoruz.",
      "Projenizin daha baştan doğru temellerle ilerlemesini sağlıyoruz.",
    ],
    icon: Search,
  },
  {
    title: "Tasarım ve Prototip",
    subtitle: "2-4 Gün",
    description: [
      "Modern ve kullanıcı dostu tasarımlar oluşturuyoruz.",
      "İlk prototipleri onayınıza sunuyoruz ve revize taleplerinizi uyguluyoruz.",
      "Kullanıcı deneyimi odaklı prototiplerle projenizin etkisini artırıyoruz.",
      "Onay almadan geliştirme sürecine geçmiyoruz.",
    ],
    icon: LayoutTemplate,
  },
  {
    title: "Geliştirme",
    subtitle: "5-10 Gün",
    description: [
      "Projenizi en güncel teknolojilerle performanslı ve güvenli şekilde geliştiriyoruz.",
      "Mobil uyumluluk ve hızlı erişim için özel optimizasyonlar yapıyoruz.",
      "Ölçeklenebilir bir altyapı kurarak gelecekteki büyümenizi destekliyoruz.",
      "Her kod satırında kalite ve sürdürülebilirlik standartlarına uyuyoruz.",
    ],
    icon: TerminalSquare,
  },
  {
    title: "Test ve Yayınlama",
    subtitle: "2 Gün",
    description: [
      "Geliştirilen projeyi detaylı test süreçlerinden geçiriyoruz.",
      "Hataları ortadan kaldırıyor, performans optimizasyonlarını tamamlıyoruz.",
      "Projenizi sorunsuz şekilde yayına alıyoruz.",
      "Gerekli tüm entegrasyonları tamamlayarak teslim ediyoruz.",
    ],
    icon: ClipboardCheck,
  },
  {
    title: "Destek ve Gelişim",
    subtitle: "Süreklilik",
    description: [
      "Yayın sonrası teknik destek sunuyoruz.",
      "Yeni ihtiyaçlara göre güncellemeler ve iyileştirmeler yapıyoruz.",
      "İşletmenizin dijitalde sürdürülebilir büyümesi için yanınızdayız.",
      "Uzun vadeli iş ortaklığı hedefliyoruz.",
    ],
    icon: Globe2,
  },
  {
    title: "Başarıya Ulaştınız",
    subtitle: "Sonuç",
    description: [
      "Tüm aşamaları başarıyla tamamladınız.",
      "Şimdi dijitalde etkileyici bir varlığa sahipsiniz.",
      "Yolculuğunuzda yanınızda olmaktan gurur duyuyoruz.",
      "Birlikte başardık, daha fazlası için hazırız.",
    ],
    icon: Trophy,
  },
];

export default function Roadmap() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="roadmap"
      aria-labelledby="roadmap-heading"
      className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2
          id="roadmap-heading"
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-16"
        >
          Proje <span className="text-blue-600 dark:text-blue-400">Yol Haritamız</span>
        </h2>

        {!isMobile ? (
          <ol className="relative border-l border-gray-300 dark:border-gray-600">
            {steps.map(({ title, subtitle, description, icon: Icon }, index) => (
              <li key={index} className="mb-12 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full ring-4 ring-white dark:ring-neutral-900">
                  <Icon className="w-4 h-4 text-white" />
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {title}{" "}
                  <span className="ml-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                    ({subtitle})
                  </span>
                </h3>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                  {description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        ) : (
          <div className="overflow-x-auto relative">
            <div className="flex space-x-4 min-w-[600px] pb-2 snap-x snap-mandatory scroll-pl-4">
              {steps.map(({ title, subtitle, description, icon: Icon }, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-72 snap-center bg-blue-50 dark:bg-zinc-800 rounded-xl p-5 shadow-md border border-blue-200 dark:border-zinc-700 hover:scale-[1.02] transition-transform duration-300 ease-in-out relative"
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-blue-600 dark:bg-blue-400 rounded-full">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="ml-3 text-base font-semibold text-gray-900 dark:text-white">
                      {title}
                      <span className="block text-xs font-normal text-blue-600 dark:text-blue-400">
                        {subtitle}
                      </span>
                    </h3>
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {description.map((line, i) => (
                      <li key={i}>• {line}</li>
                    ))}
                  </ul>
                  {index === 0 && (
                    <ArrowRightCircle className="absolute -bottom-0 right-3 w-7 h-7 text-blue-500 dark:text-blue-400 animate-bounce" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
