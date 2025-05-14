import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Always default to dark mode, remove state and localStorage logic
    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            "dark" // Always dark
        );
    }, []); // Run only once on mount

    // Provide a no-op toggleTheme and always true isDarkMode for compatibility if consumed elsewhere,
    // though ideally consumers would be updated not to need these.
    const value = {
        isDarkMode: true,
        toggleTheme: () => {}, // No operation
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
