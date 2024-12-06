import { useContext } from "react";
import Reading from "../assets/reading-svg.svg";
import { LangContext } from "../contexts/LangContext";
import { TRANSLATIONS } from "../translations";

export function About() {
  const language = useContext(LangContext);
  return (
    <div className="flex flex-col lg:flex-row gap-6 pt-10">
      <img src={Reading} alt="" className="w-full" />
      <div className="w-full md:pt-40">
        <h1 className="text-6xl mb-16 text-text">{TRANSLATIONS.ABOUT[language!.state]}.</h1>
        <p className="max-w-3xl mb-12 animate__animated animate__fadeIn">
          {TRANSLATIONS.ABOUT_DESCRIPTION_1[language!.state]}
          <br /> <br />
          {TRANSLATIONS.ABOUT_DESCRIPTION_2[language!.state]}
          <br /> <br />
          {TRANSLATIONS.ABOUT_DESCRIPTION_3[language!.state]}
        </p>
        <a href="mailto:kamel.dine@hotmail.com" className="button-primary">
          {TRANSLATIONS.GET_IN_TOUCH[language!.state]}
        </a>
      </div>
    </div>
  );
}
