"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
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
    <section id="projects" className="bg-slate-900 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Projects
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Karya terpilih
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
            Grid bento minimal. Klik kartu untuk detail — modal scale + backdrop blur, tanpa pindah halaman.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {PROJECTS.map((project, idx) => (
            <motion.button
              key={project.id}
              onClick={() => setActive(project)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/40 text-left backdrop-blur transition-colors hover:border-slate-700 hover:bg-slate-800/60"
            >
              <div className="aspect-[16/10] bg-slate-700/50 flex items-center justify-center border-b border-slate-800">
                <span className="text-sm font-medium text-slate-500">
                  Thumbnail
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold tracking-tight text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
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
              className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ type: "spring", damping: 24, stiffness: 260 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
              onClick={() => setActive(null)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
              >
                <div className="flex items-start justify-between gap-4 border-b border-slate-800 p-6">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-white">
                      {active.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {active.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setActive(null)}
                    aria-label="Close"
                    className="shrink-0 rounded-full border border-slate-700 p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="overflow-auto p-6">
                  <div className="aspect-[16/9] rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <span className="text-sm text-slate-500">Thumbnail besar</span>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-slate-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeholder detail proyek. Ganti dengan deskripsi asli nanti. Fokus layout tetap rapi, whitespace lega, hierarki jelas.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 border-t border-slate-800 p-6">
                  <a
                    href={active.demo}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-600 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                  <a
                    href={active.github}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
