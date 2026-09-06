"use client";

import { motion } from "framer-motion";
import { PROFILE } from "../constants/data";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-end bg-slate-950 pb-20 pt-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-blue-600/5 blur-[120px]" />
      </div>

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-blue-500/80">
            {PROFILE.role}
          </p>
          <h1 className="max-w-4xl text-6xl font-bold leading-[0.9] tracking-tighter text-white sm:text-8xl md:text-9xl">
            {PROFILE.name.split(" ").map((word, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="max-w-md text-lg leading-relaxed text-slate-400"
            >
              {PROFILE.bio}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-start md:justify-end"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-xs font-bold uppercase tracking-tighter text-white transition-transform hover:scale-110 active:scale-95">
                Scroll
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
