import Avatar from "../assets/avatar.svg";
import Arrow from "../assets/arrow.svg";

export function Hero() {
  return (
    <>
      <div className="flex gap-4 mt-8">
        <div className="hero-avatar">
          <img src={Avatar} alt="" />
        </div>
        <div className="-translate-x-16 relative pt-44 flex flex-col gap-4 max-w-[500px]">
          <p className="absolute top-20 -left-2">
            <img src={Arrow} className="absolute -left-28 -top-4" alt="" />
            Hello! I am <span className="text-text">Kamel Dine</span>
          </p>
          <h1>A developer who:</h1>
          <h2 className="text-4xl">
            Judges an application by its <span className="text-text">user interface</span>...
          </h2>
          <h3 className="text-xs">Because if the interface doesn’t impress you, how can the underlying code or functionality?</h3>
        </div>
      </div>
    </>
  );
}
