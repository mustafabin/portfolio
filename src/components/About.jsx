import React, { useRef } from "react";
import "../styles/About.scss";
import ProfilePic from "../media/profile.jpg";
import { TrackRef } from "../util/viewTracker.js";
export default function About() {
  const ref = useRef(null);
  const inViewport = TrackRef(ref, "0px");

  if (inViewport) {
    console.log("in viewport:", ref.current);
  }

  return (
    <>
      <div className="About" id="About">
        <h1>About</h1>
        <div ref={ref} className="About__image__container">
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
