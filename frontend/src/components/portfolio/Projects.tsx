import Gradient from "../../assets/gradient.svg";
import Minelead from "../../assets/minelead-home.png";
import Wissal from "../../assets/wissal-academy-home.png";
import Carto from "../../assets/carto-home.png";
import Statuschecks from "../../assets/statuschecks-home.png";
import Easygestion from "../../assets/gestion-home.jpg";
import Lamacta from "../../assets/lamacta-home.png";
import { Presentation } from "./Presentation";
import { useState } from "react";

export function Projects() {
  const [dialog, setDialog] = useState(false);
  const projects = [
    {
      name: "Minelead",
      preview: "https://minelead.io",
      image: Minelead,
      position: "Full Stack Developer",
      description:
        "Find Emails and Generate Leads. Cutting Edge Email Finder and Verifier, with Email scrapper for LinkedIn and more features for the best lead generation tool. find email for any company or website as you visit them.",
    },
    {
      name: "Wissal Academy",
      preview: "https://wissalacademy.com",
      image: Wissal,
      position: "Full Stack Developer / Frontend Tech Lead",
      description:
        "Wissal Academy is a web platform designed for managing training schools. It offers a showcase website along with a back-office system, enabling users to efficiently manage training programs, students, instructors, and certifications. The platform provides an integrated solution for streamlining operations and enhancing the visibility of educational institutions.",
    },
    {
      name: "Carto",
      image: Carto,
      position: "Tech Lead",
      description:
        "Carto is an innovative web application designed to simplify the design, visualization, and management of complex application architectures. Whether you’re organizing open or restricted data flows, Carto provides a powerful, intuitive interface that enhances clarity and productivity.",
    },
    {
      name: "Statuscheks",
      image: Statuschecks,
      position: "Founder / Full Stack Developer",
      description:
        "StatusChecks is your all-in-one solution for monitoring websites, servers, APIs, and databases. Designed to keep your services running smoothly, it offers real-time monitoring, instant alerts, and detailed reports, so you can address potential issues before they impact your business.",
    },
    {
      name: "Easygestion",
      image: Easygestion,
      position: "Founder / Full Stack Developer",
      description:
        "EasyGestion is a desktop software tailored for merchants, including school cafeterias, to streamline their business operations. It offers essential tools for managing inventory, generating invoices and delivery notes, and handling sales, providing a simple and efficient solution for daily commerce management.",
    },
    {
      name: "Lamacta",
      image: Lamacta,
      position: "Full Stack Developer",
      description:
        "Lamacta is your go-to platform for buying, selling, and renting real estate in Algeria. Whether you're searching for apartments, villas, or commercial properties, Lamacta simplifies the process with thousands of listings, a user-friendly interface, and a property price estimation tool to help you make informed decisions.",
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
          <div key={index} className={`project-case animate__animated animate__fadeIn ${index % 2 > 0 ? "lg:flex-row-reverse" : "lg:flex-row "}`}>
            <div className="description">
              <h4 className={`${index % 2 > 0 ? "lg:text-right" : ""}`}>{project.position}</h4>
              <h3 className={`${index % 2 > 0 ? "lg:text-right" : ""}`}>{project.name}</h3>
              <p className={`text ${index % 2 > 0 ? "lg:-translate-x-28" : ""}`}>{project.description}</p>
              <p className={`filler ${index % 2 > 0 ? "lg:-translate-x-28" : ""}`}>{project.description}</p>
              <div className={`${index % 2 > 0 ? "lg:justify-end" : ""}`}>
                {/* <button className="button-primary" onClick={showDialog}>
                  LEARN MORE
                </button> */}
                {project.preview && (
                  <a className="button-secondary" href={project.preview} target="_blank">
                    Preview
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
