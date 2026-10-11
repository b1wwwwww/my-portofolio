import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LayoutProvider } from "@/context/LayoutContext";
import Sidebar from "@/components/layout/Sidebar";
import MainWrapper from "@/components/layout/MainWrapper";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Nabil Yusra Azura Pratama — Fullstack Developer",
  description: "Portofolio pribadi Nabil Yusra Azura Pratama.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased bg-slate-950 dark:bg-slate-950 text-slate-100 dark:text-slate-100`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="theme-mode">
          <LayoutProvider>
            <Sidebar />
            <MainWrapper>
              {children}
            </MainWrapper>
          </LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
