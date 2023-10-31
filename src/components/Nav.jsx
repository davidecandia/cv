import React, { useState } from "react";
//import Logo from "../assets/image/logo_davide.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/Nav.css";
const Nav = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar fissa flex align-center justify-center">
      <div className="contain flex align-center">
        <div className="logo">
          <span>Davide Candia</span>
        </div>
        <div
          className="menu sm:hidden md:hidden text-white text-[1.8rem] z-50"
          onClick={handleClick}>
          {click ? (
            <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
          ) : (
            <FontAwesomeIcon icon={faXmark} style={{ color: "#ffffff" }} />
          )}
        </div>
        <nav className={click ? "nav" : "nav active"}>
          <a
            onClick={handleClick}
            href="/cv/#section-1"
            className="navbar-barra">
            Home
          </a>
          <a
            onClick={handleClick}
            href="/cv/#section-2"
            className="navbar-barra">
            Progetti
          </a>
          <a
            onClick={handleClick}
            href="/cv/#section-4"
            className="navbar-barra">
            Contatti
          </a>
        </nav>
        <div className="navbar-links">
          <a href="/cv/#section-1" className="navbar-barra">
            Home
          </a>
          <a href="/cv/#section-2" className="navbar-barra">
            Progetti
          </a>
          <a href="/cv/#section-4" className="navbar-barra">
            Contatti
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
