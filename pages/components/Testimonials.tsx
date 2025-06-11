"use client";

import { testimonials } from "@/components/data/testimonials";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-neutral-100 dark:bg-neutral-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-12">
          Müşteri Yorumları
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
