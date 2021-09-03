import React from 'react';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected,



    } = props;

    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-1">
                    <span onClick={() => { setContactSelected(false); }}>
                        About me
                    </span>
                </li>
                <li className={`mx-2 ${contactSelected && 'NavActive'}`} >
                    <span onClick={() => { setContactSelected(true) }}>Contact</span>
                </li>
                <li className="mx-1">
                    <span onClick={() => {
                        setContactSelected(false);
                    }}
                    >Portfolio</span>
                </li>
                <li className="mx-2">
                    <span>Resume</span>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;