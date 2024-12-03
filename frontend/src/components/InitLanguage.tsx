import { useContext, useEffect } from "react";
import { LangContext, Language } from "../contexts/LangContext";

export function InitializeLanguage() {
  const language = useContext(LangContext);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      language?.setState(savedLang as Language);
    }
  }, [language]);

  return null;
}
