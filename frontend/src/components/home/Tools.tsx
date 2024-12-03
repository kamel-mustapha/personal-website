import { useContext } from "react";
import ToolsSvg from "../../assets/tools.png";
import { LangContext } from "../../contexts/LangContext";

export function Tools() {
  const language = useContext(LangContext);

  const TRANSLATIONS = {
    DESCRIPTION_1: {
      en: "I'm currently looking to join a",
      fr: "Je cherche actuellement à rejoindre une équipe",
    },
    DESCRIPTION_2: {
      en: "cross-functional",
      fr: "transversale",
    },
    DESCRIPTION_3: {
      en: "team that values improving people's lives through accessible design",
      fr: "qui valorise l'amélioration de la vie des gens grâce à un design accessible",
    },
  };
  return (
    <div className="mt-16">
      <h2 className="text-4xl text-center max-w-[1000px] mx-auto leading-relaxed">
        {TRANSLATIONS.DESCRIPTION_1[language!.state]} <span className="text-text">{TRANSLATIONS.DESCRIPTION_2[language!.state]}</span> {TRANSLATIONS.DESCRIPTION_3[language!.state]}
      </h2>
      <img src={ToolsSvg} alt="" className="mx-auto" />
    </div>
  );
}
