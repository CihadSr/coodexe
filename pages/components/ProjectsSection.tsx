"use client";

import { projectsShowcase } from "@/components/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-neutral-100 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 dark:text-white mb-12">
          Başarı Hikayeleri
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projectsShowcase.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
