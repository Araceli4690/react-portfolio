import React from 'react';
import '../../assets/css/style.css';


function Header(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;

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
                        <a dara_testid="about" href="/">
                            About me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'headerActive'}`} >
                        <span onClick={() => setContactSelected(true)}>Contact</span>
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