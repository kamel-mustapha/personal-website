import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import { useContext } from "react";
import { LangContext } from "../../contexts/LangContext";

export function Hero() {
  const language = useContext(LangContext);

  const TRANSLATIONS = {
    HELLO: {
      en: "Hello! I am",
      fr: "Bonjour! C'est",
    },
    DEVELOPER: {
      en: "A developer who:",
      fr: "Un développeur qui",
    },
    EXPERIENCES: {
      en: "Builds experiences that",
      fr: "Crée des expériences qui",
    },
    CONNECT: {
      en: "connect, inspire, and empower",
      fr: "connectent, inspirent et responsabilisent",
    },
    QUOTE: {
      en: "Because it’s not just about writing code, it’s about creating something that truly resonates with users.",
      fr: "Parce que ce n’est pas seulement écrire du code, c’est créer quelque chose qui résonne vraiment avec les utilisateurs.",
    },
  };

  return (
    <div className="overflow-hidden max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-4 lg:mt-8">
      <div className="hero-avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="pt-24 lg:pt-44 lg:px-4 lg:px:0 lg:-translate-x-16 relative flex flex-col gap-8 lg:gap-4 max-w-[900px]">
        <p className="absolute top-10 lg:top-16 lg:-left-4">
          <img src={Arrow} className="hidden lg:block absolute -left-32 -top-7" alt="" />
          {TRANSLATIONS.HELLO[language!.state]} <span className="text-text">Kamel</span>
        </p>
        <h1>{TRANSLATIONS.DEVELOPER[language!.state]}</h1>
        <h2 className="text-4xl">
          {TRANSLATIONS.EXPERIENCES[language!.state]} <span className="text-text animate__animated animate__fadeIn">{TRANSLATIONS.CONNECT[language!.state]}</span>...
        </h2>
        <h3 className="sm">"{TRANSLATIONS.QUOTE[language!.state]}"</h3>
      </div>
    </div>
  );
}
