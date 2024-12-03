import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import Fr from "../assets/fr.svg";
import En from "../assets/en.svg";
import Down from "../assets/arrow-down.svg";
import { LangContext, Language } from "../contexts/LangContext";
interface Lang {
  name: string;
  icon: string;
}

const EnLang: Lang = { name: "En", icon: En };
const FrLang: Lang = { name: "Fr", icon: Fr };

export function Navbar() {
  const [mobileNavbar, setMobileNavbar] = useState(false);

  const [langPopup, setLangPopup] = useState(false);

  const [selectedLang, setSelectedLang] = useState<Lang>(EnLang);

  const [notSelectedLang, setNotSelectedLang] = useState<Lang>(FrLang);

  const language = useContext(LangContext);

  useEffect(() => {
    if (language?.state === "fr") {
      setSelectedLang(FrLang);
      setNotSelectedLang(EnLang);
    } else {
      setSelectedLang(EnLang);
      setNotSelectedLang(FrLang);
    }
  }, [language]);

  const onSetSelectedLang = (lang: Lang) => {
    setSelectedLang(lang);
    if (lang.name === "Fr") {
      window.localStorage.setItem("lang", "fr");
      language?.setState(Language.fr);
      setNotSelectedLang({ name: "En", icon: En });
    } else {
      window.localStorage.setItem("lang", "en");
      language?.setState(Language.en);
      setNotSelectedLang({ name: "Fr", icon: Fr });
    }
    setLangPopup(false);
  };

  const onSetLangPopup = () => {
    setLangPopup(!langPopup);
  };

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
      name: {
        en: "Home",
        fr: "Accueil",
      },
      link: "/",
    },
    {
      name: {
        en: "About",
        fr: "A propos",
      },
      link: "/about",
    },
    {
      name: {
        en: "Portfolio",
        fr: "Portfolio",
      },
      link: "/portfolio",
    },
  ];

  const TRANSLATIONS = {
    CONTACT: {
      en: "CONTACT",
      fr: "CONTACT",
    },
  };

  return (
    <nav className="bg-secondary fixed w-full z-[500] bg-opacity-60 backdrop-blur-md">
      <div className="max-w-primary mx-auto px-4 py-6 flex justify-between items-center">
        <Link onClick={linkClick} to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="hidden lg:flex gap-16 text-lg items-center text-gray-300">
          <a href="mailto:kamel.dine@hotmail.om" className="button-primary ">
            {TRANSLATIONS.CONTACT[language!.state]}
          </a>
          {links.map((link, index) => (
            <NavLink onClick={linkClick} key={index} to={link.link} className={({ isActive }) => `navbar-link ${isActive ? "link-active" : ""}`}>
              <span>{link.name[language!.state]}</span>
              <div className="hidden h-1 mt-1 w-1/2 mx-auto rounded-full duration-200 ease-in"></div>
            </NavLink>
          ))}
          <div>
            <button
              onClick={onSetLangPopup}
              className="flex justify-between z-10 items-center w-28 py-2.5 px-4 text-sm font-medium text-center text-gray-200 hover:bg-purple-950 rounded-xl focus:ring-2 focus:outline-none focus:ring-text "
              type="button"
            >
              <img className="h-3 me-2" src={selectedLang.icon} alt="" />
              {selectedLang.name}
              <img src={Down} className="w-2.5 h-2.5 ms-2.5" alt="" />
            </button>
            {langPopup && (
              <div className="absolute z-10 mt-1 bg-secondary rounded-lg shadow w-28">
                <button
                  onClick={() => onSetSelectedLang({ name: notSelectedLang.name, icon: notSelectedLang.icon })}
                  type="button"
                  className="inline-flex rounded-xl text-sm w-full px-4 py-2 text-gray-100 hover:bg-purple-950"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <img src={notSelectedLang.icon} className="h-4 w-4 rounded-full me-2" alt="" />
                    {notSelectedLang.name}
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-6 lg:hidden">
          <div>
            <button
              onClick={onSetLangPopup}
              className="flex justify-between z-10 items-center w-28 py-2.5 px-4  font-medium text-center text-gray-200 hover:bg-purple-950 rounded-xl focus:ring-2 focus:outline-none focus:ring-text "
              type="button"
            >
              <img className="h-3 me-2" src={selectedLang.icon} alt="" />
              {selectedLang.name}
              <img src={Down} className="w-2.5 h-2.5 ms-2.5" alt="" />
            </button>
            {langPopup && (
              <div className="absolute z-10 mt-1 bg-secondary rounded-lg shadow w-28">
                <button
                  onClick={() => onSetSelectedLang({ name: notSelectedLang.name, icon: notSelectedLang.icon })}
                  type="button"
                  className="inline-flex rounded-xl w-full px-4 py-2 text-gray-100 hover:bg-purple-950"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <img src={notSelectedLang.icon} className="h-4 w-4 rounded-full me-2" alt="" />
                    {notSelectedLang.name}
                  </div>
                </button>
              </div>
            )}
          </div>
          <i onClick={onClickMobileNavbar} className="fa-solid fa-bars fa-2xl"></i>
        </div>
      </div>
      {mobileNavbar && (
        <div className="mobile-links">
          {links.map((link, index) => (
            <NavLink onClick={onClickMobileNavbar} key={index} to={link.link}>
              <span>{link.name[language!.state]}</span>
            </NavLink>
          ))}

          <a href="mailto:kamel.dine@hotmail.om" className="button-primary !w-full text-center">
            {TRANSLATIONS.CONTACT[language!.state]}
          </a>
        </div>
      )}
    </nav>
  );
}
