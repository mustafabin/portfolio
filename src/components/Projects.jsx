import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import haterImage from "../media/hater.png";
import cash4Image from "../media/cash4watches.png";
import cosmosImage from "../media/cosmos.png";
import NineDImage from "../media/9d.png";
import countryImage from "../media/country.png";
import "../styles/Projects.scss";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { useNavigate } from "react-router-dom";
export default function Projects() {
  let navigate = useNavigate();
  const [xStiffness, setxStiffness] = useState(15);
  const [buttonText, setButtonText] = useState("Exaggerate Animation 🥵");
  //helper functions for the animation
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 35, // the denominator is repsonible for the 'stiffness'
    (x - window.innerWidth / 2) / xStiffness, //in this case since the button is at the button i dont want the animation to as annoying
    1.07,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const AnimationDefaults = {
    xys: [0, 0, 1],
    config: { mass: 15, tension: 200, friction: 50 },
  };
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
  let handleExaggeration = () => {
    if (xStiffness !== 1) {
      setxStiffness(1);
      setButtonText("Return to Normal 😵‍💫");
    } else {
      setxStiffness(15);

      setButtonText("Exaggerate Animation 🥵");
    }
  };
  return (
    <div className="Project" id="Projects">
      <h1 className="Project__title">My Projects 🎨</h1>
      <button
        style={{ backgroundColor: "rgba(68, 60, 254, 0.1)" }}
        className="virtual-card__button exaggerate-button"
        onClick={handleExaggeration}
      >
        {buttonText}
      </button>
      <div className="Project__virtual__container">
        <animated.div
          className="virtual-card"
          onMouseMove={({ clientX: x, clientY: y }) =>
            setstyleOne.start({ xys: calc(x, y) })
          }
          onMouseLeave={() => setstyleOne.start({ xys: [0, 0, 1] })}
          style={{
            transform: styleOne.xys.to(trans),
            "border-color": "rgba(255, 196, 0, 0.5)",
          }}
        >
          <h1
            className="virtual-card__title"
            style={{
              background:
                "linear-gradient(180deg, transparent 70%,rgba(255, 196, 0, 0.5) 70%,rgba(255, 196, 0, 0.5) 87%,transparent 87%)",
            }}
          >
            Cash4Watches ⌚️💵
          </h1>
          <h3>Contracted app</h3>
          <img src={cash4Image} alt="Hater" />
          <button
            onClick={() => {
              navigate("/project/5");
            }}
            style={{ backgroundColor: "rgba(255, 196, 0, 0.5)" }}
            className="virtual-card__button"
            variant="outlined"
          >
            Learn More
            <ReadMoreIcon
              className="learn-more-icon"
              fontSize="inherit"
            ></ReadMoreIcon>
          </button>
        </animated.div>
        <animated.div
          className="virtual-card"
          onMouseMove={({ clientX: x, clientY: y }) =>
            setstyleOne.start({ xys: calc(x, y) })
          }
          onMouseLeave={() => setstyleOne.start({ xys: [0, 0, 1] })}
          style={{
            transform: styleOne.xys.to(trans),
            "border-color": "rgba(235, 66, 108, 0.5)",
          }}
        >
          <h1
            className="virtual-card__title"
            style={{
              background:
                "linear-gradient(180deg, transparent 70%,rgba(235, 66, 108, 0.5) 70%,rgba(235, 66, 108, 0.5) 87%,transparent 87%)",
            }}
          >
            Hater 🐥👺
          </h1>
          <h3>Social media</h3>
          <img src={haterImage} alt="Hater" />
          <button
            onClick={() => {
              navigate("/project/1");
            }}
            style={{ backgroundColor: "rgba(235, 66, 108, 0.25)" }}
            className="virtual-card__button"
            variant="outlined"
          >
            Learn More
            <ReadMoreIcon
              className="learn-more-icon"
              fontSize="inherit"
            ></ReadMoreIcon>
          </button>
        </animated.div>
        <animated.div
          className="virtual-card"
          onMouseMove={({ clientX: x, clientY: y }) =>
            setstyleTwo.start({ xys: calc(x, y) })
          }
          onMouseLeave={() => setstyleTwo.start({ xys: [0, 0, 1] })}
          style={{
            transform: styleTwo.xys.to(trans),
            "border-color": "rgba(142, 66, 235,0.5",
          }}
        >
          <h1
            className="virtual-card__title"
            style={{
              background:
                "linear-gradient(180deg, transparent 70%,rgba(142, 66, 235,0.5) 70%,rgba(142, 66, 235,0.5) 87%,transparent 87%)",
            }}
          >
            Cosmos 🔭🌍
          </h1>
          <h3>E-Commerce</h3>
          <img src={cosmosImage} alt="Cosmos" />
          <button
            style={{ backgroundColor: "rgba(142, 66, 235,0.25" }}
            onClick={() => {
              navigate("/project/2");
            }}
            className="virtual-card__button"
            variant="outlined"
          >
            Learn More
            <ReadMoreIcon
              className="learn-more-icon"
              fontSize="inherit"
            ></ReadMoreIcon>
          </button>
        </animated.div>
        <animated.div
          className="virtual-card"
          onMouseMove={({ clientX: x, clientY: y }) =>
            setstyleThree.start({ xys: calc(x, y) })
          }
          onMouseLeave={() => setstyleThree.start({ xys: [0, 0, 1] })}
          style={{
            transform: styleThree.xys.to(trans),
            "border-color": "rgba(66, 122, 235, 0.5)",
          }}
        >
          <h1
            className="virtual-card__title"
            style={{
              background:
                "linear-gradient(180deg, transparent 70%,rgba(66, 122, 235, 0.5) 70%,rgba(66, 122, 235, 0.5) 87%,transparent 87%)",
            }}
          >
            9-D ❌⭕
          </h1>
          <h3>Board Game</h3>
          <img src={NineDImage} alt="9-D board game" />
          <button
            style={{ backgroundColor: "rgba(66, 122, 235, 0.25)" }}
            onClick={() => {
              navigate("/project/3");
            }}
            className="virtual-card__button"
            variant="outlined"
          >
            Learn More
            <ReadMoreIcon
              className="learn-more-icon"
              fontSize="inherit"
            ></ReadMoreIcon>
          </button>
        </animated.div>
        <animated.div
          className="virtual-card"
          onMouseMove={({ clientX: x, clientY: y }) =>
            setstyleFour.start({ xys: calc(x, y) })
          }
          onMouseLeave={() => setstyleFour.start({ xys: [0, 0, 1] })}
          style={{
            transform: styleFour.xys.to(trans),
            "border-color": "rgba(117, 235, 66, 0.5)",
          }}
        >
          <h1
            className="virtual-card__title"
            style={{
              background:
                "linear-gradient(180deg, transparent 70%,rgba(117, 235, 66, 0.5) 70%,rgba(117, 235, 66, 0.5) 87%,transparent 87%)",
            }}
          >
            Country API 🌐
          </h1>
          <h3>JSON API</h3>
          <img src={countryImage} alt="Street API" />
          <button
            style={{ backgroundColor: "rgba(117, 235, 66, 0.25)" }}
            onClick={() => {
              navigate("/project/4");
            }}
            className="virtual-card__button"
            variant="outlined"
          >
            Learn More
            <ReadMoreIcon
              className="learn-more-icon"
              fontSize="inherit"
            ></ReadMoreIcon>
          </button>
        </animated.div>
      </div>
    </div>
  );
}
