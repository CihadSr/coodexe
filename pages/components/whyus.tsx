"use client";

import { reasons } from "@/components/data/reasons";
import WhyUsItem from "@/components/ui/WhyUsItem";

export default function WhyUs() {
  return (
    <section
      id="whyus"
      aria-labelledby="whyus-heading"
      className="py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 id="whyus-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Neden <span className="text-primary">Coodexe</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {reasons.map((item, idx) => (
            <WhyUsItem key={idx} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
