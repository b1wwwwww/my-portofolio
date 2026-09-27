"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/constants/data";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center bg-transparent">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 text-sm font-mono text-teal-400 uppercase tracking-widest">Fullstack Developer</p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            {PROFILE.name}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
            {PROFILE.bio}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-teal-400 transition-colors">
              Lihat Karya
            </a>
            <a href="#about" className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-teal-400 hover:text-teal-400 transition-colors">
              Tentang Saya
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a href="https://github.com/b1wwwwww" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-500 hover:text-teal-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.68-.216.68-.48 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.893 1.53 2.341 1.088 2.91.833.09-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.944 0-1.09.39-1.98 1.03-2.676-.103-.254-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.75-1.026 2.75-1.026.546 1.376.202 2.392.1 2.646.64.696 1.03 1.586 1.03 2.676 0 3.842-2.337 4.687-4.565 4.935.359.31.679.92.679 1.852 0 1.336-.012 2.416-.012 2.747 0 .266.18.575.688.478A10.013 10.013 0 0022 12c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-teal-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.339 17.338V10.66H6.032v6.678h2.307zM7.186 9.5a1.34 1.34 0 110-2.68 1.34 1.34 0 010 2.68zM18 17.338v-3.63c0-1.956-1.046-2.86-2.438-2.86-1.118 0-1.61.62-1.886 1.058v-0.9H11.23c.03.59 0 6.334 0 6.334h2.306v-3.534c0-.188.013-.376.07-.51.153-.376.503-.768 1.09-.768.77 0 1.078.58 1.078 1.431v3.381H18z" />
              </svg>
            </a>
          </div>
        </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square w-full max-w-sm mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-slate-800/20 rounded-2xl" />
            <div className="relative h-full w-full rounded-2xl border border-slate-700/50 bg-slate-800/10 flex items-center justify-center overflow-hidden">
              <div className="text-slate-600 font-mono text-sm">[ foto profil ]</div>
            </div>
          </motion.div>
      </div>
    </section>
  );
}

