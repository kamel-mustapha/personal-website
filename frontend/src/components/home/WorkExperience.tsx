import Minelead from "../../assets/minelead.png";
import Ethisoft from "../../assets/ethisoft.jpg";
import Carto from "../../assets/carto.svg";
import Wissal from "../../assets/wissal-academy.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LangContext } from "../../contexts/LangContext";
import { TRANSLATIONS } from "../../translations";

export function WorkExperience() {
  const language = useContext(LangContext);
  const portfolios = [
    {
      company: "Minelead",
      description: {
        en: "Minelead provides real-time email finding and verification, with tools for bulk searches, browser extensions, and custom email lists to help you gather high-quality leads efficiently.",
        fr: "Minelead fournit la recherche et la vérification d'emails en temps réel, avec des outils pour les recherches en masse, des extensions de navigateur et des listes d'emails personnalisées pour vous aider a recueillir des prospects de haute qualité de manière efficace.",
      },
      img: Minelead,
      link: "",
      preview: "https://minelead.io",
      class: "p-4 bg-white",
    },
    {
      company: "Wissal Academy",
      description: {
        en: "Wissal Academy provides a range of affordable online and offline courses in web development, database management, AI, and DevOps, designed to build future-ready skills.",
        fr: "Wissal Academy propose une gamme de cours en ligne et en présentiel abordables en développement web, gestion de bases de données, IA et DevOps, conçus pour développer des compétences prêtes pour l'avenir.",
      },
      img: Wissal,
      class: "!rounded-xl object-cover",
      preview: "https://wissalacademy.com",
      link: "",
    },
    {
      company: "Carto",
      description: {
        en: "Carto is a web application for designing web application architectures and managing open and closed flows. It simplifies the process of visualizing and documenting application structures.",
        fr: "Carto est une application web pour concevoir des architectures d'applications web et gérer les flux ouverts et fermés. Elle simplifie le processus de visualisation et de documentation des structures d'applications.",
      },
      img: Carto,
      link: "",
    },
    {
      company: "Ethisoft",
      description: {
        en: "Ethisoft is a web app for managing and declaring gifts and invitations received by employees, ensuring compliance with internal policies and ethics regulations.",
        fr: "Ethisoft est une application web pour gérer et déclarer les cadeaux et invitations reçus par les employés, garantissant ainsi la conformité avec les politiques internes et les réglementations éthiques.",
      },
      img: Ethisoft,
      class: "p-2 bg-white !rounded-xl",
      link: "",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="work-experience mt-16 py-32">
        <h2 className="text-3xl">Portfolio</h2>
        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          {portfolios.map((portfolio, index) => (
            <div key={index} className="work-experience-case">
              <img src={portfolio.img} alt="" className={`w-32 h-32 rounded-full ${portfolio.class ? portfolio.class : ""}`} />
              <div className="space-y-4">
                <h3 className="text-2xl">{portfolio.company}</h3>
                <p className="text-sm">{portfolio.description[language!.state]}</p>
                <div className="flex flex-col lg:flex-row gap-4 !mt-6">
                  {/* <a className="button-primary" href={portfolio.link}>
                    {TRANSLATIONS.LEARN[language!.state]}
                  </a> */}
                  {portfolio.preview && (
                    <a className="button-secondary" href={portfolio.preview} target="_blank">
                      {TRANSLATIONS.PREVIEW[language!.state]}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-8">
        <Link className="button-primary z-[100]" to="/portfolio">
          {TRANSLATIONS.MORE_PROJECTS[language!.state]}
        </Link>
      </div>
    </div>
  );
}
