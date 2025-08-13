import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/sunsign" className="nav-link">
        Sun Sign
      </NavLink>
      <NavLink to="/natalcalc" className="nav-link">
        NatalChart
      </NavLink>
      <NavLink to="/todopage" className="nav-link">
        To Do
      </NavLink>
    </nav>
  );
}

export default Navbar;
