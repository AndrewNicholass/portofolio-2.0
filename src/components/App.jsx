import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main style={{ background: "#0a192f" }}>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
