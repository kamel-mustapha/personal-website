import Avatar from "../assets/avatar.svg";
import Arrow from "../assets/arrow.svg";

export function Hero() {
  return (
    <div className="max-w-[1200px] mx-auto flex gap-4 lg:mt-8">
      <div className="hidden lg:block hero-avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="pt-24 lg:pt-44 px-4 lg:px:0 lg:-translate-x-16 relative flex flex-col gap-8 lg:gap-4 max-w-[500px]">
        <p className="absolute top-10 left-4 lg:top-16 lg:-left-4">
          <img src={Arrow} className="hidden lg:block absolute -left-28 -top-4" alt="" />
          Hello! I am <span className="text-text">Kamel Dine</span>
        </p>
        <h1>A developer who:</h1>
        <h2 className="text-4xl">
          Judges an application by its <span className="text-text">user interface</span>...
        </h2>
        <h3 className="text-xs">Because if the interface doesn’t impress you, how can the underlying code or functionality?</h3>
      </div>
    </div>
  );
}
