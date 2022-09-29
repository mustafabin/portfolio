import React, { useEffect } from "react";
import laptopSrc from "../media/cash4watches.png";
import phoneSrc from "../media/cash4watchesmoblie.png";
import reactIcon from "../media/react.svg";
import reduxIcon from "../media/redux.svg";
import railsIcon from "../media/rails-plain.svg";
import postgresIcon from "../media/postgres.svg";
import herokuIcon from "../media/heroku.svg";
import rubyIcon from "../media/ruby-plain.svg";
import netlifyIcon from "../media/netlify.svg";
import amazonIcon from "../media/amazons3.svg";
export default function Cash4Watches() {
  useEffect(() => {
    document.body.style.setProperty(
      "--projecthover-color",
      "rgba(255, 196, 0, 0.5)"
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
              "linear-gradient(180deg,transparent 60%,rgba(255, 196, 0, 0.5) 60%,rgba(255, 196, 0, 0.5) 87%,transparent 87%)",
          }}
        >
          <h1>Cash4Watches ⌚️💵</h1>
        </div>
        <div className="SingleProject__button__links">
          <a rel="noreferrer" target="_blank" href="https://cash4watches.com/">
            <button>Deployed Site 🚀</button>
          </a>

          <button>
            PRIVATE <span>🗄</span>
          </button>
        </div>
      </div>
      <div className="SingleProject__bottom_container">
        <h1>Tech Used 🖥</h1>
        <div className="SingleProject__image__array__container">
          <img src={amazonIcon} alt="devIcon" title="Amazon S3" />
          <img src={railsIcon} alt="devIcon" title="Rails" />
          <img src={rubyIcon} alt="devIcon" title="Ruby" />
          <img src={postgresIcon} alt="devIcon" title="PostgreSQL" />
          <img src={reactIcon} alt="devIcon" title="React.js" />
          <img src={reduxIcon} alt="devIcon" title="Redux" />
          <img src={herokuIcon} alt="devIcon" title="Heroku" />
          <img src={netlifyIcon} alt="devIcon" title="netlify" />
        </div>
        <p>
          <a
            className="SingleProject-link"
            rel="noreferrer"
            target="_blank"
            href="https://cash4watches.com/"
          >
            Cash4watches.com
          </a>
          is a watch purchasing site contracted by Das Incentives Llc developed
          to automate their current business methods.
        </p>
      </div>
    </div>
  );
}
