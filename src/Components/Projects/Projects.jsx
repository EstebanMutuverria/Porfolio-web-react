import React from 'react';
import './Projects.css';
import img_WhatsApp from '../../assets/whatsapp-clone.png';
import img_BankingApp from '../../assets/banking-app.png';
import img_ECommerce from '../../assets/e-commerce.png';
import img_WebPortfolio from '../../assets/portfolio-web.png';

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
} from '../Animations/MorphingDialog/MorphingDialog';
import { CardContainer, CardBody, CardItem } from '../Animations/3d-card/3d-card';
import { FaPlus } from "react-icons/fa";

const Projects = () => {
    const projects = [
        {
            title: "WhatsApp Web Clone",
            subtitle: "React & ContextAPI",
            description: "A complete clone of WhatsApp Web functionalities including real-time messaging simulation, contact management, and responsive layout.",
            tags: ["React", "CSS", "HTML", "JavaScript"],
            image: img_WhatsApp,
            link: "https://github.com/EstebanMutuverria/WhatsApp-Clon"
        },
        {
            title: "Homebanking App",
            subtitle: "Java & MySQL",
            description: "Secure banking application featuring account management, transfers, and transaction history. Built with a robust Java backend.",
            tags: ["Java", "MySQL", "JSP", "Bootstrap"],
            image: img_BankingApp,
            link: "https://github.com/EstebanMutuverria/Banking-App"
        },
        {
            title: "E-Commerce managment system",
            subtitle: "C#, .NET, SQL Server",
            description: "E-Commerce management system with features such as product catalog, order processing, and user authentication.",
            tags: ["C#", ".NET", "SQL Server", "Bootstrap", "ASP.NET"],
            image: img_ECommerce,
            link: "https://github.com/EstebanMutuverria/Gestion-de-Comercio"
        },
        {
            title: "Web Portfolio",
            subtitle: "React & Vite",
            description: "A modern portfolio website built with React and Vite, featuring a responsive design and smooth animations.",
            tags: ["React", "Vite", "CSS", "HTML", "JavaScript"],
            image: img_WebPortfolio,
            link: "https://github.com/EstebanMutuverria/Porfolio-web-react"
        },
        // Add more projects...
    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">Here are some of my favorite projects:</p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <MorphingDialog key={index}>
                        <CardContainer className="inter-var">
                            <MorphingDialogTrigger className="project-card-trigger-wrapper">
                                <CardBody className="card-body-style relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
                                    <div className="project-card-content-3d">
                                        <CardItem translateZ="50" className="card-item-title">
                                            {project.title}
                                        </CardItem>
                                        <CardItem
                                            as="p"
                                            translateZ="60"
                                            className="card-item-desc"
                                        >
                                            {project.subtitle}
                                        </CardItem>
                                        <CardItem translateZ="100" className="w-full mt-4">
                                            <MorphingDialogImage
                                                src={project.image}
                                                alt={project.title}
                                                className="card-item-image group-hover/card:shadow-xl"
                                            />
                                        </CardItem>
                                        <div className="card-actions">
                                            <CardItem
                                                translateZ={20}
                                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                            >
                                                Click for details →
                                            </CardItem>
                                        </div>
                                    </div>
                                </CardBody>
                            </MorphingDialogTrigger>
                        </CardContainer>

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
