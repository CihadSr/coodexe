"use client";

import { motion } from "framer-motion";

type Props = {
  icon: React.ElementType;
  title: string;
  text: string;
};

export default function SeoFeatureItem({ icon: Icon, title, text }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="flex items-start gap-4"
    >
      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
      <div>
        <h3 className="font-semibold text-base text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{text}</p>
      </div>
    </motion.div>
  );
}
