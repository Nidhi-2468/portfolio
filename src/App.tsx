
import { Navbar } from './layouts/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Resume } from './pages/Resume';
import { Contact } from './pages/Contact';
import { Footer } from './layouts/Footer';
import { TechnicalNotes } from "./pages/TechnicalNotes";
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <About />
        <TechnicalNotes />
        <Experience />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
        <Footer />
      </main>
      
    </div>
  );
}

export default App;
