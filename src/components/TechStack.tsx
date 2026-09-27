"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/constants/data";

function MarqueeRow({
  items,
  reverse,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const duplicated = [...items, ...items, ...items, ...items];
  return (
    <div className="relative flex overflow-hidden border-y border-slate-800/50 bg-slate-900/10">
      <motion.div
        className="flex shrink-0"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {duplicated.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="shrink-0 border-r border-slate-800/50 px-12 py-8 text-2xl font-bold tracking-tighter text-slate-700 hover:text-teal-400 transition-colors md:text-4xl"
          >
            {tech.toUpperCase()}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="tech" className="py-16">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-baseline gap-4"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400">
            02 — Tech Stack
          </p>
          <div className="h-px flex-1 bg-slate-800/50" />
        </motion.div>
      </div>

      <div className="space-y-0">
        <MarqueeRow items={TECH_STACK} />
        <MarqueeRow items={[...TECH_STACK].reverse()} reverse />
      </div>
    </section>
  );
}
