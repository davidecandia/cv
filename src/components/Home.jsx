import React from 'react'
import { motion } from "framer-motion"
import Davide from "../assets/image/WhatsApp Davide fototessera.jpg"
const Home = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return (

 

    <header className="header" id="section-1">
        <motion.section 
            variants={container}
            initial="hidden"
            animate="visible"
        className="section-1 container align-center">
            <motion.h1
            variants={item}
            className="titolo">
                Front-end Developer
            </motion.h1>
            <motion.img 
              initial={{scale: -1}}
              animate={{rotate:360, scale:1}}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 100
              }}
            src={Davide} alt="Davide Candia" className="img-persona mt-3" />
            <motion.h3 
            variants={item}
            className="nome-persona mt-3">Davide Candia</motion.h3>
            <motion.a 
            variants={item}
            href="#section-3" className="btn mt-3">Progetti</motion.a>
        </motion.section>
    </header>
  )
}

export default Home
