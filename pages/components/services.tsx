"use client";

import { services } from "@/components/data/services";
import ServicePanel from "@/components/ui/ServicePanel";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          <span className="text-blue-600 dark:text-blue-400">Hizmetlerimiz</span> ile Tanışın
        </h2>
        <div className="space-y-4">
          {services.map((item, idx) => (
            <ServicePanel key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
