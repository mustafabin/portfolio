import React, { useEffect } from "react";
import laptopSrc from "../media/cosmos.png";
import phoneSrc from "../media/cosmosMoblie.png";
import reactIcon from "../media/react.svg";
import reduxIcon from "../media/redux.svg";
import jwtIcon from "../media/jwt.svg";
import mongoDBIcon from "../media/mongoDB.svg";
import expressIcon from "../media/express.svg";
import nodeIcon from "../media/node.svg";
import herokuIcon from "../media/heroku.svg";
import netlifyIcon from "../media/netlify.svg";
export default function Cosmos() {
  useEffect(() => {
    document.body.style.setProperty(
      "--projecthover-color",
      "rgba(77, 28, 213,0.3)"
    );
  }, []);
  return (
    <div className="SingleProject">
      <div className="SingleProject__top__row">
        <div className="SingleProject__image__container">
          <img className="laptop" src={laptopSrc} alt="laptop" />
          <img className="moblie" src={phoneSrc} alt="phone" />
        </div>
        <div
          className="SingleProject__title_wrapper"
          style={{
            background:
              "linear-gradient(180deg,transparent 56%,rgba(77, 28, 213,0.5) 60%,rgba(90, 28, 213,0.5) 70%,rgba(77, 28, 213,0.5) 87%,rgba(77, 28, 213,0.5) 88%,transparent 90%)",
          }}
        >
          <h1>Cosmos 🔭🌍</h1>
        </div>
        <div className="SingleProject__button__links">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://cosmos-shop.netlify.app/"
          >
            <button>Deployed Site 🚀</button>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/mustafabin/Cosmos"
          >
            <button>
              Repository <span>🗄</span>
            </button>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://youtu.be/Z8flr4CEliM"
          >
            <button>Demo Video 🎥</button>
          </a>
        </div>
      </div>
      <div className="SingleProject__bottom_container">
        <h1>Tech Used 🖥</h1>
        <div className="SingleProject__image__array__container">
          <img src={mongoDBIcon} alt="devIcon" title="MongoDB" />
          <img src={expressIcon} alt="devIcon" title="Express" />
          <img src={reactIcon} alt="devIcon" title="React.js" />
          <img src={reduxIcon} alt="devIcon" title="Redux" />
          <img src={nodeIcon} alt="devIcon" title="Node.js" />
          <img src={jwtIcon} alt="devIcon" title="Json Web Tokens" />

          <img src={herokuIcon} alt="devIcon" title="Heroku" />
          <img src={netlifyIcon} alt="devIcon" title="netlify" />
        </div>
        <p>
          Cosmos is E-Commerce site where we sell planets utilzing the MERN
          stack and JWT for user authentication. Most planets have unique images
          and interesting descriptions befitting of their names and price tags.
        </p>
      </div>
    </div>
  );
}
