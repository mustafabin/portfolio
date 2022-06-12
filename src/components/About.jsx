import React, { useRef, useEffect } from "react";
import "../styles/About.scss";
import ProfilePic from "../media/profile.jpg";
import { TrackRef } from "../util/viewTracker.js";
import { useTransition, animated } from "react-spring";

export default function About() {
  const ref = useRef(null);
  const inViewport = TrackRef(ref, "0px"); //the 0px is the offset to when the effect should take place
  const transitions = useTransition(inViewport, {
    from: { x: 0, y: -200, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ y: 0, opacity: 1 });
      await next({ y: -75 });
      await next({ y: -10 });
      await next({ y: 0 });
    },
    delay: 1000,
  });
  return (
    <>
      <div className="About" id="About">
        <h1>About</h1>
        <div ref={ref} className="About__image__container">
          <img src={ProfilePic} alt="" />
        </div>
        <div className="About__content__container">
          {transitions((style, item) =>
            item ? (
              <animated.div className="About__animated__div" style={style}>
                <p className="About__text__content">
                  I am a Full Stack Developer based in Queens NYC, experienced
                  in using SQL databases via PostgreSQL and non-relational
                  datastructures such as MongoDB to build robust RESTful APIs or
                  with a front end framework like React.js.
                </p>
                <h2>Fun Facts: </h2>
                <ul>
                  <li>
                    <p className="list-text ">
                      Always down to hit a chest day<span>🏋🏽</span>
                    </p>
                  </li>
                  <li>
                    <p className="list-text ">
                      I play Elden Ring, Valorant & Apex
                      <span>🎮</span>
                    </p>
                  </li>
                </ul>
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      ;
      <div className="fullscreen" id="Skills">
        Skills
      </div>
      ;
    </>
  );
}
