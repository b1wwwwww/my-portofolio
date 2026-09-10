"use client";

import { useEffect, useState } from "react";
import { Sparkles, Terminal } from "lucide-react";

const NAV_LINKS = [
  { label: "Tentang", href: "#about" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Proyek", href: "#projects" },
  { label: "Sertifikat", href: "#certificates" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#010504]/85 backdrop-blur-md border-b border-emerald-900/40 shadow-lg shadow-black/20" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 group font-mono font-bold tracking-tight text-white">
          <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
            <Terminal className="h-4 w-4" />
          </div>
          <span>nabil.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-emerald-100/60 hover:text-emerald-400 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-emerald-950/40 border border-emerald-800/50 px-3 py-1 text-xs text-emerald-400 font-mono">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available</span>
          </div>

          <a href="#projects" className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20">
            Hubungi
          </a>
        </div>
      </div>
    </header>
  );
}
