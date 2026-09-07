import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Nabil Yusra Azura Pratama — Fullstack Developer",
  description: "Portofolio pribadi Nabil Yusra Azura Pratama.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${pressStart2P.variable} font-sans antialiased`} suppressHydrationWarning>
        <div className="bg-spotlight-base" aria-hidden />
        <div className="bg-spotlight" aria-hidden />
        <div className="bg-glow" aria-hidden />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `let raf=0;document.addEventListener('mousemove',e=>{if(raf)return;raf=requestAnimationFrame(()=>{const el=e.target;document.documentElement.style.setProperty('--mouse-x',e.clientX+'px');document.documentElement.style.setProperty('--mouse-y',e.clientY+'px');try{const overBg = el===document.body||el===document.documentElement||el.closest('.section-grid')||el.classList&&el.classList.contains('section-grid');document.documentElement.style.setProperty('--spotlight-opacity', overBg?0.28:0.06);}catch(err){}raf=0})},{passive:true})`,
          }}
        />
      </body>
    </html>
  );
}
