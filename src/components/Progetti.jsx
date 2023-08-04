import React from "react";
import { motion, useAnimation} from "framer-motion"
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';


const Progetti = (props) => {
  const animation = useAnimation();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  useEffect (() => {
    console.log(inView)
     if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 2,
          delay: 0.2,
        },
      });
    } else {
      animation.start({ x: '-100vw' });
    }
  }, [inView]);
  return (
    <section ref={ref}
      className="section-3  flex direction-column align-center justify-center container"
      id="section-3"
    >
        <motion.h1 
             animate={animation}
        className="section-titolo mb-4">Progetti</motion.h1>
        <div ref={ref} className="wrap-progetto ">
      {props.data.map((item) => (
        <div key={item.id}>
          <div className="stile-progetti">
            <motion.div animate={animation} className="progetto flex direction-column align-center justify-center">
              <div className="testo-progetto">
                <h2 className="titolo-progetto">{item.name}</h2>
                <h4 className="sottotitolo-progetto">HTML/CSS/JS</h4>
              </div>
              <motion.img src={item.image} alt="progetto-1" className="img-progetto" animate={animation} />

              <a className="link-progetto" href={item.url}>
                link
              </a>
            </motion.div>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Progetti;
