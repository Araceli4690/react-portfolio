import React from 'react';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;

    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a dara_testid="about" href="/">
                        About me
                    </a>
                </li>
                <li className={`mx-2 ${contactSelected && 'NavActive'}`} >
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
    )
}

export default Nav;