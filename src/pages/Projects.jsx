import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A React and Vite portfolio website built to showcase my background, technical skills, and software development projects as I transition from IT into software development.",
      tech: ["React", "JavaScript", "Vite", "Firebase"],
      githubLink: "https://github.com/Tjhewett/Personal-Portfolio",
      liveLink: "https://trevdev.web.app",
      status: "In Progress",
    },
    {
      title: "Sports Betting Application",
      description:
        "A project focused on sports-related data and application logic. This will be one of my featured portfolio projects as I continue refining it and improving presentation, structure, and usability.",
      tech: ["Python", "SQL", "Web Development"],
      githubLink: "https://github.com/Tjhewett",
      liveLink: "",
      status: "Planned Portfolio Feature",
    },
    {
      title: "Academic and Personal Development Projects",
      description:
        "A collection of projects built during college and through independent practice. These include work across Python, Java, C++, databases, and web technologies that I plan to revisit, clean up, and add to this portfolio.",
      tech: ["Python", "Java", "C++", "SQL", "HTML/CSS"],
      githubLink: "https://github.com/Tjhewett",
      liveLink: "",
      status: "Being Refined",
    },
  ];

  return (
    <section className="page-section">
      <div className="container page-container">
        <p className="section-label">Projects</p>
        <h1>Featured Work</h1>
        <p className="section-intro">
          These projects reflect both what I have already built and what I am
          actively refining as part of my transition into software development.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;