import {
  FaJava,
  FaPython,
  FaReact,
  FaJs,
  FaDatabase,
  FaGithub,
  FaExternalLinkAlt,
  FaYoutube,
} from "react-icons/fa";
import { SiLua, SiFirebase, SiVite } from "react-icons/si";

function getIcon(tech) {
  switch (tech) {
    case "Java":
      return <FaJava title="Java" />;
    case "Python":
      return <FaPython title="Python" />;
    case "React":
      return <FaReact title="React" />;
    case "JavaScript":
      return <FaJs title="JavaScript" />;
    case "SQL":
      return <FaDatabase title="SQL" />;
    case "Lua":
      return <SiLua title="Lua" />;
    case "Firebase":
      return <SiFirebase title="Firebase" />;
    case "Vite":
      return <SiVite title="Vite" />;
    default:
      return <span title={tech}>{tech}</span>;
  }
}

function ProjectCard({
  title,
  description,
  tech,
  githubLink,
  liveLink,
  videoLink,
  status,
}) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p className="project-status">{status}</p>

      <p className="project-description">{description}</p>

      <div className="tech-icons">
        {tech.map((item) => (
          <div key={item} className="tech-icon">
            {getIcon(item)}
          </div>
        ))}
      </div>

      <div className="project-actions">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-code"
          >
            <FaGithub />
            View Code
          </a>
        )}

        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        )}

        {videoLink && (
          <a
            href={videoLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-video"
          >
            <FaYoutube />
            Video Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;