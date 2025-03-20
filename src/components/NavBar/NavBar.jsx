import React from 'react';
import './NavBar.css';

function NavBar({text}) {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">{text}</h1>
        </nav>
    );
}

export default NavBar;