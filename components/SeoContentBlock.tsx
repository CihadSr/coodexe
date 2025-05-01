"use client";

import { Search, BarChart3, Smartphone, FileSearch, Link2, Code2 } from "lucide-react";

export default function SeoContentBlock() {
  return (
    <section
      id="seo"
      className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6 text-gray-800 dark:text-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Arama Motorları İçin <span className="text-blue-600 dark:text-blue-400">Optimizasyon</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-base leading-relaxed">
          <div className="space-y-6">
            <p>
              Web siteniz yalnızca güzel görünmekle kalmamalı, aynı zamanda Google gibi arama motorlarında da kolayca bulunabilir olmalıdır. SEO (Arama Motoru Optimizasyonu) tam da bu noktada devreye girer.
            </p>
            <p>
              Coodexe olarak sitenizi Google'ın en güncel algoritmalarına uygun şekilde yapılandırıyoruz. Başlık etiketleri, meta açıklamaları, semantik HTML, mobil uyumluluk ve sayfa hızları gibi onlarca faktörü detaylıca optimize ediyoruz.
            </p>
          </div>

          <div className="space-y-6">
            <p>
              Ayrıca teknik SEO, içerik stratejisi ve backlink analizleri gibi profesyonel desteklerle markanızın dijital görünürlüğünü artırıyoruz. Tüm süreç boyunca şeffaf raporlamalarla gelişimi birlikte takip ediyoruz.
            </p>
            <p>
              Arama sonuçlarında üst sıralarda yer almak için yalnızca içerik değil, yapı da önemlidir. İşte biz bu yapıyı kusursuz kurmak için buradayız.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-blue-500" />
            <span className="text-sm">Anahtar Kelime Analizi</span>
          </div>
          <div className="flex items-center gap-3">
            <Smartphone className="w-5 h-5 text-blue-500" />
            <span className="text-sm">Mobil Uyumluluk</span>
          </div>
          <div className="flex items-center gap-3">
            <BarChart3 className="w-5 h-5 text-blue-500" />
            <span className="text-sm">Sayfa Hızı Optimizasyonu</span>
          </div>
          <div className="flex items-center gap-3">
            <Code2 className="w-5 h-5 text-blue-500" />
            <span className="text-sm">Semantik HTML</span>
          </div>
          <div className="flex items-center gap-3">
            <Link2 className="w-5 h-5 text-blue-500" />
            <span className="text-sm">Backlink & Otorite</span>
          </div>
          <div className="flex items-center gap-3">
            <FileSearch className="w-5 h-5 text-blue-500" />
            <span className="text-sm">Yapısal Veri Kullanımı</span>
          </div>
        </div>
      </div>
    </section>
  );
}