import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./common/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-primary mx-auto px-4 pt-32 min-h-screen">
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
