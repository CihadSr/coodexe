"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-[#0f0f0f] text-gray-800 dark:text-gray-100 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Neden Buradayız?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg leading-relaxed space-y-6"
        >
          <p>
            <strong>Coodexe</strong>, dijitalin hızla değişen dünyasında fark yaratmak isteyen girişimlerin teknoloji ortağıdır.
            Biz, sıradan çözümleri değil; <em>oyun değiştirici deneyimleri</em> tasarlarız.
          </p>
          <p>
            Yeni nesil işletmeler için modern, hızlı ve etkili dijital ürünler geliştiriyoruz.
            İşimizi yaparken sadece satır satır kod değil, her satıra bir <strong>vizyon</strong> yüklüyoruz.
          </p>
          <p>
            Hedefimiz, markanızı yalnızca bugüne değil, <strong>geleceğe</strong> de hazırlamak.
            Çünkü biliyoruz ki: <em>Geleceği bugünden inşa edenler kazanacak.</em>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
