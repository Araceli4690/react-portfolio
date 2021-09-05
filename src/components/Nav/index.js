import React from 'react';

function Nav({ pages, currentPage, setCurrentPage }) {


    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-1">
                    <span onClick={() => setCurrentPage(pages[0])}>
                        About me
                    </span>
                </li>
                <li  >
                    <span onClick={() => setCurrentPage(pages[1])}>Contact</span>
                </li>
                <li className="mx-1">
                    <span onClick={() => setCurrentPage(pages[2])}>Portfolio</span>
                </li>
                <li className="mx-2">
                    <span onClick={() => setCurrentPage(pages[3])}>Resume</span>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;