import React from "react";
import { Fade } from "react-awesome-reveal";
import ProjectBox from "./ProjectBox";
import "../styles/ProjectBox.css";

const projects = [
    {
        title: "conversy",
        description:
            "Final project for the course of Software Development at SAIT",
        links: [
            {
                label: "GitHub",
                url: "https://github.com/drewxs/coversy",
            },
        ],
    },
];

const Projects = () => {
    return (
        <div className="projects_container">
            <Fade triggerOnce duration={2000}>
                <h1>Projects</h1>
            </Fade>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {projects.map((project, idx) => (
                    <ProjectBox
                        key={idx}
                        title={project.title}
                        description={project.description}
                        links={project.links}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
