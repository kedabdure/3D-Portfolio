import Hero from "@/sections/hero/Hero";
import NavBar from "../sections/header/Header";
import About from "@/sections/about/About";
import Projects from "@/sections/projects/Projects";
import Testimonials from "@/sections/testimonials/Testimonials";
import Contact from "@/sections/contact/Contact";
import Footer from "@/sections/footer/Footer";
import Experience from "@/sections/experience/Experience";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
