import "./ProjectCard.css";

function ProjectCard({ project, onClick }) {
  const thumbnail = project.images && project.images.length > 0 ? project.images[0] : null;

  return (
    <button className="project-card" onClick={() => onClick(project)}>
      <div className="project-card-image">
        {thumbnail ? (
          <img src={thumbnail} alt={project.title} />
        ) : (
          <div className="project-card-image-placeholder">
            {project.title.charAt(0)}
          </div>
        )}
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <div className="project-card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

export default ProjectCard;
