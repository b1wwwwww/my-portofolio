"use client";

import { Home, User, Briefcase, LayoutGrid, Award, MessageSquare, Terminal } from "lucide-react";
import Link from "next/link";

const MENU_ITEMS = [
  { icon: Home, label: "Beranda", href: "#home" },
  { icon: User, label: "Tentang", href: "#about" },
  { icon: Briefcase, label: "Proyek", href: "#projects" },
  { icon: LayoutGrid, label: "Dashboard", href: "#dashboard" },
  { icon: Award, label: "Sertifikat", href: "#certificates" },
  { icon: MessageSquare, label: "Kontak", href: "#contact" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r border-emerald-900/20 bg-[#010504]/50 backdrop-blur-xl lg:flex z-[60]">
      <div className="p-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
            <Terminal className="h-5 w-5" />
          </div>
          <span className="font-mono font-bold text-lg text-white">nabil.dev</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-2 py-4">
        {MENU_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-emerald-100/50 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all group"
          >
            <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="p-8 border-t border-emerald-900/20">
        <div className="flex items-center gap-4">
          <a href="https://github.com/b1wwwwww" target="_blank" className="text-emerald-100/30 hover:text-emerald-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.68-.216.68-.48 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.893 1.53 2.341 1.088 2.91.833.09-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.944 0-1.09.39-1.98 1.03-2.676-.103-.254-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.75-1.026 2.75-1.026.546 1.376.202 2.392.1 2.646.64.696 1.03 1.586 1.03 2.676 0 3.842-2.337 4.687-4.565 4.935.359.31.679.92.679 1.852 0 1.336-.012 2.416-.012 2.747 0 .266.18.575.688.478A10.013 10.013 0 0022 12c0-5.52-4.48-10-10-10z" /></svg>
          </a>
          <a href="#" target="_blank" className="text-emerald-100/30 hover:text-emerald-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.339 17.338V10.66H6.032v6.678h2.307zM7.186 9.5a1.34 1.34 0 110-2.68 1.34 1.34 0 010 2.68zM18 17.338v-3.63c0-1.956-1.046-2.86-2.438-2.86-1.118 0-1.61.62-1.886 1.058v-0.9H11.23c.03.59 0 6.334 0 6.334h2.306v-3.534c0-.188.013-.376.07-.51.153-.376.503-.768 1.09-.768.77 0 1.078.58 1.078 1.431v3.381H18z" /></svg>
          </a>
        </div>
        <p className="mt-4 text-[10px] text-emerald-100/20 uppercase tracking-widest font-mono">
          © 2026 NABIL YUSRA
        </p>
      </div>
    </aside>
  );
}
