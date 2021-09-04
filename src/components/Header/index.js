import React, { useState } from 'react';
import '../../assets/css/style.css';
import Nav from '../Nav';
import projects from '../../projects.json';
import { Link, withRouter } from 'react-router-dom';
import Nav from '../Nav';

function Header(props) {
    return (
        <div className="HeaderStyle">
            <h2>
                <link style={{ color: 'rgb(51, 161, 156)' }} to="/">
                    Araceli
                </link>
            </h2>
            <Nav />
        </div>
    );
}

export default Header;