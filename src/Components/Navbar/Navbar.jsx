import React, { useState, useEffect } from 'react';
import './Navbar.css';
import SpinningText from '../SpinningText/SpinningText';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#" className="logo-container" onClick={closeMenu}>
                    <SpinningText radius={2} fontSize={0.6} className='font-medium leading-none'>
                        {`Esteban • Mutuverria • `}
                    </SpinningText>
                </a>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                    <li><a href="#education" onClick={closeMenu}>Education</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
