"use client";

import { Terminal, Menu, X, LayoutGrid } from "lucide-react";
import { useState, useEffect } from "react";
import { useLayout } from "@/context/LayoutContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { mode, toggleMode } = useLayout();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 w-full z-[55] transition-all duration-300 ${scrolled ? "bg-[#010504]/80 backdrop-blur-xl border-b border-emerald-900/20 shadow-lg shadow-black/20" : "bg-transparent"}`}>
      <div className="mx-auto flex items-center justify-between px-6 py-4">
        {/* Mobile Logo */}
        <a href="#home" className="lg:hidden flex items-center gap-2 group font-mono font-bold tracking-tight text-white">
          <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Terminal className="h-4 w-4" />
          </div>
          <span>nabil.dev</span>
        </a>

        {/* Desktop Title / Breadcrumb */}
        <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-emerald-100/40">
          <span className="hover:text-emerald-400 transition-colors cursor-default underline decoration-emerald-500/20 underline-offset-4">ID</span>
          <span className="text-emerald-900">/</span>
          <span className="text-emerald-100/80 italic">Portofolio</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleMode}
            className="hidden md:flex items-center justify-center p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all"
            title={mode === "top" ? "Ubah ke mode samping" : "Ubah ke mode atas"}
          >
            <LayoutGrid className="h-5 w-5" />
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-emerald-400">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          <a href="#contact" className="hidden sm:flex rounded-full bg-emerald-500 px-5 py-2 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/10">
            Kontak
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#010504] border-b border-emerald-900/20 p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-emerald-100/60 hover:text-emerald-400 py-2 text-center font-medium">Beranda</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-emerald-100/60 hover:text-emerald-400 py-2 text-center font-medium">Tentang</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-emerald-100/60 hover:text-emerald-400 py-2 text-center font-medium">Proyek</a>
          <a href="#dashboard" onClick={() => setIsOpen(false)} className="text-emerald-100/60 hover:text-emerald-400 py-2 text-center font-medium">Dashboard</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-emerald-500 text-slate-950 px-6 py-3 rounded-full font-bold text-center mt-2">Hubungi Saya</a>
        </div>
      )}
    </header>
  );
}
