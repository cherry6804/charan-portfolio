import "./Projects.css";

const projects = [
  {
    number: "01",
    year: "2024",
    category: "AI / HEALTHCARE",
    title: "Medibot",
    subtitle: "Personal Medical Assistant",
    description:
      "An AI-powered healthcare chatbot designed to capture and evaluate user medical queries using natural language processing approaches.",
    technologies: ["Python", "Flask", "NLP", "AI"],
    type: "AI SYSTEM",
  },
  {
    number: "02",
    year: "2025",
    category: "AI / HEALTHCARE",
    title: "GuardianSeps",
    subtitle: "Early Sepsis Detection System",
    description:
      "A deep learning framework focused on early sepsis detection from clinical datasets to support faster identification and improve treatment response.",
    technologies: ["Python", "Deep Learning", "Machine Learning", "Healthcare"],
    type: "ML SYSTEM",
  },
  {
    number: "03",
    year: "2024",
    category: "AI / AEROSPACE",
    title: "Autonomous Satellite",
    subtitle: "Navigation System",
    description:
      "An autonomous navigation system using Deep Deterministic Policy Gradient reinforcement learning together with physical sensor array data.",
    technologies: ["Python", "DDPG", "Deep RL", "Sensors"],
    type: "RESEARCH SYSTEM",
  },
  {
    number: "04",
    year: "2024",
    category: "AI / MOBILITY",
    title: "TriQuadVroom",
    subtitle: "AI-Driven Ride Sharing Application",
    description:
      "A full-featured ride-sharing platform integrating Generative AI components for dynamic rider-driver matching and routing.",
    technologies: ["Generative AI", "Routing", "AI", "Application"],
    type: "AI PLATFORM",
  },
  {
    number: "05",
    year: "2025",
    category: "AI / COMPUTER VISION",
    title: "Echovision AI",
    subtitle: "Predictive Cardiovascular Diagnostics",
    description:
      "A deep learning framework using computer vision techniques to perform automated cardiovascular diagnostic risk scoring against video data streams.",
    technologies: ["Deep Learning", "Computer Vision", "Python", "AI"],
    type: "VISION SYSTEM",
  },
  {
    number: "06",
    year: "2024",
    category: "FULL STACK / ENTERPRISE",
    title: "Hotel Management",
    subtitle: "Enterprise Management System",
    description:
      "An enterprise web system built using Angular, ASP.NET Core, and SQL to orchestrate transactional hotel management data flows.",
    technologies: ["Angular", "ASP.NET Core", "SQL", "C#"],
    type: "FULL STACK",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-grid-background" />

      <div className="projects-orbit projects-orbit-one" />
      <div className="projects-orbit projects-orbit-two" />

      <div className="projects-container">

        {/* SECTION INTRO */}
        <header className="projects-header">
          <div className="projects-header-index">
            <span className="projects-dot" />
            <span>04 / SELECTED WORK</span>
          </div>

          <div className="projects-header-content">
            <p className="projects-eyebrow">
              PROJECT SYSTEM / 04
            </p>

            <h2 className="projects-title">
              Things I
              <span>build.</span>
            </h2>

            <p className="projects-intro">
              A selection of software, artificial intelligence, machine
              learning, and research-driven systems built across different
              technical domains.
            </p>
          </div>

          <div className="projects-header-meta">
            <span>SELECTED</span>
            <strong>{projects.length.toString().padStart(2, "0")}</strong>
            <small>PROJECTS</small>
          </div>
        </header>

        {/* PROJECT LIST */}
        <div className="projects-list">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.number}
              style={{ "--project-index": index }}
            >
              <div className="project-card-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>

                <span className="project-year">
                  {project.year}
                </span>
              </div>

              <div className="project-card-main">

                {/* LEFT */}
                <div className="project-identity">
                  <div className="project-system-label">
                    <span />
                    {project.type}
                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <h4>
                    {project.subtitle}
                  </h4>
                </div>

                {/* CENTER */}
                <div className="project-description">
                  <p>
                    {project.description}
                  </p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT */}
                <div className="project-action">
                  <div className="project-arrow">
                    ↗
                  </div>

                  <span>
                    VIEW
                  </span>
                </div>
              </div>

              <div className="project-card-bottom">
                <span>
                  ENGINEERING SYSTEM / {project.number}
                </span>

                <div className="project-progress">
                  <span />
                </div>

                <span>
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {projects.length.toString().padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* FOOTER */}
        <div className="projects-footer">
          <div className="projects-footer-line" />

          <p>
            From concept to implementation — building systems that
            solve real problems.
          </p>

          <div className="projects-scroll">
            <span>SCROLL TO CONTINUE</span>
            <i />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;