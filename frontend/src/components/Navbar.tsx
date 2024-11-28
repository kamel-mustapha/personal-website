import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";

export function Navbar() {
  const [mobileNavbar, setMobileNavbar] = useState<boolean>(false);

  const onClickMobileNavbar = () => {
    setMobileNavbar(!mobileNavbar);
  };

  const linkClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const links = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "ABOUT",
      link: "/about",
    },
    {
      name: "PORTFOLIO",
      link: "/portfolio",
    },
  ];
  return (
    <nav className="bg-secondary fixed w-full z-[500] bg-opacity-60 backdrop-blur-md">
      <div className="max-w-primary mx-auto px-4 py-6 flex justify-between items-center">
        <Link onClick={linkClick} to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="hidden lg:flex gap-16 text-lg items-center text-gray-300">
          {links.map((link, index) => (
            <NavLink onClick={linkClick} key={index} to={link.link} className={({ isActive }) => `navbar-link ${isActive ? "link-active" : ""}`}>
              <span>{link.name}</span>
              <div className="hidden h-1 mt-1 w-1/2 mx-auto rounded-full duration-200 ease-in"></div>
            </NavLink>
          ))}
          <a href="mailto:kamel.dine@hotmail.om" className="button-primary ">
            CONTACT
          </a>
        </div>
        <div className="lg:hidden" onClick={onClickMobileNavbar}>
          <i className="fa-solid fa-bars fa-2xl"></i>
        </div>
      </div>
      {mobileNavbar && (
        <div className="mobile-links">
          {links.map((link, index) => (
            <NavLink onClick={onClickMobileNavbar} key={index} to={link.link}>
              <span>{link.name}</span>
            </NavLink>
          ))}
          <a href="mailto:kamel.dine@hotmail.om" className="button-primary !w-full text-center">
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
}
