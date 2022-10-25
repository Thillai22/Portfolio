import logo from "./logo.svg";
import "./Css/navbar.css";
import Navbar from "./Components/navbar";
import Home from "./Components/home";
import About from "./Components/about";
import Contact from "./Components/contact";
import Skills from "./Components/skills";
// import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
