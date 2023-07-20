import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="section-5 flex justify-center direction-column align-center"
      id="section-5"
    >
      <div className="social-media">
        <a
          href="https://www.instagram.com/_davide_1998/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-link"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="fa-shake"
            style={{ color: "#d95204", fontSize: "4rem"}}
          />
        </a>
        <a
          href="https://www.facebook.com/davide.candia"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-link"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="fa-shake"
            style={{ color: "#d95204", fontSize: "4rem" }}
          />
        </a>
      </div>
      <p className="copyright">
        Copyright &copy; CodeAndCreate. All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
