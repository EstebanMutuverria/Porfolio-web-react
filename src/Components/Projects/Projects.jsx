import React from 'react';
import './Projects.css';
import img_WhatsApp from '../../../Images/img1.png';
import img_BankingApp from '../../../Images/inicio vista admin.png';

import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogTitle,
    MorphingDialogImage,
    MorphingDialogSubtitle,
    MorphingDialogClose,
    MorphingDialogDescription,
    MorphingDialogContainer
} from '../MorphingDialog/MorphingDialog';
import { FaPlus } from "react-icons/fa";

const Projects = () => {
    const projects = [
        {
            title: "WhatsApp Web Clone",
            subtitle: "React & ContextAPI",
            description: "A complete clone of WhatsApp Web functionalities including real-time messaging simulation, contact management, and responsive layout.",
            tags: ["React", "CSS", "HTML", "JavaScript"],
            image: img_WhatsApp,
            link: "#"
        },
        {
            title: "Homebanking App",
            subtitle: "Java & MySQL",
            description: "Secure banking application featuring account management, transfers, and transaction history. Built with a robust Java backend.",
            tags: ["Java", "MySQL", "JSP", "Bootstrap"],
            image: img_BankingApp,
            link: "#"
        },
        // Add more projects...
    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <MorphingDialog key={index}>
                        <MorphingDialogTrigger className="project-card-trigger">
                            < MorphingDialogImage
                                src={project.image}
                                alt={project.title}
                                className="project-card-image"
                            />
                            <div className="project-card-content">
                                <div>
                                    <MorphingDialogTitle>{project.title}</MorphingDialogTitle>
                                    <MorphingDialogSubtitle>{project.subtitle}</MorphingDialogSubtitle>
                                </div>
                                <button className="project-expand-btn">
                                    <FaPlus size={14} />
                                </button>
                            </div>
                        </MorphingDialogTrigger>

                        <MorphingDialogContainer>
                            <MorphingDialogContent className="project-dialog-content">
                                <MorphingDialogImage
                                    src={project.image}
                                    alt={project.title}
                                    className="project-dialog-image"
                                />
                                <div className="project-dialog-body">
                                    <MorphingDialogTitle>{project.title}</MorphingDialogTitle>
                                    <MorphingDialogSubtitle>{project.subtitle}</MorphingDialogSubtitle>
                                    <MorphingDialogDescription>
                                        <p>{project.description}</p>
                                        <div className="project-tags-dialog">
                                            {project.tags.map((tag, idx) => (
                                                <span key={idx} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                        <a href={project.link} className="project-link-dialog" target="_blank" rel="noopener noreferrer">
                                            View on GitHub &rarr;
                                        </a>
                                    </MorphingDialogDescription>
                                </div>
                                <MorphingDialogClose />
                            </MorphingDialogContent>
                        </MorphingDialogContainer>
                    </MorphingDialog>
                ))}
            </div>
        </section>
    );
};

export default Projects;
