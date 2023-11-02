import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import error from "../assets/error.json";

const Error = () => {
  return <Player autoplay loop src={error} style={{ width: "100%" }}></Player>;
};

export default Error;
