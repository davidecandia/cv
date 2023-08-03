import React from "react";
import { motion } from "framer-motion"
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
      <motion.h1 
       initial={{x:100}}
       animate= {{x:0}}
      transition={{
        ease: "linear",
        duration: 2,
        x: { duration: 1 }
      }}
      className="section-titolo mt-4 mb-4">Competenze</motion.h1>
      <div className="flex icone">
        <motion.div 
        whileHover={{ scale: 1.2, rotate: 0 }}
        className="icone_testo">
          <FontAwesomeIcon
            className="p-2"
            icon={faHtml5}
            style={{ color: "#d95204", fontSize: "8rem" }}
          />
          <p>HTML</p>
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.2, rotate: 0 }}
        className="icone_testo">
          <FontAwesomeIcon
            className="p-2"
            icon={faCss3Alt}
            style={{ color: "#d95204", fontSize: "8rem" }}
          />
          <p>CSS</p>
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.2, rotate: 0 }}
        className="icone_testo">
          <FontAwesomeIcon
            className="p-2"
            icon={faReact}
            style={{ color: "#d95204", fontSize: "8rem" }}
          />
          <p>REACT</p>
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.2, rotate: 0 }}
        className="icone_testo">
          <FontAwesomeIcon
            className="p-2"
            icon={faBootstrap}
            style={{ color: "#d95204", fontSize: "8rem" }}
          />
          <p>BOOTSTRAP</p>
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.2, rotate: 0 }}
        className="icone_testo">
          <FontAwesomeIcon 
          className="p-2"
          icon={faFigma} 
          style={{ color: "#d95204", fontSize: "8rem" }}
           />
          <p>FIGMA</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Competenze;
