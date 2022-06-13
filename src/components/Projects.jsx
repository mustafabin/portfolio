import React from "react";
import { useSpring, animated } from "react-spring";

import "../styles/Projects.scss";

//helper functions for the animation
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.06,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const animationDefaults = {
  xys: [0, 0, 1],
  config: { mass: 5, tension: 500, friction: 10 },
};
export default function Projects() {
  const [styleOne, setstyleOne] = useSpring(() => ({
    xys: animationDefaults.xys,
    config: animationDefaults.config,
  }));
  const [styleTwo, setstyleTwo] = useSpring(() => ({
    xys: animationDefaults.xys,
    config: animationDefaults.config,
  }));
  const [styleThree, setstyleThree] = useSpring(() => ({
    xys: animationDefaults.xys,
    config: animationDefaults.config,
  }));
  const [styleFour, setstyleFour] = useSpring(() => ({
    xys: animationDefaults.xys,
    config: animationDefaults.config,
  }));
  return (
    <div className="Project" id="Projects">
      <div className="Project__virtual__container">
        <animated.div
          className="virtual-card"
          onMouseMove={({ clientX: x, clientY: y }) =>
            setstyleOne.start({ xys: calc(x, y) })
          }
          onMouseLeave={() => setstyleOne.start({ xys: [0, 0, 1] })}
          style={{ transform: styleOne.xys.to(trans) }}
        >
          YERR
        </animated.div>
        <animated.div
          className="virtual-card"
          onMouseMove={({ clientX: x, clientY: y }) =>
            setstyleTwo.start({ xys: calc(x, y) })
          }
          onMouseLeave={() => setstyleTwo.start({ xys: [0, 0, 1] })}
          style={{ transform: styleTwo.xys.to(trans) }}
        >
          YERR
        </animated.div>
        <animated.div
          className="virtual-card"
          onMouseMove={({ clientX: x, clientY: y }) =>
            setstyleThree.start({ xys: calc(x, y) })
          }
          onMouseLeave={() => setstyleThree.start({ xys: [0, 0, 1] })}
          style={{ transform: styleThree.xys.to(trans) }}
        >
          YERR
        </animated.div>
        <animated.div
          className="virtual-card"
          onMouseMove={({ clientX: x, clientY: y }) =>
            setstyleFour.start({ xys: calc(x, y) })
          }
          onMouseLeave={() => setstyleFour.start({ xys: [0, 0, 1] })}
          style={{ transform: styleFour.xys.to(trans) }}
        >
          YERR
        </animated.div>
      </div>
    </div>
  );
}
