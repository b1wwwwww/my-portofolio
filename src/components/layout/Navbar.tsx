"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/site-config";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3 shadow-[0_0_40px_rgba(37,99,235,0.06)]"
          : "bg-transparent py-5"
      )}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6">
        <a href="#home" className="group flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          <span className="font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
            Nabil.dev
          </span>
        </a>
        
        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full bg-slate-800/60 px-4 py-2 text-xs font-semibold text-white ring-1 ring-slate-700/50 hover:bg-slate-800 hover:ring-slate-700 transition-all"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
}
