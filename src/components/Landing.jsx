import React, { useState, useEffect } from "react";
import "../styles/Landing.scss";
import src from "../media/normal.png";
import Typewriter from "typewriter-effect";
export default function Landing() {
  const [screenWidth, setScreenWidth] = useState(0);
  let handleRezise = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    handleRezise();
    window.addEventListener("resize", handleRezise);

    return () => {
      window.removeEventListener("resize", handleRezise);
    };
  }, []);
  return (
    <div className="landing__main__container">
      <div className="landing__page">
        <div className="landing__typewriter">
          <Typewriter
            options={{
              autoStart: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(screenWidth.toString())
                .pauseFor(2500)
                .typeString("Mustafa")
                .start();
            }}
          />
        </div>
        <div className="landing__image__container">
          <img src={src} alt="Mustafa's sprite" />
        </div>
      </div>
    </div>
  );
}
