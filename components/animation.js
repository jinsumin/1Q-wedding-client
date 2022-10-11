import React from "react";
import Lottie from "react-lottie-player";

import lottieJson from "/public/arrow-down.json";

export default function Animation({ width, height }) {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: width, height: height }}
    />
  );
}
