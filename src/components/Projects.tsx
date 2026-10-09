"use client";

import { motion } from "framer-motion";
import { InteractiveHoverLinks } from "@/components/ui/interactive-hover-links";
import { PROJECTS } from "@/constants/data";

export default function Projects() {
  const projectLinks = PROJECTS.map((project) => ({
    heading: project.title,
    subheading: project.description,
    imgSrc: project.image || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    href: project.demo,
  }));

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400">
            03 — Projects
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Selected works
          </h2>
        </motion.div>

        <div className="rounded-xl border border-slate-700/50 bg-slate-800/20 backdrop-blur-sm overflow-visible">
          <InteractiveHoverLinks links={projectLinks} />
        </div>
      </div>
    </section>
  );
}

