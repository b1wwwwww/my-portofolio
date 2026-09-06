"use client";

import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <p className="text-sm font-semibold tracking-tight text-white">
              Nabil Yusra Azura Pratama
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Fullstack Developer • Bangun produk minimal & cepat.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="GitHub"
              className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300 hover:border-slate-700 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300 hover:border-slate-700 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@example.com"
              aria-label="Email"
              className="rounded-full bg-blue-500 p-3 text-white hover:bg-blue-600 transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-slate-800 pt-6 text-xs text-slate-500 md:flex-row">
          <span>© {new Date().getFullYear()} Nabil Yusra Azura Pratama. Template dummy.</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-slate-300">GitHub</a>
            <a href="#" className="hover:text-slate-300">LinkedIn</a>
            <a href="mailto:hello@example.com" className="hover:text-slate-300">Email</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
