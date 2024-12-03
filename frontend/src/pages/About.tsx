import { useContext } from "react";
import Reading from "../assets/reading-svg.svg";
import { LangContext } from "../contexts/LangContext";

export function About() {
  const language = useContext(LangContext);

  const TRANSLATIONS = {
    ABOUT: {
      en: "About",
      fr: "À propos",
    },
    DESCRIPTION_1: {
      en: "Hi, I'm Kamel Dine! I'm a Full Stack Developer with a couple of years of experience delivering innovative, high-quality solutions on international projects.",
      fr: "Salut, je suis Kamel Dine ! Je suis un Développeur Full Stack avec plusieurs années d'expérience dans la livraison de solutions innovantes et de haute qualité sur des projets internationaux.",
    },
    DESCRIPTION_2: {
      en: `My focus is on creating seamless user experiences and efficient processes, working across both frontend and backend. I love collaborating within dynamic teams, mentoring others, and
          continuously learning new approaches to solve complex problems.`,
      fr: `Mon objectif est de créer des expériences utilisateur fluides et des processus efficaces, en travaillant à la fois sur le frontend et le backend. J'adore collaborer au sein d'équipes dynamiques, 
          encadrer les autres et apprendre continuellement de nouvelles approches pour résoudre des problèmes complexes.`,
    },
    DESCRIPTION_3: {
      en: "Outside of tech, I enjoy exploring new ideas and the beautiful landscapes of France. Let’s connect and bring fresh ideas to life together!",
      fr: "En dehors de la tech, j'aime explorer de nouvelles idées et admirer les magnifiques paysages de la France. Connectons-nous et donnons vie à des idées novatrices ensemble !",
    },
    TOUCH: {
      en: "Get in touch",
      fr: "Entrer en contact",
    },
  };
  return (
    <div className="flex flex-col lg:flex-row gap-6 pt-10">
      <img src={Reading} alt="" className="w-full" />
      <div className="w-full md:pt-40">
        <h1 className="text-6xl mb-16 text-text">{TRANSLATIONS.ABOUT[language!.state]}.</h1>
        <p className="max-w-3xl mb-12 animate__animated animate__fadeIn">
          {TRANSLATIONS.DESCRIPTION_1[language!.state]}
          <br /> <br />
          {TRANSLATIONS.DESCRIPTION_2[language!.state]}
          <br /> <br />
          {TRANSLATIONS.DESCRIPTION_3[language!.state]}
        </p>
        <a href="mailto:kamel.dine@hotmail.com" className="button-primary">
          {TRANSLATIONS.TOUCH[language!.state]}
        </a>
      </div>
    </div>
  );
}
