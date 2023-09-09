import { useContext } from "react";
import { languageContexts } from "./languageContext";
import { themeContext } from "./themeContext";


export const Navbar = () => {
  // get theme and lanauge contexts here
  const {language}=useContext(languageContexts);
  const {theme,setTheme}=useContext(themeContext);


function handleTheme(){

  if(theme==="Dark"){
    setTheme("Light");
  }else{
    setTheme("Dark");
  }

}
  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        <button onClick={()=>handleTheme()}>{theme} Theme</button>
        <span>{language}</span>
      </div>
    </div>
  );
};
