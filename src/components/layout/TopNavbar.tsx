"use client";

import { Menu, X, Globe, LayoutGrid, Layout } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useLayout } from "@/context/LayoutContext";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

const MENU_ITEMS = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Pencapaian", href: "#achievements" },
  { label: "Proyek", href: "#projects" },
  { label: "Dasbor", href: "#dashboard" },
  { label: "Buku Tamu", href: "#guestbook" },
  { label: "Kontak", href: "#contact" },
  { label: "Links", href: "#links" },
];

export default function TopNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [language, setLanguage] = useState("ID");
  const { theme } = useTheme();
  const { mode, toggleMode } = useLayout();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [drawerOpen]);

  return (
    <>
      {/* Desktop Top Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-300 ${
          scrolled
            ? "bg-[#010504]/60 backdrop-blur-xl border-b border-teal-900/20 shadow-lg shadow-black/20"
            : "bg-transparent border-b border-teal-900/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-8">
          {/* Profile Section - Left */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {/* Profile Image */}
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-500/30 to-teal-900/30 border border-teal-500/30 flex items-center justify-center text-teal-400 flex-shrink-0">
              <span className="text-xs font-bold">NY</span>
            </div>
            {/* Profile Info */}
            <div className="flex flex-col">
              <Link
                href="#home"
                className="text-sm font-bold text-white hover:text-teal-400 transition-colors"
              >
                Nabil Yusra
              </Link>
              <p className="text-xs text-teal-100/50">Fullstack Developer</p>
            </div>
          </div>

          {/* Desktop Menu - Center */}
          <nav className="hidden lg:flex items-center gap-8 flex-1">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-teal-100/60 hover:text-teal-400 transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "ID" ? "EN" : "ID")}
              className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium text-teal-100/60 hover:text-teal-400 hover:bg-teal-500/10 transition-all"
              title="Ubah Bahasa"
            >
              <Globe className="h-4 w-4" />
              <span>{language}</span>
            </button>

            {/* Theme Switcher */}
            <div className="hidden sm:block">
              <ThemeSwitcher />
            </div>

            {/* Layout Toggle Button */}
            <button
              onClick={toggleMode}
              className="hidden md:flex items-center justify-center p-2 rounded-lg text-teal-100/60 hover:text-teal-400 hover:bg-teal-500/10 transition-all"
              title="Switch to Sidebar"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="lg:hidden p-2 rounded-lg text-teal-400 hover:bg-teal-500/10 transition-all"
              title="Buka Menu"
            >
              {drawerOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-[45] lg:hidden"
            onClick={() => setDrawerOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer - Slide from Right */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed right-0 top-0 h-screen w-80 bg-[#010504]/95 backdrop-blur-xl border-l border-teal-900/20 z-[48] overflow-y-auto lg:hidden"
          >
            {/* Drawer Close Button */}
            <div className="sticky top-0 flex justify-end p-4 bg-[#010504]/50 backdrop-blur-sm border-b border-teal-900/20">
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-2 text-teal-400 hover:bg-teal-500/10 rounded-lg transition-all"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Drawer Profile Section */}
            <div className="p-6 border-b border-teal-900/20">
              <div className="flex flex-col items-center gap-4">
                {/* Profile Image */}
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-teal-500/20 to-teal-900/20 border-2 border-teal-500/30 flex items-center justify-center text-teal-400">
                  <span className="text-2xl font-bold">NY</span>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white">Nabil Yusra</h3>
                  <p className="text-xs text-teal-100/50 mt-1">Fullstack Developer</p>
                </div>
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30">
                  <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-xs font-medium text-teal-300">Terbuka untuk Bekerja</span>
                </div>
              </div>
            </div>

            {/* Settings Section */}
            <div className="p-4 border-b border-teal-900/20">
              <div className="space-y-3">
                {/* Language Settings */}
                <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-teal-500/5 transition-colors">
                  <label className="flex items-center gap-3 flex-1 cursor-pointer">
                    <Globe className="h-5 w-5 text-teal-400" />
                    <span className="text-sm font-medium text-teal-100/80">Bahasa</span>
                  </label>
                  <div className="flex gap-1 text-xs font-medium">
                    <button
                      onClick={() => setLanguage("ID")}
                      className={`px-2 py-1 rounded ${
                        language === "ID"
                          ? "bg-teal-500 text-slate-950"
                          : "text-teal-100/50 hover:text-teal-400"
                      } transition-all`}
                    >
                      ID
                    </button>
                    <button
                      onClick={() => setLanguage("EN")}
                      className={`px-2 py-1 rounded ${
                        language === "EN"
                          ? "bg-teal-500 text-slate-950"
                          : "text-teal-100/50 hover:text-teal-400"
                      } transition-all`}
                    >
                      EN
                    </button>
                  </div>
                </div>

                {/* Theme Settings */}
                <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-teal-500/5 transition-colors">
                  <label className="flex items-center gap-3 flex-1">
                    <span className="h-5 w-5 text-teal-400 flex items-center justify-center text-xs">◐</span>
                    <span className="text-sm font-medium text-teal-100/80">Tema</span>
                  </label>
                  <div className="hidden sm:block">
                    <ThemeSwitcher />
                  </div>
                </div>

                {/* Layout Toggle */}
                <button
                  onClick={() => {
                    toggleMode();
                    setDrawerOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-teal-500/5 transition-colors"
                >
                  <label className="flex items-center gap-3 flex-1 cursor-pointer">
                    <LayoutGrid className="h-5 w-5 text-teal-400" />
                    <span className="text-sm font-medium text-teal-100/80">
                      Sidebar
                    </span>
                  </label>
                  <span className="text-xs text-teal-400">→</span>
                </button>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="p-4">
              <p className="text-xs font-semibold text-teal-100/40 uppercase tracking-widest mb-4 px-2">
                Navigasi
              </p>
              <div className="space-y-2">
                {MENU_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className="block px-4 py-3 rounded-lg text-sm font-medium text-teal-100/70 hover:text-teal-400 hover:bg-teal-500/10 transition-all"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-teal-900/20 mt-auto">
              <p className="text-[10px] text-teal-100/30 uppercase tracking-widest font-mono text-center">
                © 2026 NABIL YUSRA
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
