"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/constants/data";

type Project = (typeof PROJECTS)[number];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="projects" className="bg-slate-950 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
            03 / Projects
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tighter text-white md:text-6xl">
            Selected works
          </h2>
        </motion.div>

        <div className="border-t border-slate-800">
          {PROJECTS.map((project, idx) => (
            <motion.button
              key={project.id}
              onClick={() => setActive(project)}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="group flex w-full items-center justify-between border-b border-slate-800 py-10 text-left transition-colors hover:bg-slate-900/50 px-4 -mx-4"
            >
              <div className="flex items-baseline gap-6">
                <span className="text-sm font-mono text-slate-600">
                  0{project.id}
                </span>
                <div>
                  <h3 className="text-2xl font-bold tracking-tighter text-white group-hover:text-blue-400 transition-colors md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 text-slate-500 group-hover:bg-white group-hover:text-slate-900 group-hover:border-white transition-all">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setActive(null)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl"
              >
                <div className="flex items-start justify-between p-8 border-b border-slate-800">
                  <div>
                    <p className="text-xs font-mono text-blue-500">
                      0{active.id} — DETAIL
                    </p>
                    <h3 className="mt-1 text-2xl font-bold tracking-tighter text-white">
                      {active.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActive(null)}
                    className="rounded-full border border-slate-700 p-2 text-slate-400 hover:bg-white hover:text-slate-900 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-8">
                  <div className="aspect-video rounded-xl bg-slate-800 flex items-center justify-center text-slate-500">
                    Thumbnail
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-slate-400">
                    {active.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeholder detail proyek.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.tech.map((t) => (
                      <span key={t} className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex gap-3">
                    <a href={active.demo} className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-200 transition-colors">
                      <ExternalLink className="h-4 w-4" /> Demo
                    </a>
                    <a href={active.github} className="flex-1 inline-flex items-center justify-center rounded-full border border-slate-700 bg-transparent px-5 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
