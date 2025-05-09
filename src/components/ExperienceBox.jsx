import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import "../styles/ExperienceBox.css";

const ExperienceBox = ({ title, image, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="experience-box" onClick={() => setIsOpen(true)}>
                <Fade triggerOnce>
                    <h3>{title}</h3>
                </Fade>
            </div>

            {isOpen && (
                <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="close-button"
                            onClick={() => setIsOpen(false)}
                        >
                            ×
                        </button>
                        <div className="modal-grid">
                            <div className="modal-image">
                                <img src={image} alt={title} />
                            </div>
                            <div className="modal-text">
                                <h2>{title}</h2>
                                <div className="content">{content}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ExperienceBox;
