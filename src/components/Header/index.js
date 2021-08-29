import React from 'react';
import '../../assets/css/style.css';


function Header() {

    return (
        <div className="HeaderStyle">
            <h2>
                <a style={{ color: 'black' }} data-test-f="link" href="/">
                    Araceli
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a dara_testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li className="mx-2" >
                        <a href="#about"> Contact</a>
                    </li>
                    <li className="mx-2">
                        <a href="#about">Projects</a>
                    </li>
                    <li className="mx-2">
                        <a href="#about">Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;