"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  impact: string;
  image: string;
};

export default function ProjectCard({ title, description, impact, image }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
    >
      <Image src={image} alt={title} width={800} height={500} className="w-full h-auto object-cover" />
      <div className="p-6 space-y-2">
        <h3 className="text-lg font-bold text-neutral-800 dark:text-white">{title}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
        <p className="text-xs text-emerald-600 mt-2 font-medium">{impact}</p>
      </div>
    </motion.div>
  );
}
