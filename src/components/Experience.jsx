import React from "react";
import "./Experience.css";

const experience = {
  period: "08/2025 — PRESENT",
  location: "BHUBANESWAR, INDIA",
  company: "LTIMindtree",
  role: "Consultant — Package Implementation",
  title: "Full Stack Developer",

  technologies: [
    ".NET",
    "Duck Creek",
    "XML / XSLT",
    "Integrations",
    "Testing",
    "Deployment",
  ],

  responsibilities: [
    {
      number: "01",
      title: "Domain & Full Stack Engineering",
      description:
        "Completed intensive training in .NET Full Stack Development and Duck Creek Policy Administration, building a strong foundation in insurance domain applications.",
    },
    {
      number: "02",
      title: "XML / XSLT Engineering",
      description:
        "Developed and enhanced structured XML/XSLT solutions supporting downstream data integrations and core insurance processes.",
    },
    {
      number: "03",
      title: "Requirements & Defect Resolution",
      description:
        "Worked with business and technical teams to analyze requirements, resolve defects, and support application enhancements.",
    },
    {
      number: "04",
      title: "Testing & Deployment",
      description:
        "Contributed to testing, deployment, and production support activities to maintain reliable operation of insurance systems.",
    },
    {
      number: "05",
      title: "Debugging & Reliability",
      description:
        "Applied structured debugging and problem-solving techniques to improve data-processing accuracy and overall system reliability.",
    },
  ],
};

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      {/* Ambient background */}
      <div className="experience-orb experience-orb-one" />
      <div className="experience-orb experience-orb-two" />

      <div className="experience-container">
        {/* Section header */}
        <div className="experience-header">
          <div className="experience-index">
            <span className="experience-index-dot" />
            <span>02</span>
          </div>

          <div className="experience-heading-block">
            <p className="experience-eyebrow">PROFESSIONAL EXPERIENCE</p>

            <h2>
              Building systems
              <br />
              <span>that work in the real world.</span>
            </h2>
          </div>

          <div className="experience-header-meta">
            <span>CAREER / 01</span>
            <span>ACTIVE</span>
          </div>
        </div>

        {/* Main experience card */}
        <article className="experience-card">
          {/* Card top line */}
          <div className="experience-card-top">
            <div className="experience-date">
              <span className="experience-label">PERIOD</span>
              <strong>{experience.period}</strong>
            </div>

            <div className="experience-location">
              <span className="experience-label">LOCATION</span>
              <strong>{experience.location}</strong>
            </div>

            <div className="experience-status">
              <span className="status-dot" />
              CURRENT ROLE
            </div>
          </div>

          {/* Main identity */}
          <div className="experience-main">
            <div className="experience-company-block">
              <div className="company-mark">
                <span>LT</span>
              </div>

              <div>
                <p className="experience-label">COMPANY</p>
                <h3>{experience.company}</h3>
              </div>
            </div>

            <div className="experience-role-block">
              <p className="experience-label">ROLE</p>

              <h4>{experience.role}</h4>

              <p className="experience-title">{experience.title}</p>
            </div>
          </div>

          {/* Technology strip */}
          <div className="experience-tech">
            <div className="experience-label">SYSTEM STACK</div>

            <div className="experience-tech-list">
              {experience.technologies.map((technology) => (
                <span key={technology} className="experience-tech-pill">
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div className="experience-details">
            <div className="experience-details-heading">
              <span className="experience-label">CONTRIBUTION</span>

              <span className="experience-details-line" />
            </div>

            <div className="experience-responsibilities">
              {experience.responsibilities.map((item) => (
                <div className="experience-responsibility" key={item.number}>
                  <div className="responsibility-number">
                    {item.number}
                  </div>

                  <div className="responsibility-content">
                    <h5>{item.title}</h5>

                    <p>{item.description}</p>
                  </div>

                  <div className="responsibility-arrow">↗</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom system footer */}
          <div className="experience-card-footer">
            <span>ENGINEERING SYSTEM / 02</span>

            <div className="footer-signal">
              <span />
              <span />
              <span />
              <span />
            </div>

            <span>01 / 01</span>
          </div>
        </article>

        {/* Bottom statement */}
        <div className="experience-bottom">
          <div className="experience-bottom-line" />

          <p>
            From domain understanding to production delivery,
            <span> engineering is a continuous process.</span>
          </p>

          <div className="experience-scroll-marker">
            <span>SCROLL TO CONTINUE</span>
            <i />
          </div>
        </div>
      </div>
    </section>
  );
}