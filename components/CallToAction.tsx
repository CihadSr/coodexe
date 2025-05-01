"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-emerald-600 to-green-500 text-white text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Dijital Dönüşümün İçin Hazır mısın?
        </h2>
        <p className="text-lg mb-8">
          Güçlü bir dijital varlık oluşturmak, markanı büyütmek ve dönüşüm sağlamak için bizimle iletişime geç.
        </p>
        <Link
          href="#contact"
          className="inline-block bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300"
        >
          İletişime Geç
        </Link>
      </motion.div>
    </section>
  );
}
