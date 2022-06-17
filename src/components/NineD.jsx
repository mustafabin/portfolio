import React, { useEffect } from "react";
import mainSrc from "../media/9d.png";
import htmlIcon from "../media/html.svg";
import cssIcon from "../media/css.svg";
import javascriptIcon from "../media/javascript.svg";
export default function Country() {
  useEffect(() => {
    document.body.style.setProperty(
      "--projecthover-color",
      "rgba(49, 49, 221,0.3)"
    );
  }, []);
  return (
    <div className="SingleProject">
      <div className="SingleProject__top__row">
        <div className="SingleProject__image__container">
          <img className="single" src={mainSrc} alt="JSON Response" />
        </div>
        <div
          className="SingleProject__title_wrapper"
          style={{
            background:
              "linear-gradient(180deg,transparent 60%,rgba(49, 49, 221,0.7) 60%,rgba(49, 49, 221,0.7) 87%,transparent 87%)",
          }}
        >
          <h1>9-D ❌⭕</h1>
        </div>
        <div className="SingleProject__button__links">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://mustafabin.github.io/9D-tic-tac-toe/"
          >
            <button>Deployed Site 🚀</button>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/mustafabin/9D-tic-tac-toe"
          >
            <button>
              Repository <span>🗄</span>
            </button>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://youtu.be/gUi3XSYbwLE"
          >
            <button>Demo Video 🎥</button>
          </a>
        </div>
      </div>
      <div className="SingleProject__bottom_container">
        <h1>Tech Used 🖥</h1>
        <div className="SingleProject__image__array__container">
          <img src={htmlIcon} alt="devIcon" title="HTML5" />
          <img src={cssIcon} alt="devIcon" title="CSS3" />

          <img src={javascriptIcon} alt="devIcon" title="Javascript" />
        </div>
        <p>
          A Board game with nested tic tac toe games. Full rule set{" "}
          <a
            style={{ textDecoration: "none", color: "var(--action-color)" }}
            href="https://mathwithbaddrawings.com/2013/06/16/ultimate-tic-tac-toe/"
          >
            Here
          </a>
          . A fun game that seems friendly at first but stacks in complexity as
          the game prolongs.
        </p>
      </div>
    </div>
  );
}
