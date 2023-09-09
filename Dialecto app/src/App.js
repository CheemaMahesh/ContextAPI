import "./styles.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { languageContexts } from "./languageContext";
import { themeContext } from "./themeContext";

// get theme and language contexts here

export default function App() {
  const [theme, setTheme] = useState("Dark");
  const [language, setLanguage] = useState("English");

  return (
    <languageContexts.Provider value={{language,setLanguage}}>
      <themeContext.Provider value={{theme,setTheme,}}>
      <div className={`App ${theme}`}>
      <Navbar />
      <Home />
    </div>
      </themeContext.Provider>
    </languageContexts.Provider>
  );
}
