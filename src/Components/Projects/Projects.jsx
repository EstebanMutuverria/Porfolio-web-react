import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "WhatsApp Web Clone",
            description: "A WhatsApp Web Clone built with React.",
            tags: ["React", "CSS", "HTML", "JavaScript", "ContextAPI", "ReactRouter"],
            link: "#"
        },
        {
            title: "Homebanking App",
            description: "A Homebanking App built with Java.",
            tags: ["Java", "HTML", "CSS", "JavaScript", "MySQL", "JSP", "Servlets", "Bootstrap"],
            link: "#"
        },
        {
            title: "E-commerce management system",
            description: "An E-commerce management system built with C#.",
            tags: ["C#", "HTML", "CSS", "JavaScript", "SQL Server", ".NEt Framework", "Bootstrap"],
            link: "#"
        },
        {
            title: "Pharmacy management system",
            description: "A Pharmacy management system built with C++.",
            tags: ["C++", "Codeblocks", "File Management"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>
                        <div className="project-tags">
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="tag">{tag}</span>
                            ))}
                        </div>
                        <a href={project.link} className="project-link">View Project &rarr;</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
