import "./Skills.css";

const skillGroups = [
  {
    number: "01",
    title: "Full Stack",
    code: "FS / ENGINEERING",
    description:
      "Building structured, maintainable applications across frontend, backend, APIs, and databases.",
    skills: [
      "C#",
      "Python",
      ".NET",
      "ASP.NET Core",
      "JavaScript",
      "ReactJS",
      "Angular",
      "HTML & CSS",
      "SQL",
    ],
  },
  {
    number: "02",
    title: "AI & Data",
    code: "AI / INTELLIGENCE",
    description:
      "Working with intelligent systems, machine learning concepts, data analysis, and research-driven development.",
    skills: [
      "Data Analytics",
      "Data Visualization",
      "ETL Concepts",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Generative AI",
    ],
  },
  {
    number: "03",
    title: "Insurance Technology",
    code: "INS / DOMAIN",
    description:
      "Experience with insurance technology workflows, structured policy systems, and enterprise data transformation.",
    skills: [
      "Duck Creek Policy Administration",
      "XML",
      "XSLT",
      "Insurance Systems",
      "Policy Administration",
    ],
  },
  {
    number: "04",
    title: "Cloud & Tools",
    code: "CLOUD / SYSTEMS",
    description:
      "Using development and cloud tools to support engineering workflows, collaboration, deployment, and delivery.",
    skills: [
      "AWS",
      "Salesforce",
      "GitHub",
      "Git",
      "API Integration",
      "Testing",
      "Deployment",
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-background">
        <span className="skills-orbit skills-orbit-one" />
        <span className="skills-orbit skills-orbit-two" />
        <span className="skills-orbit skills-orbit-three" />

        <span className="skills-node skills-node-one" />
        <span className="skills-node skills-node-two" />
        <span className="skills-node skills-node-three" />
      </div>

      <div className="skills-container">
        {/* Section Header */}
        <header className="skills-header">
          <div className="skills-index">
            <span className="skills-index-dot" />
            <span>03 / CAPABILITIES</span>
          </div>

          <div className="skills-header-content">
            <div className="skills-kicker">TECHNICAL SYSTEM</div>

            <h2 className="skills-title">
              What I
              <br />
              <span>work with.</span>
            </h2>

            <p className="skills-intro">
              A growing technical foundation across software engineering,
              intelligent technologies, insurance systems, data, and cloud
              platforms.
            </p>
          </div>

          <div className="skills-header-meta">
            <span>STACK / 04</span>
            <span>CONTINUOUSLY EVOLVING</span>
          </div>
        </header>

        {/* Skills System */}
        <div className="skills-system">
          <div className="skills-system-label">
            <span>TECHNICAL STACK</span>
            <span>04 DOMAINS</span>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article
                className="skill-card"
                key={group.number}
                style={{ "--skill-index": index }}
              >
                <div className="skill-card-top">
                  <span className="skill-card-number">{group.number}</span>

                  <span className="skill-card-code">{group.code}</span>
                </div>

                <div className="skill-card-content">
                  <div className="skill-card-heading">
                    <h3>{group.title}</h3>

                    <span className="skill-card-arrow">↗</span>
                  </div>

                  <p className="skill-card-description">
                    {group.description}
                  </p>

                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span className="skill-tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="skill-card-footer">
                  <span>SYSTEM / {group.number}</span>
                  <span>ACTIVE</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="skills-bottom">
          <div className="skills-bottom-line" />

          <p>
            Engineering is not limited to a stack.
            <br />
            It is the ability to understand the system behind it.
          </p>

          <div className="skills-scroll-indicator">
            <span>SCROLL TO CONTINUE</span>
            <span className="skills-scroll-line" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;