import Hero from "@/sections/hero/Hero";
import NavBar from "../sections/header/Header";
import About from "@/sections/about/About";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <NavBar />
      <Hero />
      <About />
    </main>
  );
}
