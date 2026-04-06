import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-text">
          <p className="eyebrow">Aspiring Software Developer</p>

          <h1>
            Hi, I’m <span className="accent-text">Trevor Hewett</span>
          </h1>

          <p className="hero-description">
            I’m a Computer Science graduate currently transitioning from IT into
            software development. I’m building modern web applications with
            React, JavaScript, Python, and Firebase while creating a portfolio that
            showcases my projects and growth as a developer.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>

            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-card">
            <h2>Current Focus</h2>
            <ul>
              <li>Building a polished React portfolio website</li>
              <li>Refreshing past school and personal projects</li>
              <li>Strengthening JavaScript and frontend skills</li>
              <li>Preparing for software developer applications</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;