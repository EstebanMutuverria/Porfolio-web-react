import React from 'react';
import './Home.css';
import cvMutuverria from '../../assets/mutuverria-cv.pdf';
import { TextEffect } from '../Animations/TextEffect/TextEffect';
import { TextShimmer } from '../Animations/TextShimmer/TextShimmer';
import { HoverBorderGradient } from '../Animations/HoverBorderGradient/HoverBorderGradient';

const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <p className="greeting">Hello, I'm</p>
                <h1 className="name">
                    <TextShimmer duration={2}>
                        Esteban Mutuverria
                    </TextShimmer>
                </h1>
                <h2 className="role">
                    <TextEffect per='char' preset='fade'>
                        Full-Stack Developer
                    </TextEffect>
                </h2>
                <div className="cta-container">
                    <a href="#projects" className="btn primary">View My Work</a>
                    <a href="#contact" className="btn secondary">Contact Me</a>
                    <HoverBorderGradient
                        as="a"
                        href={cvMutuverria}
                        containerClassName="rounded-full"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                        <span className='btn-curriculum'> Download Resume </span>
                    </HoverBorderGradient>
                </div>
            </div>
        </section>
    );
};

export default Home;
