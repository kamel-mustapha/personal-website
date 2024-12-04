import Gradient from "../../assets/gradient.svg";
import Minelead from "../../assets/minelead-home.png";
import Wissal from "../../assets/wissal-academy-home.png";
import Carto from "../../assets/carto-home.png";
import Statuschecks from "../../assets/statuschecks-home.png";
import Easygestion from "../../assets/gestion-home.jpg";
import Lamacta from "../../assets/lamacta-home.png";
import { Presentation } from "./Presentation";
import { useContext, useState } from "react";
import { LangContext } from "../../contexts/LangContext";

interface ProjectType {
  name: string;
  preview?: string;
  image: string;
  position: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
}

export function Projects() {
  const language = useContext(LangContext);
  const [dialog, setDialog] = useState(false);
  const projects: ProjectType[] = [
    {
      name: "Minelead",
      preview: "https://minelead.io",
      image: Minelead,
      position: {
        en: "Full Stack Developer",
        fr: "Développeur Full Stack",
      },
      description: {
        en: "Find Emails and Generate Leads. Cutting Edge Email Finder and Verifier, with Email scrapper for LinkedIn and more features for the best lead generation tool. find email for any company or website as you visit them.",
        fr: `Trouvez des e-mails et générez des leads. Un outil de pointe pour trouver et vérifier des e-mails, avec un extracteur d'e-mails pour LinkedIn et bien plus de fonctionnalités pour le meilleur outil de génération de leads. Trouvez des adresses e-mail pour toute entreprise ou site web au fur et a mesure que vous les visitez.`,
      },
    },
    {
      name: "Wissal Academy",
      preview: "https://wissalacademy.com",
      image: Wissal,
      position: {
        en: "Full Stack Developer / Tech Lead",
        fr: "Développeur Full Stack / Lead Tech",
      },
      description: {
        en: "Wissal Academy is a web platform designed for managing training schools. It offers a showcase website along with a back-office system, enabling users to efficiently manage training programs, students, instructors, and certifications. The platform provides an integrated solution for streamlining operations and enhancing the visibility of educational institutions.",
        fr: `Wissal Academy est une plateforme web conçue pour la gestion des écoles de formation. Elle propose un site vitrine ainsi qu’un système de back-office, permettant aux utilisateurs de gérer efficacement les programmes de formation, les étudiants, les instructeurs et les certifications. La plateforme offre une solution intégrée pour optimiser les opérations et améliorer la visibilité des établissements éducatifs.`,
      },
    },
    {
      name: "Carto",
      image: Carto,
      position: {
        en: "Tech Lead",
        fr: "Lead Tech",
      },
      description: {
        en: "Carto is an innovative web application designed to simplify the design, visualization, and management of complex application architectures. Whether you’re organizing open or restricted data flows, Carto provides a powerful, intuitive interface that enhances clarity and productivity.",
        fr: `Carto est une application web innovante conçue pour simplifier la conception, la visualisation et la gestion des architectures d'applications complexes. Que vous organisiez des flux de données ouverts ou restreints, Carto offre une interface puissante et intuitive qui améliore la clarté et la productivité.`,
      },
    },
    {
      name: "Statuscheks",
      image: Statuschecks,
      position: {
        en: "Founder / Full Stack Developer",
        fr: "Fondateur / Développeur full stack",
      },
      description: {
        en: "StatusChecks is your all-in-one solution for monitoring websites, servers, APIs, and databases. Designed to keep your services running smoothly, it offers real-time monitoring, instant alerts, and detailed reports, so you can address potential issues before they impact your business.",
        fr: `StatusChecks est votre solution tout-en-un pour surveiller les sites web, serveurs, APIs et bases de données. Conçu pour garantir le bon fonctionnement de vos services, il offre une surveillance en temps réel, des alertes instantanées et des rapports détaillés, vous permettant de résoudre les problèmes potentiels avant qu'ils n'affectent votre activité.`,
      },
    },
    {
      name: "Easygestion",
      image: Easygestion,
      position: {
        en: "Founder / Full Stack Developer",
        fr: "Fondateur / Développeur full stack",
      },
      description: {
        en: "EasyGestion is a desktop software tailored for merchants, including school cafeterias, to streamline their business operations. It offers essential tools for managing inventory, generating invoices and delivery notes, and handling sales, providing a simple and efficient solution for daily commerce management.",
        fr: `EasyGestion est un logiciel de bureau conçu pour les commerçants, y compris les cantines scolaires, afin de simplifier la gestion de leurs opérations commerciales. Il propose des outils essentiels pour gérer les stocks, générer des factures et des bons de livraison, ainsi que gérer les ventes, offrant une solution simple et efficace pour la gestion quotidienne du commerce.`,
      },
    },
    {
      name: "Lamacta",
      image: Lamacta,
      position: {
        en: "Full Stack Developer",
        fr: "Développeur full stack",
      },
      description: {
        en: "Lamacta is your go-to platform for buying, selling, and renting real estate in Algeria. Whether you're searching for apartments, villas, or commercial properties, Lamacta simplifies the process with thousands of listings, a user-friendly interface, and a property price estimation tool to help you make informed decisions.",
        fr: `Lamacta est votre plateforme de référence pour l'achat, la vente et la location de biens immobiliers en Algérie. Que vous recherchiez des appartements, des villas ou des propriétés commerciales, Lamacta simplifie le processus avec des milliers d'annonces, une interface conviviale et un outil d'estimation des prix des biens immobiliers pour vous aider a prendre des décisions éclairées.`,
      },
    },
  ];
  const TRANSLATIONS = {
    PREVIEW: {
      en: "PREVIEW",
      fr: "APERÇU",
    },
  };

  // const showDialog = () => {
  //   setDialog(true);
  // };

  const hideDialog = () => {
    setDialog(false);
  };

  return (
    <>
      <div className="mt-16">
        {projects.map((project, index) => (
          <div key={index} className={`project-case animate__animated animate__fadeIn ${index % 2 > 0 ? "lg:flex-row-reverse" : "lg:flex-row "}`}>
            <div className="description">
              <h4 className={`${index % 2 > 0 ? "lg:text-right" : ""}`}>{project.position[language!.state]}</h4>
              <h3 className={`${index % 2 > 0 ? "lg:text-right" : ""}`}>{project.name}</h3>
              <p className={`text ${index % 2 > 0 ? "lg:-translate-x-28" : ""}`}>{project.description[language!.state]}</p>
              <p className={`filler ${index % 2 > 0 ? "lg:-translate-x-28" : ""}`}>{project.description[language!.state]}</p>
              <div className={`${index % 2 > 0 ? "lg:justify-end" : ""}`}>
                {/* <button className="button-primary" onClick={showDialog}>
                  LEARN MORE
                </button> */}
                {project.preview && (
                  <a className="button-secondary" href={project.preview} target="_blank">
                    {TRANSLATIONS.PREVIEW[language!.state]}
                  </a>
                )}
              </div>
            </div>
            <div className="image">
              <img src={project.image} className={`w-full h-full absolute top-8 object-cover lg:object-fit lg:object-cover rounded-xl ${index % 2 > 0 ? "lg:-left-8" : "lg:-right-8 "}`} alt="" />
            </div>
            <img className={`gradient z-0 ${index % 2 > 0 ? "-left-16" : "-right-16 "}`} src={Gradient} alt="" />
          </div>
        ))}
      </div>
      {dialog && <Presentation onClose={hideDialog} />}
    </>
  );
}
