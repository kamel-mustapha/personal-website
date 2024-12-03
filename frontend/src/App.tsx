import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./common/AppRoutes";
import { LangProvider } from "./contexts/LangContext";
import { InitializeLanguage } from "./components/InitLanguage";

function App() {
  return (
    <LangProvider>
      <InitializeLanguage />
      <Navbar />
      <div className="max-w-primary mx-auto px-4 pt-32 min-h-screen">
        <AppRoutes />
      </div>
      <Footer />
    </LangProvider>
  );
}

export default App;
