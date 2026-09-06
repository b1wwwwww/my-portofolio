import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="bg-slate-900 selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Certificates />
      </main>
      <Footer />
    </div>
  );
}
