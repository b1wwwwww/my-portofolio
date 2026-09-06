import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="bg-slate-950 selection:bg-blue-500/30 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Certificates />
      </main>
      <Footer />
    </div>
  );
}
