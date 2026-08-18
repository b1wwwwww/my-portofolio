import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="h-screen flex items-center justify-center">
          <p>Hero section — nanti kita isi</p>
        </section>
        <section id="about" className="h-screen flex items-center justify-center">
          <p>About section</p>
        </section>
        <section id="projects" className="h-screen flex items-center justify-center">
          <p>Projects section</p>
        </section>
        <section id="contact" className="h-screen flex items-center justify-center">
          <p>Contact section</p>
        </section>
      </main>
    </>
  );
}