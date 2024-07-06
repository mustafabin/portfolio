import React, { useRef } from "react";
import "../styles/About.scss";
import { TrackRef } from "../util/viewTracker.js";
import { useTransition, animated } from "react-spring";
import nodeIcon from "../media/node.svg";
import mongoDBIcon from "../media/mongoDB.svg";
import typeIcon from "../media/type.svg";
import expressIcon from "../media/express.svg";
import pythonIcon from "../media/python.svg";
import flaskIcon from "../media/flask.svg";
import reactIcon from "../media/react.svg";
import nextIcon from "../media/next.svg";
import reduxIcon from "../media/redux.svg";
import djangoIcon from "../media/django.svg";
import postgresIcon from "../media/postgres.svg";
import jwtIcon from "../media/jwt.svg";
import sassIcon from "../media/sass.svg";
import rubyImage from "../media/ruby-plain.svg";
import railsImage from "../media/rails-plain.svg";

export default function About() {
  const aboutRef = useRef(null);
  const isAboutVisible = TrackRef(aboutRef, "0px"); //the 0px is the offset to when the effect should take place
  const stacksTransition = useTransition(isAboutVisible, {
    from: { x: 0, y: -200, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ y: 0, opacity: 1 });
    },
    config: { mass: 2, tension: 200, friction: 20 },
    delay: 1200,
  });
  return (
    <>
      <div className="About" id="About">
        <div ref={aboutRef} className="About__content__container">
          {stacksTransition((style, item) =>
            item ? (
              <animated.div className="About__animated__div" style={style}>
                <p className="About__skills__header">My Stacks 📚</p>
                <div className="About__image_array">
                  <img src={rubyImage} alt="devIcon" title="Ruby" />
                  <img src={pythonIcon} alt="devIcon" title="Python" />
                  <img src={nodeIcon} alt="devIcon" title="Node.js" />
                  <img src={railsImage} alt="devIcon" title="Rails" />
                  <img src={djangoIcon} alt="devIcon" title="Django" />
                  <img src={reactIcon} alt="devIcon" title="React.js" />
                  <img src={nextIcon} alt="devIcon" title="Next.js" />
                  <img src={reduxIcon} alt="devIcon" title="Redux" />
                  <img src={typeIcon} alt="devIcon" title="Typescript" />
                  <img src={jwtIcon} alt="devIcon" title="Json Web Tokens" />
                  <img src={sassIcon} alt="devIcon" title="Sass" />
                  <img src={flaskIcon} alt="devIcon" title="Flask" />
                  <img src={expressIcon} alt="devIcon" title="Express" />
                  <img src={mongoDBIcon} alt="devIcon" title="MongoDB" />
                  <img src={postgresIcon} alt="devIcon" title="PostgreSQL" />
                </div>
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
}
