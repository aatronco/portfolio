import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Migration } from "@/components/Migration";
import { Projects } from "@/components/Projects";
import { Nutrition } from "@/components/Nutrition";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Ir al contenido</a>
      <Nav />
      <main id="contenido">
        <Hero />
        <Migration />
        <Projects />
        <Nutrition />
        <About />
        <Contact />
      </main>
      <footer className="site-footer wrap">
        <a className="wordmark" href="#inicio">acde<span>.cl</span></a>
        <p>Alejandro Troncoso · E-commerce y software nutricional</p>
        <a href="https://github.com/aatronco" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </footer>
    </>
  );
}
