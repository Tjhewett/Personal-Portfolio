function ProjectCard({
  title,
  description,
  tech,
  githubLink,
  liveLink,
  status,
}) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <div>
          <h3>{title}</h3>
          <p className="project-status">{status}</p>
        </div>
      </div>

      <p className="project-description">{description}</p>

      <div className="tech-stack">
        {tech.map((item) => (
          <span key={item} className="tech-badge">
            {item}
          </span>
        ))}
      </div>

      <div className="project-actions">
        <a href={githubLink} target="_blank" rel="noreferrer" className="btn">
          View Code
        </a>

        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;