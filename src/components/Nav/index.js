import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {

    return (
        <nav>
            <ul className="flex-row">
                <li className={`mx-1 nav-item ${props.location.pathname === "/about" ? "active" : ""}`}>
                    <Link className="nav-link" to="/about">About me</Link>
                </li>

                <li className={`mx-2 nav-item ${props.location.pathname === "/contact" ? "active" : ""}`}>
                    <Link class="nav-link" to="/contact">Contact</Link>
                </li>

                <li className={`mx-2 nav-item ${props.location.pathname === "/portfolio" ? "active" : ""}`}>
                    <Link className="nav-link" to="/portfolio"></Link>
                </li>

                <li className={`mx-2 nav-item ${props.location.pathname === "/resume" ? "active" : ""}`}>
                    <Link className="nav-link" to="/resume">Resume</Link>
                </li>
            </ul>
        </nav >
    )
}

export default withRouter(Nav);