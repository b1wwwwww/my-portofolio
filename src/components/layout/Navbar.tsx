"use client";

import { NAV_LINKS } from "@/data/site-config";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background/70 border-b border-muted">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
            <a href="#home" className="font-mono font-bold text-lg">
            Nama.dev
            </a>
            <ul className="hidden md:flex gap-8 text-sm font-medium">
            {NAV_LINKS.map((link) => (
                <li key={link.href}>
                <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                </a>
                </li>
            ))}
            </ul>
        </nav>
        </header>
    );
}