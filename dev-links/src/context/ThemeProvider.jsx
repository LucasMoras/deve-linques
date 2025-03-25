import { ThemeContext } from "./ThemeContext";
import { useEffect, useState } from "react";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  function toggleTheme(){
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  );
}
