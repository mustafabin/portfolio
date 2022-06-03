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
          <div className="typewriter-container">
            <Typewriter
              options={{
                autoStart: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2000)
                  .typeString("Hey ! :)")
                  .pauseFor(350)
                  .deleteAll()
                  .pauseFor(200)
                  .typeString(
                    "My name is <span style='color: var(--action-color);  font-weight: 400;'> Mustafa <span> <br></br>"
                  )
                  .typeString("<strong></strong>A Full Stack engeneer")
                  .changeDeleteSpeed(30)
                  .pauseFor(250)
                  .deleteChars(8)
                  .changeDelay(70)
                  .typeString("enginere")
                  .changeDeleteSpeed(10)
                  .pauseFor(250)
                  .deleteChars(8)
                  .changeDelay("natural")
                  .typeString(
                    "<span style='color: var(--sub-action-color);  font-weight: 400;'>Engineer 👨🏽‍💻</span>"
                  )
                  .changeDeleteSpeed("natural")
                  .pauseFor(2000)
                  .start();
              }}
            />
          </div>
        </div>
        <div className="landing__image__container">
          <img src={src} alt="Mustafa's sprite" />
        </div>
      </div>
    </div>
  );
}
