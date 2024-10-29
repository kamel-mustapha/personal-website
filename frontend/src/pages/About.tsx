import Me from "../assets/me.png";

export function About() {
  return (
    <div className="flex gap-6">
      <div className="w-full pt-16">
        <h1 className="text-6xl mb-16 text-text">About.</h1>
        <p className="max-w-3xl mb-12">
          Hi, I'm Kamel Dine! I'm a Full Stack Developer with four years of experience delivering innovative, high-quality solutions on international projects.
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
      <img src={Me} alt="" className="w-3/4 h-full rounded-full" />
    </div>
  );
}
