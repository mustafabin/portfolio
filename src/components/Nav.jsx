import React from "react";
import WhiteBrandVideo from "../media/white-brand-video.mp4";
import DarkBrandVideo from "../media/dark-brand-video.mp4";
import { useSelector, useDispatch } from "react-redux";
import { toggleValue } from "../redux/mode.js";
import "../styles/Nav.css";
export default function Nav() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.value);
  return (
    <div className="navbar">
      <div className="nav-brand-container">
        <video
          src={WhiteBrandVideo}
          muted
          autoPlay
          className="nav-brand-video"
        ></video>
      </div>
      <div className="nav-link-container">
        <h1>{mode}</h1>
        <button onClick={() => dispatch(toggleValue())}> toggle </button>
      </div>
    </div>
  );
}
