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
    {
      name: "Lab",
      link: "/lab",
    },
  ];
  return (
    <nav className="bg-secondary fixed w-full z-[500] bg-opacity-60 backdrop-blur-md">
      <div className="max-w-primary mx-auto px-4 py-6 flex justify-between items-center">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div className="flex gap-24 text-lg items-center text-gray-300">
          {links.map((link, index) => (
            <a key={index} href={link.link} className="hover:text-gray-50">
              {link.name}
            </a>
          ))}
          <a href="" className="button-primary">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
}
