"use client";

import { motion } from "framer-motion";
import { ABOUT } from "@/constants/data";

export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-15" 
           style={{ backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
              01 / {ABOUT.title}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-6xl">
              Always building, <br /> always learning.
            </h2>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-slate-400">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-slate-200" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <motion.div
              initial={{ rotate: -6, scale: 0.9, opacity: 0 }}
              whileInView={{ rotate: -3, scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square w-full max-w-sm overflow-hidden rounded-3xl border-4 border-slate-800 bg-slate-900 shadow-[20px_20px_60px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
              <div className="flex h-full items-center justify-center text-slate-600 font-mono text-sm uppercase">
                [ Profile / About ]
              </div>
              
              <div className="absolute top-4 left-4 h-2 w-2 rounded-full bg-slate-700" />
              <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-slate-700" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 h-24 w-24 rounded-2xl bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
