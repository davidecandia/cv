import React from "react";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faBootstrap,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

const Competenze = (props) => {
  const animation = useAnimation();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    // threshold: 0.2,
  });
  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          type: "spring",
          duration: 2,
        },
      });
    } else {
      animation.start({ y: "10%" });
    }
  }, [inView]);
  return (
    <section ref={ref} className="section-2" id="section-2">
      <div className="section-2-wrap contain">
        <div className="section-2-progetti">
          {props.data.map((item) => (
            <motion.div animate={animation} key={item.id}>
              <div className="stile-progetti">
                <div className="progetto flex direction-column align-center justify-center">
                  <div className="testo-progetto">
                    <h2 className="titolo-progetto">{item.name}</h2>
                    <h4 className="sottotitolo-progetto uppercase">{item.descrizione}</h4>
                  </div>
                  <img
                    src={item.image}
                    alt="progetto-1"
                    className="img-progetto object-cover"
                  />

                  <a className="link-progetto uppercase" href={item.url} target="blank">
                    link
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competenze;
