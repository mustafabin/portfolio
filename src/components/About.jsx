import React, { useRef } from "react";
import "../styles/About.scss";
import ProfilePic from "../media/profile.jpg";
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
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function About() {
  const aboutRef = useRef(null);
  const isAboutVisible = TrackRef(aboutRef, "0px"); //the 0px is the offset to when the effect should take place

  const firstTransistion = useTransition(isAboutVisible, {
    from: { x: 0, y: -200, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ y: 0, opacity: 1 });
    },
    config: { mass: 2, tension: 200, friction: 15 },
  });
  const secondTransistion = useTransition(isAboutVisible, {
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
        <h1>About</h1>
        <div className="About__image__container">
          <img src={ProfilePic} alt="" />
        </div>
        <div ref={aboutRef} className="About__content__container">
          {firstTransistion((style, item) =>
            item ? (
              <animated.div className="About__animated__div" style={style}>
                <p className="About__text__content">
                  I am a Software Engineer based in Queens NYC, experienced in
                  building full stack apps. I love learning and leveraging code
                  to bring about positive experiences.
                </p>
              </animated.div>
            ) : (
              ""
            )
          )}
          {secondTransistion((style, item) =>
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
                <p className="About__contact-title">Contact 📬</p>
                <div className="About__contact_array">
                  <a
                    href="https://www.linkedin.com/in/mustafabinalhag/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <LinkedInIcon className="contact_item" fontSize="inherit" />
                  </a>
                  <a
                    href="https://github.com/mustafabin"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <GitHubIcon className="contact_item" fontSize="inherit" />
                  </a>
                  <a href="mailto:mustafa@binalhag.dev">
                    <EmailIcon className="contact_item" fontSize="inherit" />
                  </a>
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
