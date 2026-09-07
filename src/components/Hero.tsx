"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { PROFILE, TECH_STACK } from "@/constants/data";

const codeLines = [
  { code: "const", value: " developer = {", color: "text-[#38bdf8]" },
  { code: "  name:", value: ` '${PROFILE.name}',`, color: "text-[#a78bfa]" },
  { code: "  skills:", value: ` ['${TECH_STACK.slice(0, 3).join("', '")}',`, color: "text-[#a78bfa]" },
  { code: "", value: `           '${TECH_STACK.slice(3, 5).join("', '")}',`, color: "text-[#a78bfa]" },
  { code: "", value: `           '${TECH_STACK.slice(5).join("', '") }'],`, color: "text-[#a78bfa]" },
  { code: "  hardWorker:", value: " true,", color: "text-[#38bdf8]" },
  { code: "  quickLearner:", value: " true,", color: "text-[#38bdf8]" },
  { code: "  problemSolver:", value: " true", color: "text-[#38bdf8]" },
  { code: "};", value: "", color: "text-slate-200" },
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
          <p className="mb-2 text-sm text-slate-200">Hello, I&apos;m</p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tighter text-white md:text-5xl lg:text-6xl">
            {PROFILE.name.split(" ").map((w, i) => (
              <span key={i} className="block">{w}</span>
            ))}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
            {PROFILE.bio}
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="rounded-full bg-[#38bdf8]/10 border border-[#38bdf8] px-5 py-2 text-xs font-semibold text-[#38bdf8] hover:bg-[#38bdf8] hover:text-[#0b1121] transition-colors">
              Lihat Karya
            </a>
            <a href="#about" className="rounded-full border border-slate-700 px-5 py-2 text-xs font-semibold text-slate-300 hover:border-white hover:text-white transition-colors">
              Tentang Saya
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
