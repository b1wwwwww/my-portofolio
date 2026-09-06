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
    <div className="relative flex overflow-hidden border-y border-slate-900 bg-slate-950">
      <motion.div
        className="flex shrink-0"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {duplicated.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="shrink-0 border-r border-slate-900 px-12 py-8 text-2xl font-bold tracking-tighter text-slate-800 hover:text-white transition-colors md:text-4xl"
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
    <section id="tech" className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-baseline gap-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
            02 / Tech Stack
          </p>
          <div className="h-px flex-1 bg-slate-800" />
          <p className="hidden sm:block text-sm text-slate-500">Infinite scroll</p>
        </motion.div>
      </div>

      <div>
        <MarqueeRow items={TECH_STACK} />
        <MarqueeRow items={[...TECH_STACK].reverse()} reverse />
      </div>
    </section>
  );
}
