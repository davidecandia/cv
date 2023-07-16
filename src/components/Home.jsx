import React from 'react'
import Davide from "../assets/image/WhatsApp Davide fototessera.jpg"
const Home = () => {
  return (
    <header className="header" id="section-1">
        <section className="section-1 container align-center">
            <h1 className="titolo">
                Front-end Developer
            </h1>
            <img src={Davide} alt="Davide Candia" className="img-persona mt-3" />
            <h3 className="nome-persona mt-3">Davide Candia</h3>
            <a href="#section-3" className="btn mt-3">Progetti</a>
        </section>
    </header>
  )
}

export default Home
