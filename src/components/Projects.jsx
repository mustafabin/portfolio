import React from "react";
import { useSpring, animated } from "react-spring";
import haterImage from "../media/hater.png";
import cosmosImage from "../media/cosmos.png";
import NineDImage from "../media/9d.png";
import countryImage from "../media/country.png";
import "../styles/Projects.scss";
import Button from "@mui/material/Button";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
//helper functions for the animation
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 30, // the denominator is repsonible for the 'stiffness'
  (x - window.innerWidth / 2) / 15, //in this case since the button is at the button i dont want the animation to as annoying
  1.07,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const AnimationDefaults = {
  xys: [0, 0, 1],
  config: { mass: 15, tension: 200, friction: 50 },
};
export default function Projects() {
  const [styleOne, setstyleOne] = useSpring(() => ({
    xys: AnimationDefaults.xys,
    config: AnimationDefaults.config,
  }));
  const [styleTwo, setstyleTwo] = useSpring(() => ({
    xys: AnimationDefaults.xys,
    config: AnimationDefaults.config,
  }));
  const [styleThree, setstyleThree] = useSpring(() => ({
    xys: AnimationDefaults.xys,
    config: AnimationDefaults.config,
  }));
  const [styleFour, setstyleFour] = useSpring(() => ({
    xys: AnimationDefaults.xys,
    config: AnimationDefaults.config,
  }));
  return (
    <div className="Project" id="Projects">
      <h1 className="Project__title">My Projects 🎨 </h1>
      <div className="Project__virtual__container">
        <animated.div
          className="virtual-card"
          onMouseMove={({ clientX: x, clientY: y }) =>
            setstyleOne.start({ xys: calc(x, y) })
          }
          onMouseLeave={() => setstyleOne.start({ xys: [0, 0, 1] })}
          style={{ transform: styleOne.xys.to(trans) }}
        >
          <h1 className="virtual-card__title">Hater 🐥👺</h1>
          <h3>Social media app</h3>
          <img src={haterImage} alt="Hater" />
          <Button
            onClick={() => {}}
            className="virtual-card__button"
            variant="outlined"
          >
            Learn More
            <ReadMoreIcon
              className="learn-more-icon"
              fontSize="inherit"
            ></ReadMoreIcon>
          </Button>
        </animated.div>
        <animated.div
          className="virtual-card"
          onMouseMove={({ clientX: x, clientY: y }) =>
            setstyleTwo.start({ xys: calc(x, y) })
          }
          onMouseLeave={() => setstyleTwo.start({ xys: [0, 0, 1] })}
          style={{ transform: styleTwo.xys.to(trans) }}
        >
          <h1 className="virtual-card__title">Cosmos 🔭🌍</h1>
          <h3>E-Commerce site</h3>
          <img src={cosmosImage} alt="Cosmos" />
          <Button
            onClick={() => {}}
            className="virtual-card__button"
            variant="outlined"
          >
            Learn More
            <ReadMoreIcon
              className="learn-more-icon"
              fontSize="inherit"
            ></ReadMoreIcon>
          </Button>
        </animated.div>
        <animated.div
          className="virtual-card"
          onMouseMove={({ clientX: x, clientY: y }) =>
            setstyleThree.start({ xys: calc(x, y) })
          }
          onMouseLeave={() => setstyleThree.start({ xys: [0, 0, 1] })}
          style={{ transform: styleThree.xys.to(trans) }}
        >
          <h1 className="virtual-card__title">9-D ❌⭕</h1>
          <h3>Board Game</h3>
          <img src={NineDImage} alt="9-D board game" />
          <Button
            onClick={() => {}}
            className="virtual-card__button"
            variant="outlined"
          >
            Learn More
            <ReadMoreIcon
              className="learn-more-icon"
              fontSize="inherit"
            ></ReadMoreIcon>
          </Button>
        </animated.div>
        <animated.div
          className="virtual-card"
          onMouseMove={({ clientX: x, clientY: y }) =>
            setstyleFour.start({ xys: calc(x, y) })
          }
          onMouseLeave={() => setstyleFour.start({ xys: [0, 0, 1] })}
          style={{ transform: styleFour.xys.to(trans) }}
        >
          <h1 className="virtual-card__title">Country API 🌐</h1>
          <h3>JSON API</h3>
          <img src={countryImage} alt="Street API" />
          <Button
            onClick={() => {}}
            className="virtual-card__button"
            variant="outlined"
          >
            Learn More
            <ReadMoreIcon
              className="learn-more-icon"
              fontSize="inherit"
            ></ReadMoreIcon>
          </Button>
        </animated.div>
      </div>
    </div>
  );
}
