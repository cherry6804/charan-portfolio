import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Experience from "./components/Experience";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Research from "./sections/Research/Research";
import Contact from "./sections/Contact/Contact";
import GlobalMotion from "./components/GlobalMotion/GlobalMotion";
import "./App.css";
import "./styles/global-animations.css";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <GlobalMotion />

      <main>
        <Hero />

        <About />

        <Experience />

        <Skills />

        <Projects />

        <Research />

        <Contact />
      </main>
    </div>
  );
}

export default App;