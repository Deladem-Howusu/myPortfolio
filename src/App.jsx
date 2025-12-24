import { useState, useEffect } from "react";
import "./App.css";
import { About } from "./Component/About";
import Hero from "./Component/Hero";
import Navigation from "./Component/Navigation";
import { Moon, Sun } from "lucide-react";
import Service from "./Component/Service";
import { Projects } from "./Component/Project";
import EducationSection, { Experience } from "./Component/Education";
import { CallToAction } from "./Component/cta";
import { Contact } from "./Component/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode}>
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex justify-center items-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
        >
          {darkMode ? (
            <Moon className="w-5 h-5 text-purple-600 transition-all" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-400 transition-all" />
          )}
        </button>
      </Navigation>

      <Hero darkmode={darkMode} />
      <About darkmode={darkMode} />
      <Service darkmode={darkMode} />
      <Projects darkmode={darkMode} />
      <Experience darkmode={darkMode} />
      <CallToAction darkmode={darkMode} />
      <Contact darkmode={darkMode} />
    </>
  );
}

export default App;
