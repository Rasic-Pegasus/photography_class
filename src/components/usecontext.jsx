import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || "light";
  });
  

  // Toggle function for dark/light
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Effect to add/remove className on HTML tag
  useEffect(() => {
    const htmlElement = document.documentElement; // Gets the <html> tag
    
    // Remove both classes first
    htmlElement.classList.remove('light-theme', 'dark-theme');
    
    // Add the current theme class
    htmlElement.classList.add(`${theme}-theme`);

    // Save theme in localStorage
    localStorage.setItem("theme", theme);
    
    // Cleanup function to remove classes when component unmounts
    return () => {
      htmlElement.classList.remove('light-theme', 'dark-theme');
    };
  }, [theme]);

  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};