import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Dashboard from "@/components/Dashboard";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="bg-transparent selection:bg-emerald-500/30 text-emerald-50 w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Dashboard />
        <Certificates />
      </main>
      <Footer />
    </div>
  );
}
