import "../styles/Navbar.css";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar_container">
                <div className="navbar_logo">
                    <button onClick={() => scrollToSection('.hero-section')} className="logo-link">
                        <h1>HN</h1>
                    </button>
                </div>
                <div className={`navbar_items ${isMenuOpen ? "active" : ""}`}>
                    <ul>
                        <li>
                            <button onClick={() => scrollToSection('.about-section')}>
                                About
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('.projects-section')}>
                                Projects
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('.contact-section')}>
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
                <button
                    className="mobile-menu-button"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`menu-icon ${isMenuOpen ? "open" : ""}`}></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
