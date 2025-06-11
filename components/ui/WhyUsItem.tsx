"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyUsItem({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-start gap-4 bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:shadow-lg transition"
    >
      <CheckCircle className="text-emerald-500 mt-1 w-5 h-5 shrink-0" />
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-neutral-300 mt-1">{desc}</p>
      </div>
    </motion.div>
  );
}
