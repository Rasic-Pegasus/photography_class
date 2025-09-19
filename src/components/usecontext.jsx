import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || "light";
  });

  const [fontFamily, setFontFamily] = useState(() => {
  return localStorage.getItem("fontFamily") || "fontFamily";
  });
  
  const [fontSize, setFontSize] = useState(() => {
    return parseInt(localStorage.getItem("fontSize")) || 16;
  });

     // Function to increase font size by 5px
  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 2, 30)); // Max font size limit of 30px
  };

  // Function to decrease font size by 5px
  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 2, 16)); // Min font size limit of 16px
  };

   // Function to reset font size to default
  const resetFontSize = () => {
    setFontSize(16);
  };

  


   // Toggle function for font family
  const toggleFontFamily = () => {
    setFontFamily((prev) => (prev === "fontFamily" ? "font-scheme2" : "fontFamily"));
  };
  
  
  
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


    // Effect to add/remove className on HTML tag of fontFamily
  useEffect(() => {
    const htmlElement = document.documentElement; // Gets the <html> tag
    
    // Remove both classes first
    htmlElement.classList.remove('font-scheme2');
    
    // Add the current theme class
    htmlElement.classList.add(`${fontFamily}`);

    // Save theme in localStorage
    localStorage.setItem("fontFamily", fontFamily);
    
    // Cleanup function to remove classes when component unmounts
    return () => {
      htmlElement.classList.remove('font-scheme2');
    };
  }, [fontFamily]);



   // Effect to update global font size from HTML
  useEffect(() => {
    const htmlElement = document.documentElement;
    
    // Set the font size on the html element
    htmlElement.style.fontSize = `${fontSize}px`;
    
    // Save font size in localStorage
    localStorage.setItem("fontSize", fontSize.toString());
    
    // Cleanup function
    return () => {
      htmlElement.style.fontSize = '';
    };
  }, [fontSize]);




  return (
    <ThemeContext.Provider value={{ 
       theme, 
      toggleTheme, 
      fontFamily, 
      toggleFontFamily,
      fontSize,
      increaseFontSize,
      decreaseFontSize,
      resetFontSize
      }}>
      {children}
    </ThemeContext.Provider>
  );
};