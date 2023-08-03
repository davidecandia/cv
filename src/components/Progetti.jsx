import React from "react";
import { motion } from "framer-motion"
const Progetti = (props) => {
  return (
    <section
      className="section-3  flex direction-column align-center justify-center container"
      id="section-3"
    >
        <motion.h1 
               initial={{x:100}}
               animate= {{x:0}}
              transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 1 }
              }}
        className="section-titolo mb-4">Progetti</motion.h1>
        <div className="wrap-progetto ">
      {props.data.map((item) => (
        <div key={item.id}>
          <div className="stile-progetti">
            <div className="progetto flex direction-column align-center justify-center">
              <div className="testo-progetto">
                <h2 className="titolo-progetto">{item.name}</h2>
                <h4 className="sottotitolo-progetto">HTML/CSS/JS</h4>
              </div>
              <img src={item.image} alt="progetto-1" className="img-progetto" />

              <a className="link-progetto" href={item.url}>
                link
              </a>
            </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Progetti;
