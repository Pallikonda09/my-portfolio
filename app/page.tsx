import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="text-center py-8 text-[#9090a8] text-sm border-t border-white/5">
        Designed & Built by <span className="text-[#6c63ff] font-medium">Your Name</span> · {new Date().getFullYear()}
      </footer>
    </main>
  );
}