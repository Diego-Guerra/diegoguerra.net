import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#top" className="navbar-logo">
          Diego Guerra
        </a>
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
