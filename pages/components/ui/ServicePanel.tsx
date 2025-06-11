"use client";

import { motion } from "framer-motion";
import CollapsiblePanel from "@/components/CollapsiblePanel";

type Props = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export default function ServicePanel({ icon: Icon, title, description }: Props) {
  return (
    <CollapsiblePanel
      title={
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span>{title}</span>
        </motion.div>
      }
    >
      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
    </CollapsiblePanel>
  );
}
