import React from "react";
import "../styles/About.scss";
import ProfilePic from "../media/profile.jpg";
export default function About() {
  return (
    <>
      <div className="About" id="About">
        <h1>About</h1>
        <div className="About__image__container">
          <img src={ProfilePic} alt="" />
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
