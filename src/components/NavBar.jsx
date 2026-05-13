import { useState } from "react";
import "./NavBar.css"; // Import styles for the navbar

// Navigation items — add or remove sections here
const NAV_ITEMS = [
  { id: "home",     label: "Home",         icon: "⌂" },
  { id: "projects", label: "Projects",     icon: "▤" },
  { id: "code",     label: "Code Samples", icon: "</>" },
  { id: "python",   label: "Python",       icon: "⬡" },
  { id: "contact", label: "Contact",       icon: " 🖂 "},
];

export default function Navbar({ activePage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNav(id) {
    onNavigate(id);
    setMenuOpen(false); // close mobile menu on selection
  }

  return (
    <nav className="navbar">
      {/* ── Brand / Logo area ── */}
      <div className="navbar-brand">
        <span className="brand-name">Aaron Aston</span>
        <span className="brand-status">
            <span className="GitHub"> <a href="https://github.com/AstonAaron" target="_blank" rel="noopener noreferrer">
              <span className="nav-icon" aria-hidden="true">Git Hub</span>
            </a></span>
          <span className="status-dot" aria-hidden="true" />
          Open to work
        </span>
      </div>

      {/* ── Desktop nav links ── */}
      <ul className="navbar-links" role="list">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <button
              className={`nav-btn ${activePage === item.id ? "active" : ""}`}
              onClick={() => handleNav(item.id)}
              aria-current={activePage === item.id ? "page" : undefined}
            >
              <span className="nav-icon" aria-hidden="true">{item.icon}</span>
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* ── Mobile hamburger ── */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <ul className="mobile-menu" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                className={`mobile-nav-btn ${activePage === item.id ? "active" : ""}`}
                onClick={() => handleNav(item.id)}
                aria-current={activePage === item.id ? "page" : undefined}
              >
                <span className="nav-icon" aria-hidden="true">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
