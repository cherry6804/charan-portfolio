import "./Navbar.css";

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="navbar">

      <div className="navbar-inner">

        {/* BRAND */}
        <button
          className="navbar-brand"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
        >

          <div className="navbar-avatar">
            <img
              src={import.meta.env.BASE_URL + "images/profile.jpeg"}
              alt="Charan Appala"
            />
          </div>

          <div className="navbar-name">
            <strong>Charan Appala</strong>

            <span>
              Engineer. Builder. Researcher.
            </span>
          </div>

        </button>

        {/* NAVIGATION */}
        <nav className="navbar-links">

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("experience")}>
            Experience
          </button>

          <button onClick={() => scrollToSection("skills")}>
            Skills
          </button>

          <button onClick={() => scrollToSection("projects")}>
            Projects
          </button>

          <button onClick={() => scrollToSection("research")}>
            Research
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>

        </nav>

        {/* CONNECT */}
        <button
          className="navbar-connect"
          onClick={() => scrollToSection("contact")}
        >
          <span className="connect-icon">↗</span>
          <span>Let's Connect</span>
        </button>

      </div>

    </header>
  );
}

export default Navbar;