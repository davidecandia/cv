import React from "react";
import "../styles/skillAnimation.css";
import bootstrap from "../assets/icon/bootstrap.png";
import react from "../assets/icon/react.png";
import redux from "../assets/icon/redux.png";
import figma from "../assets/icon/figma.png";
import tailwind from "../assets/icon/tailwind 1.png";
import typescript from "../assets/icon/typescript.png";
import html from "../assets/icon/html.png";
import css from "../assets/icon/css.png";
import js from "../assets/icon/js.png";
import Davide from "../assets/image/Davide foto.jpg";

const SkillAnimation = () => {
  return (
    <div className="orbit">
      <ul className="orbit-wrap">
        <li className="orbit-center">
          <img src={Davide} className="orbit-center__icon" alt="davide"></img>
        </li>

        <li>
          <ul className="ring-0">
            <li>
              <img src={redux} className="orbit-icon" alt="redux"></img>
            </li>
            <li>
              <img src={react} className="orbit-icon " alt="react"></img>
            </li>
            <li>
              <img
                src={typescript}
                className="orbit-icon"
                alt="typescript"></img>
            </li>
            <li>
              <img src={html} className="orbit-icon" alt="html"></img>
            </li>
            <li>
              <img src={css} className="orbit-icon" alt="css"></img>
            </li>
            <li>
              <img src={js} className="orbit-icon" alt="js"></img>
            </li>
          </ul>
        </li>

        <li>
          <ul className="ring-1">
            <li>
              <img src={figma} className="orbit-icon" alt="figma"></img>
            </li>
            <li>
              <img src={tailwind} className="orbit-icon" alt="tailwind"></img>
            </li>
            <li>
              <img src={bootstrap} className="orbit-icon" alt="bootstrap"></img>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SkillAnimation;
