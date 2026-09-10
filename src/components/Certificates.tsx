"use client";

import { motion } from "framer-motion";
import { CERTIFICATES } from "@/constants/data";

export default function Certificates() {
  return (
    <section id="certificates" className="bg-[#010504] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Certificates
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
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
              className="rounded-2xl border border-emerald-900/40 bg-emerald-950/30 p-6 backdrop-blur"
            >
              <div className="mb-4 text-xs font-semibold text-emerald-400">
                {cert.date}
              </div>
              <h3 className="font-semibold text-white">{cert.title}</h3>
              <p className="mt-1 text-sm text-emerald-100/50">{cert.provider}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
