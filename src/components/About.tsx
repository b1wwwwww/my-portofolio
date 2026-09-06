"use client";

import { motion } from "framer-motion";
import { ABOUT, PROFILE } from "@/constants/data";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[80px]" />
        <div className="absolute -bottom-40 right-0 h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[70px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 md:grid-cols-5 md:items-start"
        >
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              About
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {ABOUT.title} — {PROFILE.name}
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-slate-200" : "text-slate-400"}>
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {ABOUT.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    {h.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">{h.value}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-[0_0_40px_rgba(37,99,235,0.12)]">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/15 blur-2xl" />
              <p className="text-sm font-semibold text-white">Demo About</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Ganti bagian ini dengan cerita asli. Layout sudah siap: glow biru futuristik halus, tidak neon berlebihan, border tipis, whitespace lega.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Next.js", "React", "Node.js", "Kotlin"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="#projects"
                className="mt-6 inline-flex rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:bg-blue-600 transition-colors"
              >
                Lihat Projects
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
