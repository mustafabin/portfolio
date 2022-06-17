import React, { useEffect } from "react";
import mainSrc from "../media/country.png";

import mongoDBIcon from "../media/mongoDB.svg";
import expressIcon from "../media/express.svg";
import nodeIcon from "../media/node.svg";
import herokuIcon from "../media/heroku.svg";
export default function Country() {
  useEffect(() => {
    document.body.style.setProperty(
      "--projecthover-color",
      "rgba(62, 159, 62, 0.3)"
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
            href="https://youtu.be/YEavG9HLsp8"
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
          RESTful API with full CRUD support that gives information on 250+
          countries and combined with Bing's image search to generate the first
          four street images of said countries. Pair this up with a cool front
          end and one can make a GeoGuesser Bing Edition {" ;)"}
        </p>
      </div>
    </div>
  );
}
