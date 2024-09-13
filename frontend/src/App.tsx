import { Hero } from "./components/Hero";
import { Index } from "./components/Index";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className=" pt-32">
        <Hero />
        <div className="max-w-primary mx-auto">
          <Index />
        </div>
      </div>
    </>
  );
}

export default App;
