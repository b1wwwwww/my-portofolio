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
    <div className="relative flex overflow-hidden">
      <motion.div
        className="flex shrink-0 gap-3 py-2"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {duplicated.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="shrink-0 rounded-full border border-slate-700/60 bg-slate-800/60 px-5 py-2.5 text-sm font-medium tracking-wide text-slate-200 backdrop-blur"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="tech" className="border-y border-slate-800 bg-slate-900 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-end justify-between gap-6"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Tech Stack
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Tools yang dipakai sehari-hari
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-slate-400 md:block">
            Minimal, cepat, fokus performa. Marquee infinite tanpa putus.
          </p>
        </motion.div>
      </div>

      <div className="space-y-3">
        <MarqueeRow items={TECH_STACK} />
        <MarqueeRow items={[...TECH_STACK].reverse()} reverse />
      </div>
    </section>
  );
}
