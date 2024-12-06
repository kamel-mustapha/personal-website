import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import { useContext } from "react";
import { LangContext } from "../../contexts/LangContext";
import { TRANSLATIONS } from "../../translations";

export function Hero() {
  const language = useContext(LangContext);
  return (
    <div className="overflow-hidden max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-4 lg:mt-8 pt-8 lg:pt-0">
      <div className="hero-avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="pt-24 lg:pt-44 lg:px-4 lg:px:0 lg:-translate-x-16 relative flex flex-col gap-8 lg:gap-4 max-w-[900px]">
        <p className="absolute top-10 lg:top-16 lg:-left-4">
          <img src={Arrow} className="hidden lg:block absolute -left-32 -top-7" alt="" />
          {TRANSLATIONS.HERO_HELLO[language!.state]} <span className="text-text">Kamel</span>
        </p>
        <h1>{TRANSLATIONS.HERO_DEVELOPER[language!.state]}</h1>
        <h2 className="text-2xl lg:text-4xl">
          {TRANSLATIONS.HERO_EXPERIENCES[language!.state]} <span className="text-text animate__animated animate__fadeIn">{TRANSLATIONS.HERO_CONNECT[language!.state]}</span>...
        </h2>
        <h3 className="sm">"{TRANSLATIONS.HERO_QUOTE[language!.state]}"</h3>
      </div>
    </div>
  );
}
