import { useContext } from "react";
import { Projects } from "../components/portfolio/Projects";
import { LangContext } from "../contexts/LangContext";

export function Portfolio() {
  const language = useContext(LangContext);
  const TRANSLATIONS = {
    TITLE: {
      en: `Throughout my career, I've had the opportunity to work on a wide variety of projects across different domains, including e-commerce, e-learning, marketing, and desktop software. I've worn
        multiple hats, such as backend and frontend developer, and have also served as a tech lead on several occasions, where I led teams of developers.`,
      fr: `Au cours de ma carrière, j'ai eu l'opportunité de travailler sur une grande variété de projets dans différents domaines, notamment le e-commerce, l'e-learning, 
      le marketing et les logiciels de bureau. J'ai occupé plusieurs rôles, tels que développeur backend et frontend, et j'ai également exercé en tant que leader technique 
      à plusieurs reprises, où j'ai dirigé des équipes de développeurs.`,
    },
    ADDITION: {
      en: `In addition to these projects, I have also contributed as a consultant on several short-term assignments, providing tailored solutions and delivering immediate impact.`,
      fr: `En plus de ces projets, j'ai également contribué en tant que consultant sur plusieurs missions de courte durée, en proposant des solutions sur mesure et en apportant un impact immédiat.`,
    },
    CONTACT: {
      en: "CONTACT ME",
      fr: "ME CONTACTER",
    },
  };
  return (
    <>
      <h1 className="mt-16 text-4xl">Portfoio</h1>
      <p className="mt-4 max-w-[900px] bg-transparent leading-relaxed">{TRANSLATIONS.TITLE[language!.state]}</p>
      <Projects />
      <p className="text-center mt-60">
        <div>{TRANSLATIONS.ADDITION[language!.state]}</div>
        <a className="!inline-block mt-8 button-primary" href="mailto:kamel.dine@hotmail.com">
          {TRANSLATIONS.CONTACT[language!.state]}
        </a>
      </p>
    </>
  );
}
