import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <h1 className="hero-title">
                    Hi, I'm <span className="highlight">Esteban</span><br />
                    Web Developer
                </h1>
                <p className="hero-subtitle">
                    Building digital experiences with modern technologies.
                    Passionate about creating clean, efficient, and beautiful web applications.
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn primary">View Work</a>
                    <a href="#contact" className="btn secondary">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Home;
