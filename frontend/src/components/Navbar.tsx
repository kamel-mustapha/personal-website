import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export function Navbar() {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
  ];
  return (
    <nav className="bg-secondary fixed w-full z-[500] bg-opacity-60 backdrop-blur-md">
      <div className="max-w-primary mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="flex gap-24 text-lg items-center text-gray-300">
          {links.map((link, index) => (
            <Link key={index} to={link.link} className="hover:text-gray-50">
              {link.name}
            </Link>
          ))}
          <Link to="/portfolio" className="button-primary">
            PORTFOLIO
          </Link>
        </div>
      </div>
    </nav>
  );
}
