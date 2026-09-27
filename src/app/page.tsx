import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import SkillsSection from "@/components/SkillsSection";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="bg-transparent selection:bg-teal-500/30 text-teal-50 w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <TechStack />
        <SkillsSection />
        <Achievements />
        <Projects />
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}
