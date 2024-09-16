import Gradient from "../assets/gradient.svg";

export function Projects() {
  const projects = [
    {
      name: "Example Project",
    },
    {
      name: "Example Project",
    },
    {
      name: "Example Project",
    },
    {
      name: "Example Project",
    },
  ];
  return (
    <div className="pt-24 pb-72 overflow-hidden">
      {projects.map((project, index) => (
        <div key={index} className={`project-case ${index % 2 > 0 ? "lg:flex-row-reverse" : "lg:flex-row "}`}>
          <div className="w-3/4 relative mt-20">
            <h4 className={`text-text ${index % 2 > 0 ? "text-right" : ""}`}>Featured Project</h4>
            <h3 className={`text-3xl ${index % 2 > 0 ? "text-right" : ""}`}>{project.name}</h3>
            <p className={`absolute mt-12 bg-gray-800 bg-opacity-40 backdrop-blur-md rounded-xl p-8 w-[120%] z-50 ${index % 2 > 0 ? "-translate-x-32" : ""}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum maxime asperiores distinctio debitis incidunt ipsum eum provident error sapiente tempore, ea aspernatur. Magnam
              assumenda tenetur consectetur, nulla omnis laboriosam.
            </p>
            <div className={`flex ${index % 2 > 0 ? "justify-end" : ""}`}>
              <a href="" className="button-primary mt-64">
                LEARN MORE
              </a>
            </div>
          </div>
          <div className="image">
            <img
              src="https://gogstbill.com/wp-content/uploads/2017/12/17-442x420.jpg"
              className={`w-full h-full absolute top-8 object-cover rounded-xl ${index % 2 > 0 ? "-left-8" : "-right-8 "}`}
              alt=""
            />
          </div>
          <img className={`gradient ${index % 2 > 0 ? "-left-16" : "-right-16 "}`} src={Gradient} alt="" />
        </div>
      ))}
    </div>
  );
}
