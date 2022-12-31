// react libraries
import { createContext, useState } from "react";

// theme context
const ThemeContext = createContext(false);

// Provider
const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  /**
   * Handles toggle
   */
  const toggleFunction = () => {
    setToggle(!toggle);
  };

  return (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
