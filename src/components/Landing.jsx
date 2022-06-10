import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "../styles/Landing.scss";
import Typewriter from "typewriter-effect";
import normalSprite from "../media/normal.png";
import upSprite from "../media/up.png";
export default function Landing() {
  const sprite = useRef(null);
  const [screenWidth, setScreenWidth] = useState(0);
  const src = useSelector((state) => state.sprite.value);
  let handleRezise = () => {
    setScreenWidth(window.innerWidth);
  };
  let handleSpriteScroll = () => {
    window.scrollY > 900
      ? sprite.current.classList.toggle("move-sprite", true)
      : sprite.current.classList.toggle("move-sprite", false);
  };
  useEffect(() => {
    handleRezise();
    window.addEventListener("resize", handleRezise);

    window.addEventListener("scroll", handleSpriteScroll);
    return () => {
      window.removeEventListener("scroll", handleSpriteScroll);
      window.removeEventListener("resize", handleRezise);
    };
  }, []);
  return (
    <div className="landing__main__container" id="Landing">
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
                    "Im <span style='color: var(--action-color);  font-weight: 400;'> Mustafa Binalhag<span> <br></br>"
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
            <h1>{screenWidth}</h1>
          </div>
        </div>
        <div ref={sprite} className="landing__image__container">
          <img
            src={src === "normal" ? normalSprite : upSprite}
            alt="Mustafa's sprite"
          />
        </div>
      </div>
    </div>
  );
}
