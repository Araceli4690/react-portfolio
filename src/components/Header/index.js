import React from 'react';
import '../../assets/css/style.css';
import Nav from '../Nav';


function Header(props) {
    const { contactSelected, setContactSelected } = props;

    return (
        <div className="HeaderStyle">
            <h2>
                <a style={{ color: 'rgb(51, 161, 156)' }} href="/">
                    Araceli
                </a>
            </h2>
            <Nav
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            />
        </div>
    );
}

export default Header;