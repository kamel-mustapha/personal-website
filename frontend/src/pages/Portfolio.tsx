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
      <p className="text-center mt-60">
        <div>In addition to these projects, I have also contributed as a consultant on several short-term assignments, providing tailored solutions and delivering immediate impact.</div>
        <a className="!inline-block mt-8 button-primary" href="mailto:kamel.dine@hotmail.com">
          CONTACT ME
        </a>
      </p>
    </>
  );
}
