"use client";

import { motion } from "framer-motion";
import { CERTIFICATES } from "@/constants/data";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400">
            05 — Sertifikasi
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Sertifikasi & Pencapaian
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-xl border border-slate-700/50 bg-slate-800/20 p-6 backdrop-blur-sm hover:border-slate-600/70 transition-colors"
            >
              <div className="mb-3 text-xs font-semibold text-teal-400 uppercase tracking-widest">
                {cert.date}
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">{cert.title}</h3>
              <p className="text-sm text-slate-400">{cert.provider}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
