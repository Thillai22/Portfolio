import React from "react";
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
import {Link} from "react-scroll";

export default function navbar() {
  return (
    <>
      <header id="header" class="d-flex flex-column justify-content-center">
        <nav id="navbar" class="navbar nav-menu">
          <ul>
            <li>
              <Link to="home" className="nav-link scrollto active">
                <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
              </Link>
              {/* <a href="#hero" class="nav-link scrollto active">
                <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
              </a> */}
            </li>
            <li>
              <Link to="about" className="nav-link scrollto">
                <FontAwesomeIcon icon={faUser} /> <span>About</span>
              </Link>
              {/* <a href="#about" class="nav-link scrollto"></a> */}
            </li>
            <li>
              <Link to="resume" className="nav-link scrollto">
                <FontAwesomeIcon icon={faFile} /> <span>Resume</span>
              </Link>
            </li>
            <li>
              <Link to="services" class="nav-link scrollto">
                <FontAwesomeIcon icon={faServer} /> <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link to="contact" class="nav-link scrollto">
                <FontAwesomeIcon icon={faEnvelope} /> <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* <i class="bi bi-list "></i> */}
    </>
  );
}
