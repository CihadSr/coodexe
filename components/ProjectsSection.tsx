"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projectsShowcase = [
  {
    title: "E-Ticarette Dönüşüm Hikayesi",
    description: "Kapsamlı kullanıcı deneyimi ve performans optimizasyonlarıyla satışlar %42 arttı.",
    impact: "Modern e-ticaret altyapısıyla ROI 2 katına çıktı.",
    image: "/images/emlak.png",
  },
  {
    title: "Kurumsal Güvenin Dijital Yansıması",
    description: "Prestijli bir web kimliğiyle marka algısı yeniden tanımlandı.",
    impact: "Arama görünürlüğü %200, güven puanı %95 yükseldi.",
    image: "/images/avukat.png",
  },
  {
    title: "Startup’lara Yatırımcı Etkisi",
    description: "Yüksek etkileşimli açılış sayfasıyla hedef kitleye tam isabet.",
    impact: "İlk hafta içinde 1000+ kayıt, %18 dönüşüm oranı.",
    image: "/images/restorant.png",
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full">
      {/* Üst Bölüm: Proje Vitrini */}
      <div className="py-24 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4"
          >
            Başarı Hikayelerimiz
          </motion.h2>

          <p className="text-center text-gray-500 dark:text-gray-400 mb-12 text-sm md:text-base">
            Bize sadece fikrinizden bahsedin ve arkanıza yaslanın. Biz bunun için varız.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsShowcase.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-white dark:bg-[#1b1b1b] rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-zinc-700 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {project.description}
                  </p>
                  <p className="text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                    {project.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
