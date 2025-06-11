"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  name: string;
  title: string;
  comment: string;
};

export default function TestimonialCard({ name, title, comment }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
    >
      <div className="flex items-center gap-1 mb-2 text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} />
        ))}
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{comment}</p>
      <p className="text-sm font-semibold text-neutral-800 dark:text-white">{name}</p>
      <p className="text-xs text-neutral-500">{title}</p>
    </motion.div>
  );
}
