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
  title: "Nama Kamu — Fullstack Developer",
  description: "Portofolio pribadi Nama Kamu, Fullstack Developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${pressStart2P.variable} font-sans antialiased`}>
        <div className="bg-spotlight" id="bg-spotlight" />
        <script dangerouslySetInnerHTML={{ __html: `document.addEventListener('mousemove',e=>{document.documentElement.style.setProperty('--mouse-x',e.clientX+'px');document.documentElement.style.setProperty('--mouse-y',e.clientY+'px')})` }} />
        {children}
      </body>
    </html>
  );
}