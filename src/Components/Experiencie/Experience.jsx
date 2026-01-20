import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: "Web Developer",
            company: "Freelance",
            period: "2025 - Present",
            description: "Developing responsive web applications using React and optimizing performance."
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="period">{exp.period}</span>
                            <h3 className="role">{exp.role}</h3>
                            <h4 className="company">{exp.company}</h4>
                            <p className="description">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
