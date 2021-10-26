import React from 'react';
import Nav from '../Nav';


function Header(props) {

    const { pages, currentPage, setCurrentPage } = props
    return (
        <div className="HeaderStyle">
            <Nav
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default Header;