import "./Research.css";

const publications = [
  {
    number: "01",
    year: "2024",
    venue: "IEEE / ICNWC",
    conference:
      "2024 2nd International Conference on Networking and Communications",
    title: "Medibot: Personal Medical Assistant",
    domain: "ARTIFICIAL INTELLIGENCE",
    project:
      "AI-powered healthcare chatbot built using Python, Flask, and NLP paradigms to capture and evaluate user medical queries.",
  },
  {
    number: "02",
    year: "2024",
    venue: "IEEE / ICEES",
    conference:
      "2024 10th International Conference on Electrical Energy Systems",
    title:
      "Navigating Space: A DDPG-Based Approach to Autonomous Satellite Navigation",
    domain: "DEEP REINFORCEMENT LEARNING",
    project:
      "Autonomous satellite navigation system deploying Deep Reinforcement Learning using DDPG paired with physical sensor array data.",
  },
  {
    number: "03",
    year: "2025",
    venue: "IEEE / ICFTS",
    conference:
      "2025 International Conference on Frontier Technologies and Solutions",
    title: "GuardianSeps: Empowering Early Sepsis Detection System",
    domain: "DEEP LEARNING",
    project:
      "Deep learning framework targeted at rapid sepsis detection from clinical datasets to improve treatment response times.",
  },
  {
    number: "04",
    year: "2025",
    venue: "IEEE / ICDSBS",
    conference:
      "2025 International Conference on Data Science and Business Systems",
    title:
      "Echovision AI – Predictive Deep Learning for Cardiovascular Diagnostics",
    domain: "COMPUTER VISION",
    project:
      "Deep learning framework utilizing computer vision tools for automated diagnostic risk scoring against video data streams.",
  },
];

function Research() {
  return (
    <section className="research-section" id="research">
      <div className="research-grid" />

      <div className="research-orbit research-orbit-one" />
      <div className="research-orbit research-orbit-two" />

      <div className="research-container">

        {/* -------------------------------------------
            HEADER
        -------------------------------------------- */}
        <header className="research-header">

          <div className="research-index">
            <span className="research-dot" />
            <span>05 / RESEARCH</span>
          </div>

          <div className="research-heading-block">

            <p className="research-eyebrow">
              RESEARCH SYSTEM / 05
            </p>

            <h2 className="research-title">
              Ideas that
              <span>become research.</span>
            </h2>

            <p className="research-intro">
              Research-driven work exploring artificial intelligence,
              machine learning, intelligent systems, and applied technology.
            </p>

          </div>

          <div className="research-count">
            <span>IEEE</span>

            <strong>
              {publications.length.toString().padStart(2, "0")}
            </strong>

            <small>
              PUBLICATIONS
            </small>
          </div>

        </header>


        {/* -------------------------------------------
            RESEARCH TIMELINE
        -------------------------------------------- */}

        <div className="research-list">

          {publications.map((publication, index) => (
            <article
              className="research-item"
              key={publication.number}
              style={{
                "--research-index": index,
              }}
            >

              {/* TOP METADATA */}
              <div className="research-item-top">

                <span className="research-number">
                  {publication.number}
                </span>

                <span className="research-venue">
                  {publication.venue}
                </span>

                <span className="research-year">
                  {publication.year}
                </span>

              </div>


              {/* MAIN CONTENT */}
              <div className="research-item-main">

                <div className="research-domain">

                  <span className="research-domain-dot" />

                  <span>
                    {publication.domain}
                  </span>

                </div>


                <div className="research-content">

                  <h3>
                    {publication.title}
                  </h3>

                  <p className="research-conference">
                    {publication.conference}
                  </p>

                  <p className="research-description">
                    {publication.project}
                  </p>

                </div>


                <div className="research-symbol">

                  <div className="research-symbol-ring">
                    <span />
                  </div>

                  <small>
                    IEEE
                  </small>

                </div>

              </div>


              {/* BOTTOM SYSTEM BAR */}
              <div className="research-item-bottom">

                <span>
                  RESEARCH SYSTEM / {publication.number}
                </span>

                <div className="research-line">
                  <i />
                </div>

                <span>
                  {publication.year}
                </span>

              </div>

            </article>
          ))}

        </div>


        {/* -------------------------------------------
            RESEARCH FOOTER
        -------------------------------------------- */}

        <div className="research-footer">

          <div className="research-footer-line" />

          <p>
            Research at the intersection of intelligent systems,
            engineering, and applied innovation.
          </p>

          <div className="research-footer-meta">
            <span>
              CONTINUOUSLY EXPLORING
            </span>

            <i />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Research;