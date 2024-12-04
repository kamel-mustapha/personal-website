import { useContext } from "react";
import { LangContext } from "../../contexts/LangContext";

export function Index() {
  const language = useContext(LangContext);

  const TRANSLATIONS = {
    DEVELOPER: {
      en: "I'm a Developer",
      fr: "Je suis un Développeur",
    },
    GOOD: {
      en: "And a good one !",
      fr: "Et un bon !",
    },
    DESCRIPTION: {
      en: `With over 6 years of hands-on experience as a self-taught web developer, 
      I craft efficient, scalable, and innovative digital solutions. My approach focuses on seamlessly aligning user needs
        with business goals, ensuring that every project is both functional and impactful.`,
      fr: `Fort de plus de 6 ans d'expérience pratique en tant que développeur web autodidacte, 
      je crée des solutions numériques efficaces, évolutives et innovantes. Mon approche consiste à aligner de manière fluide les besoins des utilisateurs avec les objectifs commerciaux, en veillant à ce que chaque projet soit à la fois fonctionnel et impactant.
      `,
    },
  };
  return (
    <>
      <h3 className="mt-14 lg:mt-0  text-2xl lg:text-4xl font-semibold lg:flex gap-3">
        <span>{TRANSLATIONS.DEVELOPER[language!.state]}</span>
        <span className="inline-block text-text text-sm ml-4 lg:ml-0">{TRANSLATIONS.GOOD[language!.state]}</span>
      </h3>
      <p className="mt-12 max-w-[1450px] text-lg animate__animated animate__fadeIn">{TRANSLATIONS.DESCRIPTION[language!.state]}</p>
    </>
  );
}
