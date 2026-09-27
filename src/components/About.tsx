"use client";

import { motion } from "framer-motion";
import { ABOUT } from "@/constants/data";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-4">
              01 — {ABOUT.title}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl mb-8">
              Always building, always learning.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-slate-400">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-slate-300" : ""}>
                  {p}
                </p>
              ))}
            </div>
            
            <div className="mt-8 space-y-3 pt-8 border-t border-slate-700">
              {ABOUT.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-slate-500">{h.label}</span>
                  <span className="text-sm text-slate-300">{h.value}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square w-full max-w-sm mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-slate-800/20 rounded-2xl" />
            <div className="relative h-full w-full rounded-2xl border border-slate-700/50 bg-slate-800/10 flex items-center justify-center overflow-hidden">
              <div className="text-slate-600 font-mono text-sm">[ Reserved for photo ]</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


