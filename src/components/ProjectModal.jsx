import "./ProjectModal.css";
import { useEffect } from "react";

const ProjectModal = ({ project, isOpen, onClose }) => {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>
                
                <div className="modal-image">
                    <img src={project.image} alt={project.title} />
                </div>
                
                <div className="modal-details">
                    <h2>{project.title}</h2>
                    <p className="modal-description">{project.fullDescription}</p>
                    
                    <div className="modal-tech">
                        <h4>Technologies Used:</h4>
                        <div className="tech-tags">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                    
                    {project.links && (
                        <div className="modal-links">
                            {project.links.live && (
                                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="modal-button">
                                    Live Demo
                                </a>
                            )}
                            {project.links.github && (
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="modal-button">
                                    View Code
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
