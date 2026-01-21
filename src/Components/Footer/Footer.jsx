import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="copyright">
                    © {currentYear} Esteban Mutuverria. All rights reserved.
                </p>
                <div className="footer-socials">
                    <a href="https://github.com/EstebanMutuverria" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/esteban-mutuverria/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:mutuverriaestebanpaul@gmail.com" aria-label="Email">
                        <HiMail />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
