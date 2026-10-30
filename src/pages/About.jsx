
export default function About() {
  const skills = [
    { name: "HTML5", level: "Structure" },
    { name: "CSS3", level: "Styling" },
    { name: "JavaScript", level: "Programming" },
    { name: "React JS", level: "Frontend" },
    { name: "Git & GitHub", level: "Version control" },
    { name: "Responsive Design", level: "UI development" },
  ];

  return (
    <section className="section container">
      <div className="section-heading">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h1>About <span>Me</span></h1>
        <p>A little about who I am and what I do.</p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <div className="avatar">PS</div>
          <h2>PRIYANSHU SAH</h2>
          <p className="muted">Aspiring Frontend Developer</p>
          <p>
            I enjoy learning new technologies and turning ideas
            into practical, beautiful web experiences.
          </p>
        </div>

        <div className="about-details">
          <h2>My Journey</h2>
          <p>
            I'm building my frontend development skills by creating
            real projects and learning how modern websites work.
            My goal is to write maintainable code and build
            accessible, responsive interfaces.
          </p>

          <h2 className="skills-title">My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <strong>{skill.name}</strong>
                <span>{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
