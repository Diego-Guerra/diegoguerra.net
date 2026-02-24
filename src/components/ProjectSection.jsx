import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "./ProjectSection.css";

function ProjectSection({ id, title, projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id={id} className="project-section">
      <div className="project-section-inner">
        <h2 className="project-section-title">{title}</h2>
        <div className="project-section-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default ProjectSection;
