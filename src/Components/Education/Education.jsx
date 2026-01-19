import React from 'react';
import './Education.css';

const Education = () => {
    const educationList = [
        {
            degree: "Computer Science Engineering",
            institution: "University of Technology",
            year: "2019 - 2023"
        },
        {
            degree: "Full Stack Development Bootcamp",
            institution: "Tech Academy",
            year: "2023"
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
