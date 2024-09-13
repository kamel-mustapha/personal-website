import Minelead from "../assets/minelead.png";
export function WorkExperience() {
  const portoflios = [
    {
      company: "Minelead",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      img: Minelead,
      link: "",
    },
  ];
  return (
    <div className="work-experience mt-32">
      <h2 className="text-3xl">Portfolio</h2>
      <div className="mt-10 grid lg:grid-cols-2 gap-10">
        {portoflios.map((portfolio) => (
          <div className="work-experience-case">
            <img src={portfolio.img} alt="" />
            <div className="space-y-3">
              <h3 className="text-2xl">{portfolio.company}</h3>
              <p className="text-sm">{portfolio.description}</p>
              <a className="button-primary" href={portfolio.link}>
                LEARN MORE
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
