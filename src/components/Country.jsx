import React from "react";
import mainSrc from "../media/country.png";

import mongoDBIcon from "../media/mongoDB.svg";
import expressIcon from "../media/express.svg";
import nodeIcon from "../media/node.svg";
import herokuIcon from "../media/heroku.svg";
export default function Country() {
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
              "linear-gradient(180deg,transparent 60%,rgba(62, 159, 62, 0.663) 60%,rgba(62, 159, 62, 0.663) 87%,transparent 87%)",
          }}
        >
          <h1>Country API 🌐</h1>
        </div>
        <div className="SingleProject__button__links">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://countries-mustafa-api.herokuapp.com/"
          >
            <button>Deployed Site 🚀</button>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/mustafabin/Country-API"
          >
            <button>
              Repository <span>🗄</span>
            </button>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.youtube.com/channel/UCxlFAjpYAZiwcxFte-Y7NUw"
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

          <img src={nodeIcon} alt="devIcon" title="Node.js" />

          <img src={herokuIcon} alt="devIcon" title="Heroku" />
        </div>
        <p>
          RESTful API that gives information on 250+ countries and combined with
          Bings image search to generate the first four street images of said
          countries afkjna ksdfbkajfnfa alfjnakjns fkjadsnf aksfjnjk fnajkfay
          tweets are too twitter afkjnaksdfbkajfnfa alfjnakjnsfkjadsnf
          aksfjnjkfnajkf ay tweets are too twitter afkjnaksdfbkajfnfa
          alfjnakjnsfkjadsnf aksfjnjkfnajkf
        </p>
      </div>
    </div>
  );
}
