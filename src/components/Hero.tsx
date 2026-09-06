"use client";

import { motion } from "framer-motion";
import { PROFILE } from "../constants/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {PROFILE.name}
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-lg">
            {PROFILE.bio}
          </p>
          <button className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-200 transition-colors">
            Download CV
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="aspect-square bg-slate-800 rounded-3xl flex items-center justify-center border border-slate-700"
        >
          <span className="text-slate-600 font-medium">Foto Profil</span>
        </motion.div>
      </div>
    </section>
  );
}
