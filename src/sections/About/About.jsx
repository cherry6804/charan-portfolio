import portfolioData from "../../data/portfolioData";
import "./About.css";

function About() {
  const {
    profile,
    statistics,
    education,
    currentRoleDetails,
    expertise,
    achievements,
  } = portfolioData;

  return (
    <section className="about-section" id="about">

      {/* Decorative system */}
      <div className="about-system about-system-a" />
      <div className="about-system about-system-b" />
      <div className="about-system about-system-c" />

      <div className="about-grid-bg" />

      <div className="container about-container">

        {/* =================================================
            SECTION INTRO
        ================================================= */}

        <header className="about-intro">

          <div className="about-section-number">
            <span>01</span>
            <small>PROFILE</small>
          </div>

          <div className="about-intro-main">

            <span className="about-overline">
              PROFESSIONAL PROFILE
            </span>

            <h2>
              Engineer.
              <span>Builder.</span>
              <span>Researcher.</span>
            </h2>

          </div>

          <div className="about-intro-meta">
            <span>BASED IN</span>
            <strong>{profile.location}</strong>
          </div>

        </header>


        {/* =================================================
            PROFILE STAGE
        ================================================= */}

        <div className="about-stage">

          <div className="about-stage-copy">

            <div className="stage-label">
              <span />
              CURRENTLY BUILDING
            </div>

            <h3>
              Software systems at the intersection of
              <em>engineering</em>,
              <em>intelligent technologies</em>,
              and real-world business domains.
            </h3>

            <p>
              {profile.summary}
            </p>

            <div className="current-role-line">

              <div>
                <span>ROLE</span>
                <strong>
                  {currentRoleDetails.role}
                </strong>
              </div>

              <div>
                <span>COMPANY</span>
                <strong>
                  {currentRoleDetails.company}
                </strong>
              </div>

              <div>
                <span>PERIOD</span>
                <strong>
                  {currentRoleDetails.period}
                </strong>
              </div>

            </div>

          </div>


          {/* =================================================
              SYSTEM CARD
          ================================================= */}

          <div className="about-system-card">

            <div className="system-card-top">
              <span>PROFILE / 01</span>

              <span className="system-active">
                <i />
                ACTIVE
              </span>
            </div>

            <div className="system-card-identity">

              <div className="system-avatar">
                CA

                <span className="avatar-orbit" />
              </div>

              <div>
                <strong>
                  {profile.name}
                </strong>

                <span>
                  {profile.professionalTitle}
                </span>
              </div>

            </div>


            <div className="system-card-focus">

              {profile.focusAreas.map((area, index) => (
                <div
                  className="system-focus-row"
                  key={area}
                >
                  <span>
                    0{index + 1}
                  </span>

                  <strong>
                    {area}
                  </strong>

                  <i>
                    ↗
                  </i>
                </div>
              ))}

            </div>


            <div className="system-card-footer">
              <span>ENGINEERING SYSTEM</span>

              <span>
                {String(new Date().getFullYear()).slice(-2)}
              </span>
            </div>

          </div>

        </div>


        {/* =================================================
            STATISTICS
        ================================================= */}

        <div className="about-stats">

          {statistics.map((stat, index) => (
            <div
              className="about-stat"
              key={stat.label}
            >

              <span className="stat-number">
                0{index + 1}
              </span>

              <strong>
                {stat.value}
              </strong>

              <span className="stat-label">
                {stat.label}
              </span>

            </div>
          ))}

        </div>


        {/* =================================================
            INFORMATION
        ================================================= */}

        <div className="about-information">

          {/* EDUCATION */}

          <article className="about-info-row">

            <div className="info-index">
              <span>02</span>
              <small>EDUCATION</small>
            </div>

            <div className="education-content">

              <div className="info-period">
                {education.period}
              </div>

              <h3>
                {education.degree}
              </h3>

              <p>
                {education.institution}
              </p>

              <span>
                {education.location}
              </span>

            </div>

          </article>


          {/* EXPERTISE */}

          <article className="about-info-row">

            <div className="info-index">
              <span>03</span>
              <small>EXPERTISE</small>
            </div>

            <div className="expertise-content">

              {expertise.map((group) => (
                <div
                  className="expertise-column"
                  key={group.title}
                >

                  <div className="expertise-heading">
                    {group.title}
                  </div>

                  <div className="expertise-list">

                    {group.items.map((item) => (
                      <span key={item}>
                        {item}
                      </span>
                    ))}

                  </div>

                </div>
              ))}

            </div>

          </article>


          {/* HIGHLIGHTS */}

          <article className="about-info-row">

            <div className="info-index">
              <span>04</span>
              <small>HIGHLIGHTS</small>
            </div>

            <div className="highlights-content">

              {achievements.map((achievement, index) => (
                <div
                  className="highlight"
                  key={achievement.title}
                >

                  <div className="highlight-index">
                    0{index + 1}
                  </div>

                  <div className="highlight-main">

                    <div className="highlight-heading">
                      <h3>
                        {achievement.title}
                      </h3>

                      <span>
                        {achievement.year}
                      </span>
                    </div>

                    <p>
                      {achievement.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </article>

        </div>


        {/* =================================================
            END MARKER
        ================================================= */}

        <div className="about-end-marker">

          <span />

          <p>
            END OF PROFILE / CONTINUE EXPLORING
          </p>

          <span />

        </div>

      </div>

    </section>
  );
}

export default About;