import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {

    return (

        <div>
            <nav>
                <ul className="flex-row">
                    <li className={` nav-item ${props.location.pathname === "/about" ? "active" : ""}`}>
                        <Link className="nav-link" to="/about">About me</Link>
                    </li>

                    <li className={` nav-item ${props.location.pathname === "/contact" ? "active" : ""}`}>
                        <Link class="nav-link" to="/contact">Contact</Link>
                    </li>

                    <li className={` nav-item ${props.location.pathname === "/portfolio" ? "active" : ""}`}>
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>

                    <li className={`nav-item ${props.location.pathname === "/resume" ? "active" : ""}`}>
                        <Link className="nav-link" to="/resume">Resume</Link>
                    </li>
                </ul>
            </nav >
        </div>

    )
}

export default Nav;