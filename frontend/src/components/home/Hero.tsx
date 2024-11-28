import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";

export function Hero() {
  return (
    <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-4 lg:mt-8">
      <div className="hero-avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="pt-24 lg:pt-44 lg:px-4 lg:px:0 lg:-translate-x-16 relative flex flex-col gap-8 lg:gap-4 max-w-[900px]">
        <p className="absolute top-10 lg:top-16 lg:-left-4">
          <img src={Arrow} className="hidden lg:block absolute -left-32 -top-7" alt="" />
          Hello! I am <span className="text-text">Kamel</span>
        </p>
        <h1>A developer who:</h1>
        <h2 className="text-4xl">
          Builds experiences that <span className="text-text">connect, inspire, and empower</span>...
        </h2>
        <h3 className="sm">"Because it’s not just about writing code, it’s about creating something that truly resonates with users."</h3>
      </div>
    </div>
  );
}
