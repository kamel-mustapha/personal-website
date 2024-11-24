import Reading from "../assets/reading-svg.svg";

export function About() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 pt-10">
      <img src={Reading} alt="" className="w-full" />
      <div className="w-full md:pt-40">
        <h1 className="text-6xl mb-16 text-text">About.</h1>
        <p className="max-w-3xl mb-12">
          Hi, I'm Kamel Dine! I'm a Full Stack Developer with a couple of years of experience delivering innovative, high-quality solutions on international projects.
          <br /> <br />
          My focus is on creating seamless user experiences and efficient processes, working across both frontend and backend. I love collaborating within dynamic teams, mentoring others, and
          continuously learning new approaches to solve complex problems.
          <br /> <br />
          Outside of tech, I enjoy exploring new ideas and the beautiful landscapes of France. Let’s connect and bring fresh ideas to life together!
        </p>
        <a href="mailto:kamel.dine@hotmail.com" className="button-primary">
          Get in touch
        </a>
      </div>
    </div>
  );
}
