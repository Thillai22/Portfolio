import logo from "./logo.svg";
import "./Css/navbar.css";
import Navbar from "./Components/navbar";
import Home from "./Components/home";
import About from "./Components/about";
import Contact from "./Components/contact";
import Skills from "./Components/skills";
import Resume from "./Components/resume";
import Projects from "./Components/projects";
import { useState, useEffect } from "react";
// import {BrowserRouter} from "react-router-dom";

function App() {
  const [componentsOnScreen, setComponentsOnScreen] = useState([]);

  useEffect(() => {
    const checkComponentsOnScreen = () => {
      const newComponentsOnScreen = [];
      const elements = document.querySelectorAll('[id^="component-"]');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        ) {
          newComponentsOnScreen.push(element.id);
        }
      });
      setComponentsOnScreen(newComponentsOnScreen);
    };

    checkComponentsOnScreen();
    window.addEventListener("scroll", checkComponentsOnScreen);
    return () => {
      window.removeEventListener("scroll", checkComponentsOnScreen);
    };
  }, []);

  return (
    <>
      <Navbar
        activeComponent={componentsOnScreen[componentsOnScreen.length - 1]}
      />
      <div id="component-home">
        <Home />
      </div>

      <div id="component-about">
        <About />
      </div>

      <div id="component-skills">
        <Skills />
      </div>
      <div id="component-resume">
        <Resume />
      </div>
      <div id="component-projects">
        <Projects />
      </div>
      <div id="component-contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
