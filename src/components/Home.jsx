import React from "react";
import { motion } from "framer-motion";
import Davide from "../assets/image/WhatsApp Davide fototessera.jpg";
const Home = () => {
  return (
    <header className="header relative max-sm:mt-[80px]  " id="section-1">
      <div className="wrap-grid contain section-1 ">
        <div className="testo">
          <h1 className="text-[54px] font-bold leading-[64px] text-center">
            👋🏻, Sono Davide Candia <br /> Front end Developer
          </h1>
          <p className=" text-center text-neutral-400 text-[28px] font-semibold leading-7 ">
            Sviluppo base con REACT.JS <br /> (HTML, CSS, JS, TAILWIND,
            BOOTSTRAP, FIGMA)
          </p>
          <div className="flex justify-center">
            <div class="px-12 py-4 bg-neutral-400 rounded-[70px] justify-items-center content-center justify-center items-center flex">
              <span class="text-white text-lg font-semibold">
                📧 davidecandia@live.it
              </span>
            </div>
          </div>
        </div>

        <div className="img flex justify-end items-center">
          <img className="img-persona" src={Davide} alt="Davide" />
        </div>

        <div className="sotto absolute bottom-1">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="33"
              viewBox="0 0 16 33"
              fill="none"
            >
              <path
                d="M7.29289 32.7071C7.68342 33.0976 8.31658 33.0976 8.70711 32.7071L15.0711 26.3431C15.4616 25.9526 15.4616 25.3195 15.0711 24.9289C14.6805 24.5384 14.0474 24.5384 13.6569 24.9289L8 30.5858L2.34315 24.9289C1.95262 24.5384 1.31946 24.5384 0.928933 24.9289C0.538409 25.3195 0.538409 25.9526 0.928933 26.3431L7.29289 32.7071ZM7 4.37114e-08L7 32L9 32L9 -4.37114e-08L7 4.37114e-08Z"
                fill="#DEDEDE"
              />
            </svg>
            <h4 className=" uppercase text-xl font-bold">Progetti</h4>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
