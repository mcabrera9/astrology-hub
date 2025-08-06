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
            <NavLink to="/counterpage" className="nav-link">
                Counter
            </NavLink>
            <NavLink to="/todopage" className="nav-link">
                To Do
            </NavLink>
        </nav>
    )
}

export default Navbar;