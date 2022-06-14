import React from "react";
import { useSpring, animated } from "react-spring";
import haterImage from "../media/hater.png";
import "../styles/Projects.scss";

//helper functions for the animation
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.09,
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
          <button>Learn More</button>
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
          <img src={""} alt="Cosmos" />
          <button>Learn More</button>
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
          <img src={""} alt="9-D board game" />
          <button>Learn More</button>
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
          <img src={""} alt="Street API" />
          <button>Learn More</button>
        </animated.div>
      </div>
    </div>
  );
}
