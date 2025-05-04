"use client";

import { motion } from "framer-motion";
import CollapsiblePanel from "@/components/CollapsiblePanel";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 max-w-3xl mx-auto">
      <CollapsiblePanel title="Hakkımızda">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg leading-relaxed space-y-6 text-neutral-800"
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
      </CollapsiblePanel>
    </section>
  );
}
