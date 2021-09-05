import React from 'react';
import '../../assets/css/style.css';
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";



function Header() {
    return (

        <Header className="HeaderStyle">
            <Link style={{ color: 'rgb(51, 161, 156)' }} to="/">
                <h2> Araceli</h2>
            </Link>
            <Nav />

        </Header>


    );
}

export default Header;