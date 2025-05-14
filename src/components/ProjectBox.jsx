import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const ProjectBox = ({ title, image, description, links, libraries }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="project-box" onClick={() => setIsOpen(true)}>
                <Fade triggerOnce>
                    <h3>{title}</h3>
                </Fade>
            </div>

            {isOpen && (
                <div
                    className="project-modal-overlay"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="project-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="project-close-button"
                            onClick={() => setIsOpen(false)}
                        >
                            ×
                        </button>
                        <div className="project-modal-grid">
                            <div className="project-modal-image">
                                <img src={image} alt={title} />
                            </div>
                            <div className="project-modal-text">
                                <h2>{title}</h2>
                                <div className="project-modal-description">
                                    {description}
                                </div>
                                <div className="project-modal-details">
                                    {links && links.length > 0 && (
                                        <div className="project-modal-links">
                                            {links.map((link, idx) => (
                                                <a
                                                    key={idx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                    {libraries && libraries.length > 0 && (
                                        <>
                                            <div className="project-modal-separator"></div>
                                            <div className="project-modal-languages">
                                                {libraries.map(
                                                    (library, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="language-tag"
                                                        >
                                                            {library}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectBox;
