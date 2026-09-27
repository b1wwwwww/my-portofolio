"use client";

import React, { useState } from "react";
import { 
  Code2, LayoutGrid, Server, Wrench, Palette, ChevronDown
} from "lucide-react";

const SKILLS_DATA = [
  {
    title: "Language",
    icon: <Code2 className="w-5 h-5 text-teal-400" />,
    preview: [
      { name: "HTML", level: "ADVANCED", width: "90%" },
      { name: "CSS", level: "ADVANCED", width: "90%" },
    ],
    full: [
      { name: "HTML", level: "ADVANCED", width: "90%" },
      { name: "CSS", level: "ADVANCED", width: "90%" },
      { name: "JavaScript", level: "ADVANCED", width: "85%" },
      { name: "Python", level: "BEGINNER", width: "35%" },
      { name: "TypeScript", level: "INTERMEDIATE", width: "65%" },
    ],
  },
  {
    title: "Framework",
    icon: <LayoutGrid className="w-5 h-5 text-teal-400" />,
    preview: [
      { name: "React", level: "INTERMEDIATE", width: "70%" },
      { name: "Next.js", level: "BEGINNER", width: "40%" },
    ],
    full: [
      { name: "React", level: "INTERMEDIATE", width: "70%" },
      { name: "Next.js", level: "BEGINNER", width: "40%" },
      { name: "Tailwind CSS", level: "INTERMEDIATE", width: "75%" },
      { name: "Laravel", level: "INTERMEDIATE", width: "60%" },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5 text-teal-400" />,
    preview: [
      { name: "PHP", level: "INTERMEDIATE", width: "60%" },
    ],
    full: [
      { name: "PHP", level: "INTERMEDIATE", width: "60%" },
      { name: "Node.js", level: "INTERMEDIATE", width: "70%" },
    ],
  },
  {
    title: "Tooling",
    icon: <Wrench className="w-5 h-5 text-teal-400" />,
    preview: [
      { name: "Vite", level: "INTERMEDIATE", width: "70%" },
    ],
    full: [
      { name: "Vite", level: "INTERMEDIATE", width: "70%" },
      { name: "Git", level: "ADVANCED", width: "85%" },
    ],
  },
  {
    title: "Design App",
    icon: <Palette className="w-5 h-5 text-teal-400" />,
    preview: [
      { name: "Canva", level: "FOUNDATIONAL", width: "40%" },
    ],
    full: [
      { name: "Canva", level: "FOUNDATIONAL", width: "40%" },
      { name: "Figma", level: "FOUNDATIONAL", width: "35%" },
    ],
  },
];

function SkillCard({ category }: { category: typeof SKILLS_DATA[0] }) {
  const [expanded, setExpanded] = useState(false);
  const items = expanded ? category.full : category.preview;
  const hasMore = category.full.length > category.preview.length;

  return (
    <div className="border border-slate-700/50 rounded-xl p-6 bg-slate-800/20 hover:border-slate-600/70 transition-colors backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        {category.icon}
        <h3 className="font-semibold text-white">{category.title}</h3>
      </div>
      
      <div className="space-y-5">
        {items.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-300">{skill.name}</span>
              <span className="text-[10px] font-mono font-bold text-slate-600">{skill.level}</span>
            </div>
            <div className="h-2 w-full bg-slate-900/50 rounded-full overflow-hidden border border-slate-800/50">
              <div 
                className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"
                style={{ width: skill.width }}
              />
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors border border-teal-500/30 hover:border-teal-500/50 rounded-lg"
        >
          {expanded ? "Sembunyikan" : "Lihat Selengkapnya"}
          <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Keahlian & Teknologi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>

        <p className="text-center text-sm text-slate-500 mt-12 max-w-lg mx-auto italic">
          Saya terus mengasah skill melalui proyek nyata, pelatihan, dan eksperimen teknologi baru.
        </p>
      </div>
    </section>
  );
}
