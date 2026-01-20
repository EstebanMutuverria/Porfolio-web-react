import React from 'react';
import './Education.css';

const Education = () => {
    const educationList = [
        {
            degree: "University Technician in Programming",
            institution: "UTN FRGP",
            year: "2022 - 2025"
        },
        {
            degree: "Full Stack Developer degree",
            institution: "UTN FRBA",
            year: "2025 - 2026"
        },
        {
            degree: "B1 English international degree",
            institution: "AACI (Argentinian asociation of english culture), Cambridge University",
            year: "2024"
        }
    ];

    return (
        <section id="education" className="education-section">
            <h2 className="section-title">Education</h2>
            <div className="education-grid">
                {educationList.map((edu, index) => (
                    <div key={index} className="education-card">
                        <h3 className="degree">{edu.degree}</h3>
                        <p className="institution">{edu.institution}</p>
                        <span className="year">{edu.year}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
