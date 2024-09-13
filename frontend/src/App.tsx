import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-primary mx-auto pt-32">
        <Hero />
      </div>
    </>
  );
}

export default App;
