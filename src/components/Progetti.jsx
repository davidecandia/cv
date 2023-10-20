import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Progetti = (props) => {
  const animation = useAnimation();
  const { ref, inView } = useInView({
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <section ref={ref} className="contain py-28" id="section-2">
      <div className="section-2-progetti">
        {props.data.map((item) => (
          <motion.div className="progetto" animate={animation} key={item.id}>
            <img src={item.image} alt={item.name} className="img-progetto" />
            <div className="testo-progetto">
              <h2 className="titolo-progetto">{item.name}</h2>
              <p className="sottotitolo-progetto">{item.mini_descrizione}</p>
              <Link className="link-dettagli-progetti" to={`${item.id}`}>
                Vedi dettaglio del prodotto ➡️
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Progetti;
