import React from 'react';
import '../../assets/css/style.css';
import Nav from '../Nav';


function Header(props) {

    const { pages, currentPage, setCurrentPage } = props
    return (
        <div className="HeaderStyle">
            <h2>
                <a style={{ color: 'rgb(51, 161, 156)' }} href="/">
                    Araceli
                </a>
            </h2>
            <Nav
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default Header;