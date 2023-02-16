import React from "react";
import Marquee from "react-fast-marquee";
import "../Css/skills.css";
import html from "../Image/html.svg";
import css from "../Image/css.svg";
import javascript from "../Image/javascript.svg";
import php from "../Image/php.svg";
import mysql from "../Image/mysql.svg";
import react from "../Image/react.svg";
import c from "../Image/c.svg";
import cplusplus from "../Image/cplusplus.svg";
import python from "../Image/python.svg";
import java from "../Image/java.svg";
import canva from "../Image/canva.svg";
import selenium from "../Image/selenium.svg";
import git from "../Image/git.svg";
import github from "../Image/github.png";
import blender from "../Image/blender.svg";
import firebase from "../Image/firebase.svg";

export default function skills() {
  const skillsData = [
    "HTML",
    "CSS",
    "Javascript",
    "PHP",
    "MySQL",
    "React",
    "C",
    "C++",
    "Python",
    "Canva",
    "Selenium",
    "Git",
    "Github",
    "Blender",
    "Firebase",
    "Java",
  ];
  const skillsImage = (skill) => {
    switch (skill.toLowerCase()) {
      case "html":
        return html;
      case "css":
        return css;
      case "javascript":
        return javascript;
      case "php":
        return php;
      case "java":
        return java;
      case "mysql":
        return mysql;
      case "react":
        return react;
      case "c":
        return c;
      case "c++":
        return cplusplus;
      case "python":
        return python;
      case "canva":
        return canva;
      case "selenium":
        return selenium;
      case "git":
        return git;
      case "github":
        return github;
      case "blender":
        return blender;
      case "firebase":
        return firebase;
    }
  };
  const skillBoxStyle = {
    background: `rgba(0,0,0,0.8)`,
    boxShadow: `0px 0px 30px black`,
  };

  return (
    <>
      <div className="skills" id="about">
        {" "}
        <div className="section-title">
          <h2 className="title">Skills</h2>
        </div>
        {/* <div className="skillsContainer"> */}
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={false}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="right"
            // style={{width:"100"}}
          >
            {skillsData.map((skill) => (
              <div className="skill--box" style={skillBoxStyle}>
                <img src={skillsImage(skill)} alt={skill} />
                <h3 style={{ color: "White" }}>{skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
