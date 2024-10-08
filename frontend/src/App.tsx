import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Index } from "./components/Index";
import { Navbar } from "./components/Navbar";
import { Tools } from "./components/Tools";
import { WorkExperience } from "./components/WorkExperience";

function App() {
  return (
    <>
      <Navbar />
      <div className=" pt-32">
        <Hero />
        <div className="max-w-primary mx-auto px-4">
          <Index />
          <WorkExperience />
          <Tools />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
