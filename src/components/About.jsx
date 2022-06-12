import React, { useRef, useEffect } from "react";
import "../styles/About.scss";
import ProfilePic from "../media/profile.jpg";
import { TrackRef } from "../util/viewTracker.js";
import { useDispatch } from "react-redux";
import { toggleValue } from "../redux/mode.js";

export default function About() {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const inViewport = TrackRef(ref, "-100px"); //the 0px is the offset to when the effect should take place
  useEffect(() => {
    if (inViewport) {
      dispatch(toggleValue());
    }
  }, [inViewport]);
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
