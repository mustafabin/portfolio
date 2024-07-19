import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Landing.scss";
import Typewriter from "typewriter-effect";
import normalSprite from "../media/normal.png";
import normalGlassesSprite from "../media/glassesNormal.png";
import upSprite from "../media/up.png";
import upGlassesSprite from "../media/glassesUp.png";
import { toggleGlasses } from "../redux/sprite.js";
export default function Landing() {
  const dispatch = useDispatch();
  const sprite = useRef(null);
  const spriteValues = useSelector((state) => state.sprite);

  let handleSpriteScroll = () => {
    window.scrollY > 1600
      ? sprite.current.classList.toggle("move-sprite", true)
      : sprite.current.classList.toggle("move-sprite", false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleSpriteScroll);
    return () => {
      window.removeEventListener("scroll", handleSpriteScroll);
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
                  .pauseFor(500)
                  .typeString("Hey ! :)")
                  .pauseFor(150)
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
                  .deleteChars(7)
                  .start();
              }}
            />
          </div>
        </div>
        <div ref={sprite} className="landing__image__container">
          <img
            onClick={() => dispatch(toggleGlasses())}
            src={
              spriteValues.direction === "normal"
                ? spriteValues.glasses
                  ? normalGlassesSprite
                  : normalSprite
                : spriteValues.glasses
                ? upGlassesSprite
                : upSprite
            }
            title={
              spriteValues.glasses
                ? "Click to remove glasses ❌"
                : "Click me to give me glasses 😎"
            }
            alt="Mustafa's sprite"
          />
        </div>
      </div>
    </div>
  );
}
