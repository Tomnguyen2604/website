import React from "react";
import { Fade } from "react-awesome-reveal";
import ProjectBox from "./ProjectBox";
import "../styles/ProjectBox.css";

const projects = [
    {
        title: "coversy",
        image: "./src/assets/coversy.png",
        description:
            "Final project for the course of Software Development at SAIT",
        links: [
            {
                label: "GitHub",
                url: "https://github.com/drewxs/coversy",
            },
        ],
        libraries: ["React", "SASS", "Redux", "Express", "MongoDB", "AWS S3"],
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
                        image={project.image}
                        description={project.description}
                        links={project.links}
                        libraries={project.libraries}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
