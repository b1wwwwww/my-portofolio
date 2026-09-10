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
    <section id="projects" className="bg-[#010504] py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            03 / Projects
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tighter text-white md:text-6xl">
            Selected works
          </h2>
        </motion.div>

        <div className="border-t border-emerald-900/30">
          {PROJECTS.map((project, idx) => (
            <motion.button
              key={project.id}
              onClick={() => setActive(project)}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="group flex w-full items-center justify-between border-b border-emerald-900/30 py-10 text-left transition-colors hover:bg-emerald-950/20 px-4 -mx-4"
            >
              <div className="flex items-baseline gap-6">
                <span className="text-sm font-mono text-emerald-800">
                  0{project.id}
                </span>
                <div>
                  <h3 className="text-2xl font-bold tracking-tighter text-white group-hover:text-emerald-400 transition-colors md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-emerald-100/40">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full border border-emerald-800/40 text-emerald-600 group-hover:bg-emerald-400 group-hover:text-slate-950 group-hover:border-emerald-400 transition-all">
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
              className="fixed inset-0 z-50 bg-[#010504]/80 backdrop-blur-md"
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
                className="w-full max-w-2xl overflow-hidden rounded-2xl border border-emerald-900/50 bg-[#022c22] shadow-2xl"
              >
                <div className="flex items-start justify-between p-8 border-b border-emerald-900/30">
                  <div>
                    <p className="text-xs font-mono text-emerald-400">
                      0{active.id} — DETAIL
                    </p>
                    <h3 className="mt-1 text-2xl font-bold tracking-tighter text-white">
                      {active.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActive(null)}
                    className="rounded-full border border-emerald-800 p-2 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-8">
                  <div className="aspect-video rounded-xl bg-emerald-950 flex items-center justify-center text-emerald-800">
                    Thumbnail
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-emerald-100/60">
                    {active.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeholder detail proyek.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.tech.map((t) => (
                      <span key={t} className="rounded-full bg-emerald-950 px-3 py-1 text-xs font-medium text-emerald-200 ring-1 ring-emerald-800">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex gap-3">
                    <a href={active.demo} className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-emerald-400 transition-colors">
                      <ExternalLink className="h-4 w-4" /> Demo
                    </a>
                    <a href={active.github} className="flex-1 inline-flex items-center justify-center rounded-full border border-emerald-700 bg-transparent px-5 py-3 text-sm font-bold text-white hover:bg-emerald-900/50 transition-colors">
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
