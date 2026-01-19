import React from 'react';
import './Skills.css';
import InfiniteSlider from '../InfiniteSlider/InfiniteSlider';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
import { SiMysql, SiCplusplus, SiDotnet } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";

const Skills = () => {
    // Array of skills with icons
    const skillsWithIcons = [
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" size={50} /> },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" size={50} /> },
        { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={50} /> },
        { name: "React", icon: <FaReact color="#61DAFB" size={50} /> },
        { name: "MySQL", icon: <SiMysql color="#4479A1" size={50} /> },
        { name: "Git", icon: <FaGitAlt color="#F05032" size={50} /> },
        { name: "C#", icon: <TbBrandCSharp color="#239120" size={50} /> },
        { name: ".NET", icon: <SiDotnet color="#512BD4" size={50} /> },
        { name: "SQL Server", icon: <DiMsqlServer color="#E34F26" size={50} /> },
        { name: "GitHub", icon: <FaGithub color="#512BD4" size={50} /> },
        { name: "Python", icon: <FaPython color="#F7DF1E" size={50} /> },
        { name: "C++", icon: <SiCplusplus color="#239120" size={50} /> }
    ];

    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">Skills</h2>
            <InfiniteSlider gap={30} duration={25}>
                {skillsWithIcons.map((skill, index) => (
                    <div key={index} className="skill-card">
                        {skill.icon}
                        <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
            </InfiniteSlider>
        </section>
    );
};

export default Skills;
