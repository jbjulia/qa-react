import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../images/qa.jpeg';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand md navbar-light">
            <a href="https://www.qa.com" className="navbar-brand">
                <img src={logo} alt="Logo"/>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-collapse="collapse" data-target="#navBarNav"
                aria-controls="navBarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navBarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/schedule">Schedule</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/signup">Sign Up</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;