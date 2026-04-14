import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A modern portfolio built with React and Firebase to showcase projects, technical skills, and professional development as I transition into software engineering.",
      tech: ["React", "JavaScript", "Vite", "Firebase"],
      githubLink: "https://github.com/Tjhewett/Personal-Portfolio",
      liveLink: "https://trevdev.web.app",
      status: "In Progress",
    },
    {
      title: "Lichess Java Application",
      description:
        "A Java-based chess application that allows users to play locally, stream live games from Lichess, and set custom board states using FEN strings.",
      tech: ["Java"],
      githubLink: "https://github.com/Tjhewett",
      liveLink: "",
      status: "Completed",
    },
    {
      title: "Binding of Isaac Mod",
      description:
        "A mod built using Java and Lua that integrates with The Binding of Isaac to display real-time item descriptions when encountered during gameplay.",
      tech: ["Java", "Lua"],
      githubLink: "https://github.com/Tjhewett",
      liveLink: "",
      status: "Completed",
    },
    {
      title: "Sports Betting Application",
      description:
        "A full stack application that allows account creation, sign-in, placing practice bets on NFL lines using application currency, bet tracking, mini-game to gain in game currency and NFL statistics for help with bets.",
      tech: ["React", "Python", "SQL"],
      githubLink: "https://github.com/Tjhewett",
      liveLink: "",
      status: "Completed",
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