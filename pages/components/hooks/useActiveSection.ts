"use client";

import { useEffect, useRef, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.current!.observe(el!));
    return () => observer.current?.disconnect();
  }, [sectionIds]);

  return activeSection;
}
