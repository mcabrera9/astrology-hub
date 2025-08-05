import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-link">
                Home
            </NavLink>
            <NavLink to="/astro" className="nav-link">
                Astro
            </NavLink>
            <NavLink to="/counter" className="nav-link">
                Counter
            </NavLink>
        </nav>
    )
}

export default Navbar;