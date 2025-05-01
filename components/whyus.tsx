"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "Modern ve Yenilikçi Çözümler",
    desc: "Her projeye özel, güncel teknolojilerle geliştirilen dijital çözümler sunuyoruz."
  },
  {
    title: "Müşteri Odaklı Yaklaşım",
    desc: "İhtiyaçlarınıza tam anlamıyla uyum sağlayan, işinize değer katan çözümler geliştiriyoruz."
  },
  {
    title: "Performans ve Güvenlik Önceliği",
    desc: "Hızlı, güvenli ve ölçeklenebilir yapılarla işinizi dijitalde sorunsuz büyütüyoruz."
  },
  {
    title: "Dijitalde Büyümeye Odaklıyız",
    desc: "Sadece proje geliştirmiyor, işinizi dijitalde bir adım öne taşıyoruz."
  }
];

export default function WhyUs() {
  return (
    <section
      id="whyus"
      aria-labelledby="whyus-heading"
      className="py-24 min-h-[80vh] bg-gray-50 dark:bg-neutral-900 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2
          id="whyus-heading"
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-16"
        >
          Neden <span className="text-blue-600 dark:text-blue-400">Bizi</span> Seçmelisiniz?
        </h2>

        <ul className="flex flex-col gap-8 text-left">
          {reasons.map(({ title, desc }, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group flex items-start gap-4 bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <CheckCircle className="w-7 h-7 text-green-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {desc}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
