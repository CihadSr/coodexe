"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, Rocket } from "lucide-react";

const services = [
  {
    title: "Web Site Geliştirme",
    description: "Modern, hızlı ve SEO uyumlu web siteleri tasarlayıp geliştiriyoruz.",
    icon: Code2,
  },
  {
    title: "Tasarım Hizmetleri",
    description: "Kullanıcı dostu ve estetik tasarımlarla markanıza değer katıyoruz.",
    icon: Palette,
  },
  {
    title: "Mobil Uygulama",
    description: "iOS ve Android için performanslı mobil uygulamalar geliştiriyoruz.",
    icon: Smartphone,
  },
  {
    title: "Dijital Pazarlama",
    description: "Hedef kitlenize ulaşmanız için dijital reklam ve pazarlama stratejileri oluşturuyoruz.",
    icon: Rocket,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 bg-[#f8f8f8] dark:bg-[#1a1a1a] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          id="services-heading"
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400">Hizmetlerimiz</span> ile Tanışın
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map(({ title, description, icon: Icon }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 bg-white dark:bg-neutral-800 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {description.split(" ").map((word, i) =>
                  ["SEO", "tasarımlarla", "mobil", "dijital"].includes(word.replace(/[^a-zA-ZğüşöçİĞÜŞÖÇ]/g, "")) ? (
                    <span key={i} className="font-medium text-blue-600 dark:text-blue-400">{word} </span>
                  ) : (
                    <span key={i}>{word} </span>
                  )
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
