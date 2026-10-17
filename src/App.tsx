import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { SkillsMarquee } from "./components/SkillsMarquee";

function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Navbar />
      <main>
        <Home />
        <About />
        <SkillsMarquee />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
