"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { CheckCircle, Clock, Lightbulb } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-neutral-950 text-white py-24 px-6 scroll-mt-24">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side - CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold leading-tight text-white">
            Dijital Dönüşümün İçin Hazır mısın?
          </h2>
          <p className="text-lg text-neutral-300">
            Markanı geleceğe taşıyacak profesyonel çözümler için bizimle iletişime geç. Formu doldur, sana özel fırsatları birlikte değerlendirelim.
          </p>
          <ul className="space-y-3 text-neutral-300 pt-2">
  <li className="flex items-center gap-3">
    <Clock className="w-5 h-5 text-emerald-400" />
    Hızlı geri dönüş
  </li>
  <li className="flex items-center gap-3">
    <Lightbulb className="w-5 h-5 text-emerald-400" />
    Sana özel strateji
  </li>
  <li className="flex items-center gap-3">
    <CheckCircle className="w-5 h-5 text-emerald-400" />
    Güvenilir süreç yönetimi
  </li>
</ul>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <ContactForm />
        </motion.div>

      </div>
    </section>
  );
}
