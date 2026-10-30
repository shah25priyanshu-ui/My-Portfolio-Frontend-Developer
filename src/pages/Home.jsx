
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm a <span>Frontend Developer.</span>
          </h1>

          <p className="hero-description">
            I build clean, responsive, and user-friendly websites
            using HTML, CSS, JavaScript, and React.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Projects
            </Link>

            <Link to="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>

          <div className="hero-skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>

        <div className="hero-visual">

          <div className="hero-visual">
            <div className="profile-image">
              <img
                src="Priyanshu.png"
                alt="Profile image"
              />
            </div>
            </div>
          <div className="floating-badge">{"<"} Hello, World! {"/>"}</div>
          </div>

        </div>
        
    
    </section >
  );
}
