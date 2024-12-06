import Hero from "@/sections/hero/Hero";
import NavBar from "../sections/header/Header";
import About from "@/sections/about/About";
import Projects from "@/sections/projects/Projects";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
