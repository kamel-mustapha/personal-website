import { useContext } from "react";
import { LangContext } from "../../contexts/LangContext";
import { TRANSLATIONS } from "../../translations";

export function Index() {
  const language = useContext(LangContext);
  return (
    <>
      <h3 className="mt-14 lg:mt-0  text-2xl lg:text-4xl font-semibold lg:flex gap-3">
        <span>{TRANSLATIONS.INDEX_DEVELOPER[language!.state]}</span>
        <span className="inline-block text-text text-sm ml-4 lg:ml-0">{TRANSLATIONS.INDEX_GOOD[language!.state]}</span>
      </h3>
      <p className="mt-12 max-w-[1450px] text-lg animate__animated animate__fadeIn">{TRANSLATIONS.INDEX_DESCRIPTION[language!.state]}</p>
    </>
  );
}
