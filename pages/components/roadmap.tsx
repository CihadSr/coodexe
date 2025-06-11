"use client";

import { steps } from "@/components/data/roadmapSteps";
import RoadmapStep from "@/components/ui/RoadmapStep";

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-12">
          Sürecimiz Nasıl İşliyor?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {steps.map((step, idx) => (
            <RoadmapStep key={idx} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
