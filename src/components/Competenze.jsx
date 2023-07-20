import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faBootstrap,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

const Competenze = () => {
  return (
    <section className="section-2  container" id="section-2">
      <h1 className="section-titolo mt-4 mb-4">Competenze</h1>
      <div className="flex icone">
        <div className="icone_testo">
          <FontAwesomeIcon
            className="p-2"
            icon={faHtml5}
            beat
            style={{ color: "#d95204", fontSize: "8rem" }}
          />
          <p>HTML</p>
        </div>
        <div className="icone_testo">
          <FontAwesomeIcon
            className="p-2"
            icon={faCss3Alt}
            beat
            style={{ color: "#d95204", fontSize: "8rem" }}
          />
          <p>CSS</p>
        </div>
        <div className="icone_testo">
          <FontAwesomeIcon
            className="p-2"
            icon={faReact}
            beat
            style={{ color: "#d95204", fontSize: "8rem" }}
          />
          <p>REACT</p>
        </div>
        <div className="icone_testo">
          <FontAwesomeIcon
            className="p-2"
            icon={faBootstrap}
            beat
            style={{ color: "#d95204", fontSize: "8rem" }}
          />
          <p>BOOTSTRAP</p>
        </div>
        <div className="icone_testo">
          <FontAwesomeIcon 
          className="p-2"
          icon={faFigma} 
          beat
          style={{ color: "#d95204", fontSize: "8rem" }}
           />
          <p>FIGMA</p>
        </div>
      </div>
    </section>
  );
};

export default Competenze;
