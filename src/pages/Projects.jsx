
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Scientific Calculator",
      description:
        "A calculator interface for arithmetic and scientific operations.",
      technologies: ["React", "CSS", "JavaScript"],
      category: "UTILITY APP",
    },
    {
      number: "02",
      title: "Task Manager",
      description:
        "A simple task management interface for organizing daily work.",
      technologies: ["React", "CSS", "JavaScript"],
      category: "PRODUCTIVITY",
    },
    {
      number: "03",
      title: "Weather Dashboard",
      description:
        "A weather dashboard interface ready to connect to a weather API.",
      technologies: ["React", "API", "CSS"],
      category: "WEB APP",
    },
    {
      number: "04",
      title: "Portfolio Website",
      description:
        "A responsive personal website to showcase skills and projects.",
      technologies: ["React", "React Router", "CSS"],
      category: "PERSONAL WEBSITE",
    },
  ];

  return (
    <section className="section container">
      <div className="section-heading">
        <p className="eyebrow">MY RECENT WORK</p>
        <h1>Featured <span>Projects</span></h1>
        <p>
          A selection of projects I am building to improve my skills.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">{project.number}</span>
              <span className="project-category">{project.category}</span>
            </div>

            <div className="project-art">
              <span>{project.number}</span>
            </div>

            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className="tech-list">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="center-action">
        <p>Have an idea for a project?</p>
        <Link to="/contact" className="btn btn-primary">
          Let's Talk
        </Link>
      </div>
    </section>
  );
}
