import { useContext } from "react";
import { Projects } from "../components/portfolio/Projects";
import { LangContext } from "../contexts/LangContext";
import { TRANSLATIONS } from "../translations";

export function Portfolio() {
  const language = useContext(LangContext);
  return (
    <>
      <h1 className="mt-16 text-4xl">Portfoio</h1>
      <p className="mt-4 max-w-[1400px] bg-transparent leading-relaxed">{TRANSLATIONS.PORTFOLIO_TITLE[language!.state]}</p>
      <Projects />
      <p className="text-center mt-60">
        <div>{TRANSLATIONS.PORTFOLIO_ADDITION[language!.state]}</div>
        <a className="!inline-block mt-8 button-primary" href="mailto:kamel.dine@hotmail.com">
          {TRANSLATIONS.CONTACT_ME[language!.state]}
        </a>
      </p>
    </>
  );
}
