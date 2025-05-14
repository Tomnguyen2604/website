import "../styles/Navbar.css";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Fade triggerOnce>
            <div className="navbar">
                <div className="navbar_container">
                    <div className="navbar_logo">
                        <NavLink to="/" className="logo-link">
                            <h1>HN</h1>
                        </NavLink>
                    </div>
                    <div
                        className={`navbar_items ${isMenuOpen ? "active" : ""}`}
                    >
                        <ul>
                            <li>
                                <NavLink
                                    to="/home"
                                    className={({ isActive }) =>
                                        isActive ? "active-link" : ""
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? "active-link" : ""
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/experience"
                                    className={({ isActive }) =>
                                        isActive ? "active-link" : ""
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Experience
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/projects"
                                    className={({ isActive }) =>
                                        isActive ? "active-link" : ""
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive ? "active-link" : ""
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <button
                        className="mobile-menu-button"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`menu-icon ${isMenuOpen ? "open" : ""}`}
                        ></span>
                    </button>
                </div>
            </div>
        </Fade>
    );
};

export default Navbar;
