import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter from "typewriter-effect";
import '../Css/navbar.css';
import {faFacebook, faGithub, faGooglePlus, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Element } from 'react-scroll';
export default function landingpage() {
    return (
      
        <Element
          name="/"
          className="home d-flex flex-column justify-content-center"
        >
          <div className="container">
            <h1>Thillai Nathan</h1>
            <div>
              Iam a
              <Typewriter
                options={{
                  strings: ["Student . . . ", "Programmer . . . "],
                  autoStart: true,
                  loop: true,
                  wrapperclassNameName: "setColor",
                }}
              />
            </div>
            <div className="social-links">
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>

              <a href="#" >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://github.com/Thillai22" >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/thillai-nathan/"
                className="linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </Element>
    );
}