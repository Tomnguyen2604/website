import React from "react";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
    return (
        <div className="projects">
            <Fade triggerOnce>
                <div className="projects_container">
                    <h1>Projects</h1>
                    <p>My projects will be displayed here.</p>
                </div>
            </Fade>
        </div>
    );
};

export default Projects;
