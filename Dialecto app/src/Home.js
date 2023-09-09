import { useContext } from "react";
import { languageContexts } from "./languageContext";
import { themeContext } from "./themeContext";


const content = {
  English:
    "The cat sat lazily on the windowsill, basking in the warm sunshine and occasionally twitching its tail.",
  Hindi:
    "बिल्ली खिड़की पर आलस्य से बैठी थी, गर्म धूप का आनंद ले रही थी और कभी-कभी अपनी पूंछ को हिलाती थी।",
  Marathi:
    "मांजर खिडकीवर आळशीपणे बसली, उबदार सूर्यप्रकाशात बासिंग करत आणि अधूनमधून तिची शेपटी वळवत."
};

export const Home = () => {
  // get language context here
  const {language,setLanguage}=useContext(languageContexts);
  const {theme}=useContext(themeContext);
  function handleLanguage(language){
    setLanguage(language);
  }
  return (
    <div className={theme}>
      <div className="language-container">
    <span onClick={() => handleLanguage("English")}>English</span>
<span onClick={() => handleLanguage("Hindi")}>Hindi</span>
<span onClick={() => handleLanguage("Marathi")}>Marathi</span>

      </div>
      <p>{content[language]}</p>
    </div>
  );
};
