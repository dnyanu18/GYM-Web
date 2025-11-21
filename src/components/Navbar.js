import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <span className="logo-dot" />
          <span className="logo-text">
            Iron<span>Pulse</span>
          </span>
        </div>

        <button
          className={`navbar-toggle ${open ? "open" : ""}`}
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>

        <nav className={`navbar-links ${open ? "show" : ""}`}>
          <NavLink onClick={closeMenu} end to="/">
            Home
          </NavLink>
          <NavLink onClick={closeMenu} to="/classes">
            Classes
          </NavLink>
          <NavLink onClick={closeMenu} to="/trainers">
            Trainers
          </NavLink>
          <NavLink onClick={closeMenu} to="/pricing">
            Pricing
          </NavLink>
          <NavLink onClick={closeMenu} to="/contact">
            Contact
          </NavLink>
          <NavLink onClick={closeMenu} to="/contact" className="join-btn">
            Join Now
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
