import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {

    return (

        <div>
            <nav>
                <ul className="flex-row">
                    <li className="nav-item">
                        <NavLink to="/about" activeClassName="selected">About me</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/portfolio" activeClassName="selected">Portfolio</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/resume" activeClassName="selected">Resume</NavLink>
                    </li>
                </ul>
            </nav >
        </div>

    )
}

export default Nav;