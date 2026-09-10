"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { PROFILE, TECH_STACK } from "@/constants/data";

const codeLines = [
  { code: "const", value: " developer = {", color: "text-emerald-400" },
  { code: "  name:", value: ` '${PROFILE.name}',`, color: "text-amber-300" },
  { code: "  skills:", value: ` ['${TECH_STACK.slice(0, 3).join("', '")}',`, color: "text-amber-300" },
  { code: "", value: `           '${TECH_STACK.slice(3, 5).join("', '")}',`, color: "text-amber-300" },
  { code: "", value: `           '${TECH_STACK.slice(5).join("', '") }'],`, color: "text-amber-300" },
  { code: "  hardWorker:", value: " true,", color: "text-emerald-400" },
  { code: "  quickLearner:", value: " true,", color: "text-emerald-400" },
  { code: "  problemSolver:", value: " true", color: "text-emerald-400" },
  { code: "};", value: "", color: "text-emerald-50" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<React.CSSProperties>({});
  const [glare, setGlare] = useState<React.CSSProperties>({ opacity: 0 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const halfW = r.width / 2;
    const halfH = r.height / 2;
    const rotateX = (y - halfH) / halfH * -10;
    const rotateY = (x - halfW) / halfW * 10;
    setTilt({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease-out",
    });
    setGlare({
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.20) 0%, transparent 60%)`,
      opacity: 1,
    });
  };

  const onLeave = () => {
    setTilt({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s ease-out",
    });
    setGlare({ opacity: 0 });
  };

  return (
    <section id="home" className="relative flex min-h-[70vh] items-center bg-transparent pt-28 pb-16">
      {/* subtle unified grid behind hero */}
      <div className="absolute inset-0 z-0 section-grid" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-[1.1fr_1fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-2 text-sm font-mono text-emerald-400">Hello, I&apos;m</p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tighter text-white md:text-5xl lg:text-6xl">
            {PROFILE.name.split(" ").map((w, i) => (
              <span key={i} className="block">{w}</span>
            ))}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
            {PROFILE.bio}
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="rounded-full bg-emerald-500/10 border border-emerald-500/50 px-5 py-2 text-xs font-semibold text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-colors">
              Lihat Karya
            </a>
            <a href="#about" className="rounded-full border border-emerald-800/50 px-5 py-2 text-xs font-semibold text-emerald-100/60 hover:border-emerald-400 hover:text-emerald-400 transition-colors">
              Tentang Saya
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-emerald-100/40 hover:text-emerald-400 transition transform hover:scale-110 duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.68-.216.68-.48 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.893 1.53 2.341 1.088 2.91.833.09-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.944 0-1.09.39-1.98 1.03-2.676-.103-.254-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.75-1.026 2.75-1.026.546 1.376.202 2.392.1 2.646.64.696 1.03 1.586 1.03 2.676 0 3.842-2.337 4.687-4.565 4.935.359.31.679.92.679 1.852 0 1.336-.012 2.416-.012 2.747 0 .266.18.575.688.478A10.013 10.013 0 0022 12c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-emerald-100/40 hover:text-emerald-400 transition transform hover:scale-110 duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.339 17.338V10.66H6.032v6.678h2.307zM7.186 9.5a1.34 1.34 0 110-2.68 1.34 1.34 0 010 2.68zM18 17.338v-3.63c0-1.956-1.046-2.86-2.438-2.86-1.118 0-1.61.62-1.886 1.058v-0.9H11.23c.03.59 0 6.334 0 6.334h2.306v-3.534c0-.188.013-.376.07-.51.153-.376.503-.768 1.09-.768.77 0 1.078.58 1.078 1.431v3.381H18z" />
              </svg>
            </a>
          </div>
        </motion.div>

        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={tilt}
          className="tilt-wrapper"
        >
          <div className="tilt-glare" style={glare} />
          <div className="code-wrapper">
            <div className="code-inner">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="whitespace-pre"
                >
                  <span className={line.color}>{line.code}</span>
                  <span className="text-slate-200">{line.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
