import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid" />

      <div className="contact-orbit contact-orbit-one" />
      <div className="contact-orbit contact-orbit-two" />

      <div className="contact-container">

        {/* HEADER */}
        <header className="contact-header">

          <div className="contact-index">
            <span className="contact-dot" />
            <span>06 / CONTACT</span>
          </div>

          <div className="contact-status">
            <span className="contact-status-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </div>

        </header>


        {/* MAIN HEADING */}
        <div className="contact-heading">

          <p className="contact-eyebrow">
            CONNECTION SYSTEM / 06
          </p>

          <h2>
            Let's build
            <span>something useful.</span>
          </h2>

          <p className="contact-intro">
            Open to conversations around software engineering,
            intelligent systems, research, and opportunities where
            technology can solve meaningful problems.
          </p>

        </div>


        {/* CONTACT PANEL */}
        <div className="contact-panel">

          <div className="contact-panel-top">

            <span>
              CONTACT / 01
            </span>

            <span>
              INDIA
            </span>

            <span>
              2026
            </span>

          </div>


          <div className="contact-panel-body">

            {/* EMAIL */}
            <a
              className="contact-item contact-email"
              href="mailto:charancherrymk@gmail.com"
            >
              <div className="contact-item-number">
                01
              </div>

              <div className="contact-item-content">

                <span className="contact-item-label">
                  EMAIL
                </span>

                <strong>
                  charancherrymk@gmail.com
                </strong>

              </div>

              <div className="contact-arrow">
                ↗
              </div>
            </a>


            {/* LINKEDIN */}
            <a
              className="contact-item"
              href="https://www.linkedin.com/in/charan-appala"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-item-number">
                02
              </div>

              <div className="contact-item-content">

                <span className="contact-item-label">
                  LINKEDIN
                </span>

                <strong>
                  linkedin.com/in/charan-appala
                </strong>

              </div>

              <div className="contact-arrow">
                ↗
              </div>
            </a>


            {/* GITHUB */}
            <a
              className="contact-item"
              href="https://github.com/cherry6804"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-item-number">
                03
              </div>

              <div className="contact-item-content">

                <span className="contact-item-label">
                  GITHUB
                </span>

                <strong>
                  github.com/cherry6804
                </strong>

              </div>

              <div className="contact-arrow">
                ↗
              </div>
            </a>


            {/* LOCATION */}
            <div className="contact-item contact-location">

              <div className="contact-item-number">
                04
              </div>

              <div className="contact-item-content">

                <span className="contact-item-label">
                  BASED IN
                </span>

                <strong>
                  India
                </strong>

              </div>

              <div className="contact-location-marker">
                <span />
              </div>

            </div>

          </div>


          <div className="contact-panel-bottom">

            <span>
              ENGINEERING SYSTEM / 06
            </span>

            <div className="contact-panel-line">
              <i />
            </div>

            <span>
              ACTIVE
            </span>

          </div>

        </div>


        {/* CTA */}
        <div className="contact-cta">

          <a
            href="mailto:charancherrymk@gmail.com"
            className="contact-button"
          >
            <span>
              Let's Connect
            </span>

            <strong>
              ↗
            </strong>
          </a>

        </div>


        {/* FOOTER */}
        <footer className="contact-footer">

          <div className="contact-footer-left">
            CHARN APPALA
          </div>

          <div className="contact-footer-center">
            SOFTWARE ENGINEER · AI / ML · RESEARCH
          </div>

          <div className="contact-footer-right">
            © 2026
          </div>

        </footer>

      </div>
    </section>
  );
}

export default Contact;