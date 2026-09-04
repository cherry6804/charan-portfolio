import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background visual system */}
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      {/* Decorative orbit system */}
      <div className="hero-orbit hero-orbit-one">
        <span className="orbit-dot orbit-dot-one" />
        <span className="orbit-dot orbit-dot-two" />
      </div>

      <div className="hero-orbit hero-orbit-two">
        <span className="orbit-dot orbit-dot-three" />
      </div>

      <div className="hero-cross cross-one">+</div>
      <div className="hero-cross cross-two">+</div>

      <div className="hero-inner">
        {/* LEFT SIDE */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            <span>SOFTWARE ENGINEER / AI ENTHUSIAST</span>
          </div>

          <div className="hero-name">
            <h1>Charan</h1>
            <h1 className="hero-name-outline">Appala</h1>
          </div>

          <h2 className="hero-role">
            Engineer. Builder. Researcher.
          </h2>

          <p className="hero-description">
            Building intelligent systems that solve real-world problems across
            software engineering, AI/ML, data, and cloud technologies.
          </p>

          <div className="hero-tags">
            <span>FULL STACK</span>
            <span>AI / ML</span>
            <span>RESEARCH</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="hero-btn hero-btn-primary">
              <span>View My Work</span>
              <span className="hero-btn-arrow">↗</span>
            </a>

            <a href="#contact" className="hero-btn hero-btn-secondary">
              <span>Let's Connect</span>
              <span className="hero-btn-arrow">↗</span>
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>4+</strong>
              <span>PROJECTS</span>
            </div>

            <div className="hero-stat">
              <strong>4</strong>
              <span>PUBLICATIONS</span>
            </div>

            <div className="hero-stat">
              <strong>2+</strong>
              <span>YEARS EXPERIENCE</span>
            </div>
          </div>
        </div>

        {/* RIGHT PHOTO COMPOSITION */}
        <div className="hero-visual">

          {/* Technical labels */}
          <div className="visual-label visual-label-top">
            <span>SYSTEM / 01</span>
            <strong>ENGINEERING</strong>
          </div>

          <div className="visual-label visual-label-right">
            <span>AI / 02</span>
            <strong>INTELLIGENCE</strong>
          </div>

          <div className="visual-label visual-label-bottom">
            <span>R&amp;D / 03</span>
            <strong>RESEARCH</strong>
          </div>

          {/* Main photo */}
          <div className="photo-main">
            <img
              src="/images/hero-1.jpeg"
              alt="Charan Appala"
            />

            <div className="photo-main-overlay" />

            <div className="photo-status">
              <span className="status-dot" />
              <span>OPEN TO OPPORTUNITIES</span>
            </div>

            <div className="photo-caption">
              <strong>CHARAN APPALA</strong>
              <span>ENGINEER / BUILDER / RESEARCHER</span>
            </div>

            <div className="photo-corner photo-corner-tl" />
            <div className="photo-corner photo-corner-br" />
          </div>

          {/* TOP RIGHT SUPPORTING PHOTO */}
          <div className="photo-secondary photo-secondary-top">
            <img
              src="/images/hero-cover.png"
              alt="Charan Appala"
            />

            <div className="secondary-overlay" />

            <div className="secondary-label">
              <span>01</span>
              <strong>EXPLORE</strong>
            </div>
          </div>

          {/* BOTTOM LEFT SUPPORTING PHOTO */}
          <div className="photo-secondary photo-secondary-bottom">
            <img
              src="/images/hero-secondary.jpeg"
              alt="Charan Appala"
            />

            <div className="secondary-overlay" />

            <div className="secondary-label">
              <span>02</span>
              <strong>IMPACT</strong>
            </div>
          </div>

          {/* Floating opportunity card */}
          <div className="opportunity-card">
            <div className="opportunity-icon">
              <span />
            </div>

            <div>
              <strong>Open to opportunities</strong>
              <span>Let's build something meaningful.</span>
            </div>
          </div>

          {/* Center technical node */}
          <div className="visual-node">
            <div className="node-ring node-ring-one" />
            <div className="node-ring node-ring-two" />
            <div className="node-core" />
          </div>

        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line">
          <span />
        </div>
      </div>
    </section>
  );
}

export default Hero;