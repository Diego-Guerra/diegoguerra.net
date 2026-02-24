import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import {
  designProjects,
  codeProjects,
  schoolProjects,
  workProjects,
} from "./data/projects";
import "./App.css";

function App() {
  return (
    <div id="top">
      <Navbar />
      <Hero />
      <ProjectSection id="design" title="Design Projects" projects={designProjects} />
      <ProjectSection id="code" title="Code Projects" projects={codeProjects} />
      <ProjectSection id="school" title="School Projects" projects={schoolProjects} />
      <ProjectSection id="work" title="Work Projects" projects={workProjects} />
      <Footer />
    </div>
  );
}

export default App;
