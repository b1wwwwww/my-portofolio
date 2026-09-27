"use client";

import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/constants/data";
import { Award } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400">
            Pencapaian
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Sertifikasi & Penghargaan
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {ACHIEVEMENTS.map((achievement, idx) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-xl border border-slate-700/50 bg-slate-800/20 p-6 backdrop-blur-sm hover:border-slate-600/70 transition-colors group"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                  <Award className="h-5 w-5" />
                </div>
                <div className="text-xs font-semibold text-teal-400 uppercase tracking-widest">
                  {achievement.date}
                </div>
              </div>
              <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-teal-400 transition-colors">{achievement.title}</h3>
              <p className="text-sm text-slate-400">{achievement.provider}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
