import { useEffect } from "react";
import "./ProjectModal.css";

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  const formattedDate = project.date
    ? new Date(project.date + "-01").toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      })
    : null;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content" role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        {project.image && (
          <div className="modal-image">
            <img src={project.image} alt={project.title} />
          </div>
        )}

        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>

          {formattedDate && (
            <p className="modal-date">{formattedDate}</p>
          )}

          <p className="modal-description">{project.description}</p>

          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="modal-tag">
                {tag}
              </span>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              View Project &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
