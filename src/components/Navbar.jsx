import "../styles/Navbar.css";
import { Fade } from "react-awesome-reveal";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    return (
        <Fade triggerOnce>
            <div className="navbar">
                <div className="navbar_container">
                    <div className="navbar_logo">
                        <NavLink to="/" className="logo-link">
                            <h1>HN</h1>
                        </NavLink>
                    </div>
                    <div className="navbar_items">
                        <ul>
                            <li>
                                <NavLink
                                    to="/home"
                                    className={({ isActive }) =>
                                        isActive ? "active-link" : ""
                                    }
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
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </Fade>
    );
};
export default Navbar;
