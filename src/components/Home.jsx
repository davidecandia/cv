import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
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
          <img className="img-persona z-50" src={Davide} alt="Davide" />
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
      <div className="blob max-md:hidden max">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#EDEDED" transform="translate(150 100)">
            <animate
              attributeName="d"
              dur={"10000ms"}
              repeatCount={"indefinite"}
              values="
              M58.5,-45.2C73.9,-27.2,83.4,-3,79.8,20.4C76.2,43.8,59.5,66.4,38.5,74.3C17.6,82.1,-7.7,75.3,-29.6,63.8C-51.6,52.4,-70.1,36.3,-75.1,16.5C-80.1,-3.2,-71.6,-26.7,-56.8,-44.6C-42,-62.4,-21,-74.7,0.3,-74.9C21.5,-75.1,43,-63.2,58.5,-45.2Z; 
              M61.8,-52.3C74.3,-33.5,74.8,-8.2,69.3,15.7C63.7,39.5,52.1,61.8,33.4,71.7C14.7,81.6,-11.1,79.2,-30.5,68.1C-49.9,56.9,-62.9,37.1,-66.9,16.2C-70.9,-4.6,-65.9,-26.6,-53.2,-45.4C-40.6,-64.2,-20.3,-79.9,2.2,-81.6C24.6,-83.3,49.2,-71.1,61.8,-52.3Z;
              M65,-50.6C80.2,-32.8,85.7,-6,79.1,16.1C72.5,38.1,53.8,55.5,31.8,66.1C9.8,76.8,-15.5,80.7,-36.6,72.1C-57.7,63.4,-74.6,42.2,-80.3,18.1C-86,-6,-80.4,-32.9,-65.2,-50.7C-49.9,-68.5,-25,-77.4,0,-77.3C24.9,-77.3,49.8,-68.5,65,-50.6Z;
              M53.7,-44.9C66.9,-26.2,73.2,-4,70,18.5C66.9,41,54.3,63.9,35.1,73.3C15.8,82.8,-10.1,78.8,-32.7,68C-55.3,57.1,-74.6,39.2,-79.5,18C-84.5,-3.2,-75.1,-27.8,-59.5,-47C-43.9,-66.2,-21.9,-80,-0.9,-79.3C20.2,-78.7,40.4,-63.5,53.7,-44.9Z;
              M58.5,-45.2C73.9,-27.2,83.4,-3,79.8,20.4C76.2,43.8,59.5,66.4,38.5,74.3C17.6,82.1,-7.7,75.3,-29.6,63.8C-51.6,52.4,-70.1,36.3,-75.1,16.5C-80.1,-3.2,-71.6,-26.7,-56.8,-44.6C-42,-62.4,-21,-74.7,0.3,-74.9C21.5,-75.1,43,-63.2,58.5,-45.2Z"
            ></animate>
          </path>
        </svg>
      </div>
    </header>
  );
};

export default Home;
