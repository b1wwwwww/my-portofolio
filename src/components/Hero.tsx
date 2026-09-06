"use client";

import { motion } from "framer-motion";
import { PROFILE, TECH_STACK } from "../constants/data";

const codeLines = [
  { code: "const", value: " developer = {", color: "text-purple-400" },
  { code: "  name:", value: ` '${PROFILE.name}',`, color: "text-blue-400" },
  { code: "  skills:", value: ` ['${TECH_STACK.slice(0, 3).join("', '")}',`, color: "text-blue-400" },
  { code: "", value: `           '${TECH_STACK.slice(3, 6).join("', '")}',`, color: "text-slate-300" },
  { code: "", value: `           '${TECH_STACK.slice(6).join("', '") }'],`, color: "text-slate-300" },
  { code: "  hardWorker:", value: " true,", color: "text-blue-400" },
  { code: "  quickLearner:", value: " true,", color: "text-blue-400" },
  { code: "  problemSolver:", value: " true", color: "text-blue-400" },
  { code: "};", value: "", color: "text-purple-400" },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center bg-slate-950 pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-15" 
           style={{ backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            {PROFILE.role}
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tighter text-white md:text-5xl lg:text-6xl">
            {PROFILE.name.split(" ").map((w, i) => (
              <span key={i} className="block">
                {w}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-400">
            {PROFILE.bio}
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#projects"
              className="rounded-full bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-colors"
            >
              Lihat Karya
            </a>
            <a
              href="#about"
              className="rounded-full border border-slate-800 bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
            >
              Tentang Saya
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ rotate: 3, scale: 0.95, opacity: 0 }}
          animate={{ rotate: 3, scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          className="relative overflow-hidden rounded-2xl border-2 border-slate-800 bg-slate-900 shadow-[15px_15px_50px_rgba(0,0,0,0.6)] cursor-pointer"
        >
          <div className="flex items-center gap-1.5 border-b border-slate-800 bg-slate-900/80 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-3 font-mono text-xs text-slate-500">developer.js</span>
          </div>

          <div className="p-5 font-mono text-xs leading-6 md:text-sm">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                className="whitespace-pre"
              >
                <span className={line.color}>{line.code}</span>
                <span className="text-slate-300">{line.value}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
