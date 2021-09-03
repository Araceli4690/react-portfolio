import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';


const Footer = () => {
    return (
        <IconContext.Provider value={{ style: { fontSize: '40px' } }}>

            <div className="footer" >
                <a href="https://github.com/Araceli4690" >
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/araceli-carmona-54b771200/">
                    <FaLinkedin />
                </a>
            </div>

        </IconContext.Provider >
    )
};

export default Footer;