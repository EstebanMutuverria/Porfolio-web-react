import React from 'react';
import './About.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";
import { FaUserSecret } from "react-icons/fa6";

const About = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        I am a dedicated developer with a strong focus on creating intuitive and dynamic user experiences.
                        My journey in web development started with a curiosity for how things work on the internet,
                        which quickly turned into a passion for coding.
                    </p>
                    <p>
                        I enjoy solving complex problems and learning new technologies to keep up with the fast-paced
                        tech industry. When I'm not coding, you can find me exploring new tech trends, or searching for new tools to incorporate in my projects.
                    </p>
                </div>
                <div className="about-info-cards">
                    <div className="about-info-card">
                        <FaLocationDot className='location-icon' />
                        <h3>Location</h3>
                        <p>Argentina</p>
                    </div>
                    <div className="about-info-card">
                        <FaLaptopCode className='focus-icon' />
                        <h3>Focus</h3>
                        <p>Web Development</p>
                    </div>
                    <div className="about-info-card">
                        <FaUserSecret className='role-icon' />
                        <h3>Role</h3>
                        <p>Full Stack Developer</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
