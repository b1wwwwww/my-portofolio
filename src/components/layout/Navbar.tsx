"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all ${scrolled ? "bg-[#0b1121]/80 backdrop-blur-md border-b border-[#1e293b]" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-mono font-bold text-white tracking-tight">Nabil.dev</a>
        <nav className="hidden md:flex gap-6">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-mono text-slate-400 hover:text-[#38bdf8] transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/10 px-4 py-1.5 text-xs font-semibold text-[#38bdf8] hover:bg-[#38bdf8] hover:text-[#0b1121] transition-colors">Let&apos;s talk</a>
      </div>
    </header>
  );
}
