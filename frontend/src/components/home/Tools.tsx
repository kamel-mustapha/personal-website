import { useContext } from "react";
import ToolsSvg from "../../assets/tools.png";
import { LangContext } from "../../contexts/LangContext";
import { TRANSLATIONS } from "../../translations";

export function Tools() {
  const language = useContext(LangContext);
  return (
    <div className="mt-16">
      <h2 className="text-2xl lg:text-4xl mb-12 lg:mb-8 text-center max-w-[1000px] mx-auto leading-relaxed">
        {TRANSLATIONS.TOOLS_DESCRIPTION_1[language!.state]} <span className="text-text">{TRANSLATIONS.TOOLS_DESCRIPTION_2[language!.state]}</span> {TRANSLATIONS.TOOLS_DESCRIPTION_3[language!.state]}
      </h2>
      <img src={ToolsSvg} alt="" className="mx-auto" />
    </div>
  );
}
