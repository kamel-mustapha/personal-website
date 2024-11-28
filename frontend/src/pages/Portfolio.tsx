import { Projects } from "../components/portfolio/Projects";

export function Portfolio() {
  return (
    <>
      <h1 className="mt-16 text-4xl">Portfoio</h1>
      <p className="mt-4 max-w-[900px] bg-transparent leading-relaxed">
        Throughout my career, I've had the opportunity to work on a wide variety of projects across different domains, including e-commerce, e-learning, marketing, and desktop software. I've worn
        multiple hats, such as backend and frontend developer, and have also served as a tech lead on several occasions, where I led teams of developers.
      </p>
      <Projects />
    </>
  );
}
