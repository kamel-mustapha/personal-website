import Gradient from "../../assets/gradient.svg";
import Minelead from "../../assets/minelead-home.png";
import Wissal from "../../assets/wissal-academy-home.png";
import Statuschecks from "../../assets/statuschecks-home.png";
import Easygestion from "../../assets/gestion-home.jpg";
import Lamacta from "../../assets/lamacta-home.png";
import Autodiscount from "../../assets/autodiscount.png";
import ClubAuto from "../../assets/club-auto.png";
import { Presentation } from "./Presentation";
import { useContext, useState } from "react";
import { LangContext } from "../../contexts/LangContext";
import { TRANSLATIONS } from "../../translations";
import Node from "../../assets/nodejs-icon.svg";
import Nest from "../../assets/nest-icon.png";
import Angular from "../../assets/angular-icon.svg";
import Kubernetes from "../../assets/kubernetes-icon.svg";
import Ovh from "../../assets/ovh-icon.svg";
import Nx from "../../assets/nx-logo.svg";
import Spring from "../../assets/spring-logo.png";
import Docker from "../../assets/docker-logo.svg";
import Aws from "../../assets/aws-logo.png";
import Python from "../../assets/python-logo.svg";
import Django from "../../assets/django-logo.svg";
import Selenium from "../../assets/selenium-logo.png";

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
  technologies?: string[];
}

export function Projects() {
  const language = useContext(LangContext);
  const [dialog, setDialog] = useState(false);
  const projects: ProjectType[] = [
    {
      name: "Autodiscount",
      preview: "https://www.autodiscount.fr",
      image: Autodiscount,
      position: {
        en: "Full Stack Developer",
        fr: "Developpeur Full Stack",
      },
      description: {
        en: "One of the leading French car brokers. Autodiscount offers discounted new cars from major brands, leasing solutions, trade-ins, and online purchase services. I contributed to improving the performance, UX, and core business features of the platform.",
        fr: `L'un des principaux mandataires auto en France. Autodiscount propose des voitures neuves à prix remises, du leasing, la reprise de vehicules et des services d'achat en ligne. J'ai contribue à l'amelioration des performances, de l'experience utilisateur et des fonctionnalites metiers du site.`,
      },
      technologies: [Node, Nest, Angular, Kubernetes, Ovh],
    },
    {
      name: "Club Auto",
      preview: "https://www.club-auto.com",
      image: ClubAuto, // à remplacer par l'import de ton image/logo
      position: {
        en: "Full Stack Developer",
        fr: "Développeur Full Stack",
      },
      description: {
        en: "French car brokerage platform specializing in discounted new vehicles and leasing solutions. Club Auto provides online tools for configuration, trade-ins, and financing. I worked on optimizing user flows, enhancing performance, and integrating business features.",
        fr: `Plateforme française de courtage automobile spécialisée dans les voitures neuves à prix remisés et les solutions de leasing. Club Auto propose des outils en ligne pour la configuration, la reprise et le financement. J'ai travaillé sur l'optimisation des parcours utilisateurs, l'amélioration des performances et l'intégration des fonctionnalités métier.`,
      },
      technologies: [Node, Nest, Angular, Kubernetes, Ovh],
    },
    {
      name: "Wissal Academy",
      preview: "https://wissalacademy.com",
      image: Wissal,
      position: {
        en: "Full Stack Developer / Tech Lead",
        fr: "Developpeur Full Stack / Lead Tech",
      },
      description: {
        en: "Wissal Academy is a web platform designed for managing training schools. It offers a showcase website along with a back-office system, enabling users to efficiently manage training programs, students, instructors, and certifications. The platform provides an integrated solution for streamlining operations and enhancing the visibility of educational institutions.",
        fr: `Wissal Academy est une plateforme web conçue pour la gestion des ecoles de formation. Elle propose un site vitrine ainsi qu’un système de back-office, permettant aux utilisateurs de gerer efficacement les programmes de formation, les etudiants, les instructeurs et les certifications. La plateforme offre une solution integree pour optimiser les operations et ameliorer la visibilite des etablissements educatifs.`,
      },
      technologies: [Angular, Nx, Spring, Docker, Aws],
    },
    {
      name: "Lamacta",
      preview: "https://lamacta.com",
      image: Lamacta,
      position: {
        en: "Full Stack Developer",
        fr: "Developpeur full stack",
      },
      description: {
        en: "Lamacta is your go-to platform for buying, selling, and renting real estate in Algeria. Whether you're searching for apartments, villas, or commercial properties, Lamacta simplifies the process with thousands of listings, a user-friendly interface, and a property price estimation tool to help you make informed decisions.",
        fr: `Lamacta est votre plateforme de reference pour l'achat, la vente et la location de biens immobiliers en Algerie. Que vous recherchiez des appartements, des villas ou des proprietes commerciales, Lamacta simplifie le processus avec des milliers d'annonces, une interface conviviale et un outil d'estimation des prix des biens immobiliers pour vous aider a prendre des decisions eclairees.`,
      },
      technologies: [Python, Django, Aws, Docker, Selenium],
    },
    {
      name: "Minelead",
      preview: "https://minelead.io",
      image: Minelead,
      position: {
        en: "Full Stack Developer",
        fr: "Developpeur Full Stack",
      },
      description: {
        en: "Find Emails and Generate Leads. Cutting Edge Email Finder and Verifier, with Email scrapper for LinkedIn and more features for the best lead generation tool. find email for any company or website as you visit them.",
        fr: `Trouvez des e-mails et generez des leads. Un outil de pointe pour trouver et verifier des e-mails, avec un extracteur d'e-mails pour LinkedIn et bien plus de fonctionnalites pour le meilleur outil de generation de leads. Trouvez des adresses e-mail pour toute entreprise ou site web au fur et a mesure que vous les visitez.`,
      },
      technologies: [Python, Django, Aws, Docker, Selenium],
    },
    {
      name: "Easygestion",
      image: Easygestion,
      position: {
        en: "Founder / Full Stack Developer",
        fr: "Fondateur / Developpeur full stack",
      },
      description: {
        en: "EasyGestion is a desktop software tailored for merchants, including school cafeterias, to streamline their business operations. It offers essential tools for managing inventory, generating invoices and delivery notes, and handling sales, providing a simple and efficient solution for daily commerce management.",
        fr: `EasyGestion est un logiciel de bureau conçu pour les commerçants, y compris les cantines scolaires, afin de simplifier la gestion de leurs operations commerciales. Il propose des outils essentiels pour gerer les stocks, generer des factures et des bons de livraison, ainsi que gerer les ventes, offrant une solution simple et efficace pour la gestion quotidienne du commerce.`,
      },
      technologies: [Python, Django, Aws],
    },
    {
      name: "Statuscheks",
      image: Statuschecks,
      position: {
        en: "Founder / Full Stack Developer",
        fr: "Fondateur / Developpeur full stack",
      },
      description: {
        en: "StatusChecks is your all-in-one solution for monitoring websites, servers, APIs, and databases. Designed to keep your services running smoothly, it offers real-time monitoring, instant alerts, and detailed reports, so you can address potential issues before they impact your business.",
        fr: `StatusChecks est votre solution tout-en-un pour surveiller les sites web, serveurs, APIs et bases de donnees. Conçu pour garantir le bon fonctionnement de vos services, il offre une surveillance en temps reel, des alertes instantanees et des rapports detailles, vous permettant de resoudre les problèmes potentiels avant qu'ils n'affectent votre activite.`,
      },
      technologies: [Python, Django, Aws, Docker],
    },
  ];

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
          <div
            key={index}
            className={`project-case animate__animated animate__fadeIn ${
              index % 2 > 0 ? "lg:flex-row-reverse" : "lg:flex-row "
            }`}
          >
            <div className="description">
              <h4 className={`${index % 2 > 0 ? "lg:text-right" : ""}`}>
                {project.position[language!.state]}
              </h4>
              <h3 className={`${index % 2 > 0 ? "lg:text-right" : ""}`}>
                {project.name}
              </h3>
              <p
                className={`text ${index % 2 > 0 ? "lg:-translate-x-28" : ""}`}
              >
                {project.description[language!.state]}
              </p>
              <p
                className={`filler ${
                  index % 2 > 0 ? "lg:-translate-x-28" : ""
                }`}
              >
                {project.description[language!.state]}
              </p>
              {
                project.technologies && (
                  // --
                  <div
                    className={`mb-12 !gap-3 items-center !flex flex-wrap ${
                      index % 2 > 0 ? "lg:!justify-end" : ""
                    }`}
                  >
                    {project.technologies.map((technology) => (
                      <img src={technology} alt="" className="w-16 h-16" />
                    ))}
                  </div>
                )
                // --
              }
              <div className={`${index % 2 > 0 ? "lg:justify-end" : ""}`}>
                {/* <button className="button-primary" onClick={showDialog}>
                  LEARN MORE
                </button> */}
                {project.preview && (
                  <a
                    className="button-secondary"
                    href={project.preview}
                    target="_blank"
                  >
                    {TRANSLATIONS.PREVIEW[language!.state]}
                  </a>
                )}
              </div>
            </div>
            <div className="image">
              <img
                src={project.image}
                className={`w-full h-full absolute top-8 object-cover lg:object-fit lg:object-cover rounded-xl ${
                  index % 2 > 0 ? "lg:-left-8" : "lg:-right-8 "
                }`}
                alt=""
              />
            </div>
            <img
              className={`gradient z-0 ${
                index % 2 > 0 ? "-left-16" : "-right-16 "
              }`}
              src={Gradient}
              alt=""
            />
          </div>
        ))}
      </div>
      {dialog && <Presentation onClose={hideDialog} />}
    </>
  );
}
