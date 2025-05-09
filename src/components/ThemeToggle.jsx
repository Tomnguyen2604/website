import { useTheme } from "../context/ThemeContext";
import { Fade } from "react-awesome-reveal";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <Fade triggerOnce>
            <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
            >
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </button>
        </Fade>
    );
};

export default ThemeToggle;
