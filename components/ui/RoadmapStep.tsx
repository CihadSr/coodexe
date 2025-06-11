"use client";

import { motion } from "framer-motion";

type Props = {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string[];
};

export default function RoadmapStep({ icon: Icon, title, subtitle, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
    >
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-6 h-6 text-primary" />
        <h3 className="font-bold text-lg text-neutral-800 dark:text-white">{title}</h3>
      </div>
      <p className="text-sm text-neutral-500 mb-3">{subtitle}</p>
      <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
        {description.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
    </motion.div>
  );
}
