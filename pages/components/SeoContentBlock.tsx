"use client";

import CollapsiblePanel from "@/components/CollapsiblePanel";
import { seoPoints } from "@/components/data/seoInfo";
import SeoFeatureItem from "@/components/ui/SeoFeatureItem";

export default function SeoContentBlock() {
  return (
    <section id="seo" className="py-20 bg-white dark:bg-neutral-900 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6 text-gray-800 dark:text-gray-200">
        <CollapsiblePanel title="Arama Motorları İçin Optimizasyon">
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {seoPoints.map((item, idx) => (
              <SeoFeatureItem key={idx} {...item} />
            ))}
          </div>
        </CollapsiblePanel>
      </div>
    </section>
  );
}
