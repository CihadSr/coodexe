"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

type Props = {
  title: React.ReactNode; // <— JSX destekli başlıklar için doğru olan bu
  children: React.ReactNode;
};


export default function CollapsiblePanel({ title, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-neutral-200 rounded-xl overflow-hidden mb-4 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 bg-neutral-100 hover:bg-neutral-200 flex justify-between items-center text-left transition"
      >
        <h3 className="text-base font-medium text-neutral-800">{title}</h3>
        {open ? <Minus size={18} /> : <Plus size={18} />}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white px-4 py-4 text-neutral-700 text-sm leading-relaxed"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
