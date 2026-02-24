import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [fadeOn, setFadeOn] = useState(false);

  function toggleFade() {
    document.documentElement.classList.toggle("fade-theme");
    setFadeOn(!fadeOn);
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          <button
            className={`fade-toggle ${fadeOn ? "fade-toggle-active" : ""}`}
            onClick={toggleFade}
            aria-label="Toggle Fade theme"
            title="🔪"
          >
            <span className="fade-toggle-dot" />
          </button>
          <a href="#top" className="navbar-logo">
            Diego Guerra
          </a>
        </div>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#design">Design</a></li>
          <li><a href="#code">Code</a></li>
          <li><a href="#school">School</a></li>
          <li><a href="#work">Work</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
