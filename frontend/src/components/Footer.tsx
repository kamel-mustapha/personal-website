import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";
import Logo from "../assets/logo.svg";

export function Footer() {
  const language = useContext(LangContext);

  const TRANSLATIONS = {
    DEDICATED: {
      en: "A dedicated developer ready to take on any challenge.",
      fr: "Un développeur dévoué prêt à relever tous les défis.",
    },
    COPYRIGHT: {
      en: "Copyright",
      fr: "Tous droits réservés",
    },
  };
  return (
    <>
      <div className="border-t border-button mt-32 text-center py-8 flex flex-col justify-center items-center gap-6">
        <h3 className="text-2xl flex  items-center">
          <img src={Logo} width={80} alt="" />
          Kamel Dine
        </h3>
        <p className="max-w-[500px] text-gray-400">{TRANSLATIONS.DEDICATED[language!.state]}</p>
        <div className="flex gap-6 my-4">
          <a href="https://www.linkedin.com/in/mustapha-kamel-dine/" target="_blank">
            <i className="fa-brands fa-linkedin-in fa-lg"></i>
          </a>
          <a href="https://github.com/kamel-mustapha" target="_blank">
            <i className="fa-brands fa-github fa-lg"></i>
          </a>
        </div>
      </div>
      <div className="bg-secondary text-text opacity-90 text-center py-4">{TRANSLATIONS.COPYRIGHT[language!.state]} ©2024 Kamel Dine.</div>
    </>
  );
}
