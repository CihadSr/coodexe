"use client";

import CollapsiblePanel from "@/components/CollapsiblePanel";
import { Code2, Palette, Smartphone, Rocket } from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          <span className="text-blue-600 dark:text-blue-400">Hizmetlerimiz</span> ile Tanışın
        </h2>

        {/* Web Geliştirme */}
        <CollapsiblePanel
          title={
            <div className="flex items-center gap-3">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Web Site Geliştirme</span>
            </div>
          }
        >
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Coodexe olarak modern, hızlı ve arama motorlarıyla uyumlu web siteleri geliştiriyoruz.
            Geliştirdiğimiz yapılar; responsive, erişilebilir ve SEO dostudur.
            Her proje öncesinde detaylı ihtiyaç analizi yapar, özel çözümler sunarız.
          </p>
        </CollapsiblePanel>

        {/* Tasarım Hizmetleri */}
        <CollapsiblePanel
          title={
            <div className="flex items-center gap-3">
              <Palette className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Tasarım Hizmetleri</span>
            </div>
          }
        >
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Markanızın kimliğini yansıtan, kullanıcı dostu ve estetik arayüzler tasarlıyoruz.
            UI/UX prensiplerine uygun tasarımlar ile kullanıcı etkileşimini artırıyor,
            dijital görünümünüzü güçlendiriyoruz.
          </p>
        </CollapsiblePanel>

        {/* Mobil Uygulama */}
        <CollapsiblePanel
          title={
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Mobil Uygulama Geliştirme</span>
            </div>
          }
        >
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            iOS ve Android platformlarında çalışan, yüksek performanslı mobil uygulamalar geliştiriyoruz.
            React Native ve modern teknolojilerle mobil erişimi kolaylaştırıyor,
            markanızı cebinize taşıyoruz.
          </p>
        </CollapsiblePanel>

        {/* Dijital Pazarlama */}
        <CollapsiblePanel
          title={
            <div className="flex items-center gap-3">
              <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Dijital Pazarlama</span>
            </div>
          }
        >
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Hedef kitlenize ulaşmanız için dijital reklam, sosyal medya yönetimi ve dönüşüm optimizasyonu hizmetleri sunuyoruz.
            Veriye dayalı stratejilerle reklam bütçenizi verimli kullanır, geri dönüşümlerinizi artırırız.
          </p>
        </CollapsiblePanel>
      </div>
    </section>
  );
}
