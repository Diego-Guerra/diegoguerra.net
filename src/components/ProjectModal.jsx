import { useEffect, useState } from "react";
import "./ProjectModal.css";

function ProjectModal({ project, onClose }) {
  const [imageIndex, setImageIndex] = useState(0);
  const hasImages = project.images && project.images.length > 0;
  const hasMultiple = hasImages && project.images.length > 1;

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
      if (hasMultiple) {
        if (e.key === "ArrowLeft") {
          setImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
        }
        if (e.key === "ArrowRight") {
          setImageIndex((prev) => (prev + 1) % project.images.length);
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, hasMultiple, project.images]);

  // Reset image index when project changes
  useEffect(() => {
    setImageIndex(0);
  }, [project.id]);

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  function formatSingleDate(dateStr) {
    const [year, month] = dateStr.trim().split("-");
    return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
  }

  let formattedDate = null;
  if (project.date) {
    const parts = project.date.split("–").map((s) => s.trim());
    if (parts.length === 2) {
      formattedDate = `${formatSingleDate(parts[0])} – ${formatSingleDate(parts[1])}`;
    } else {
      formattedDate = formatSingleDate(project.date);
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content" role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        {hasImages && (
          <div className="modal-gallery">
            <img
              src={project.images[imageIndex]}
              alt={`${project.title} — image ${imageIndex + 1}`}
              className="modal-gallery-image"
            />
            {hasMultiple && (
              <>
                <button
                  className="modal-gallery-arrow modal-gallery-arrow-left"
                  onClick={() =>
                    setImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
                  }
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  className="modal-gallery-arrow modal-gallery-arrow-right"
                  onClick={() =>
                    setImageIndex((prev) => (prev + 1) % project.images.length)
                  }
                  aria-label="Next image"
                >
                  ›
                </button>
                <div className="modal-gallery-dots">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      className={`modal-gallery-dot ${i === imageIndex ? "modal-gallery-dot-active" : ""}`}
                      onClick={() => setImageIndex(i)}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
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
