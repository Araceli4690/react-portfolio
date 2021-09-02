import React from 'react';
import '../../assets/css/style.css';
import Nav from '../Nav';


function Header() {


    return (
        <div className="HeaderStyle">
            <h2>
                <a style={{ color: 'black' }} href="/">
                    Araceli
                </a>
            </h2>
            <Nav />
        </div>
    );
}

export default Header;