import React,{useState,useEffect,useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faEnvelope,
  faFile,
  faHome,
  faList,
  faServer,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

export default function Navbar(props) {

  const active = props.activeComponent;

  const [activeComponent, setActiveComponent] = useState("");
  
  useEffect(() => {
    setActiveComponent(active
      && active.split("-")[1]
      );
      console.log(activeComponent);
  });



  return (
    <>
      <header id="header" class="d-flex flex-column justify-content-center">
        <nav id="navbar" class="navbar nav-menu">
          <ul>
            <li>

              <Link to="home" 
              onClick={() => setActiveComponent("home")}
              className={`nav-link scrollto ${activeComponent === "home" ? "active" : ""}`}
              activeClass="nav-link scrollto active"
              >
                <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
              </Link>
            </li>
            <li>


              
              <Link to="about" 
              onClick={() => setActiveComponent("about")}
              className={
                `nav-link scrollto ${activeComponent === "about" ? "active" : ""}`
              }
              >
                <FontAwesomeIcon icon={faUser} /> <span>About</span>
              </Link>      
              
              
          

            </li>
            <li>
              <Link to="resume" className={
                `nav-link scrollto ${activeComponent === "resume" ? "active" : ""}`
              }
              onClick={() => setActiveComponent("resume")}
              >
                <FontAwesomeIcon icon={faFile} /> <span>Resume</span>
              </Link>
            </li>
            <li>
              <Link to="projects" className={
                `nav-link scrollto ${activeComponent === "projects" ? "active" : ""}`
              }
              onClick={() => setActiveComponent("projects")}
              >
                <FontAwesomeIcon icon={faServer} /> <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link to="contact" className={
                `nav-link scrollto ${activeComponent === "contact" ? "active" : ""}`
              }
              onClick={() => setActiveComponent("contact")}
              >
                <FontAwesomeIcon icon={faEnvelope} /> <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}