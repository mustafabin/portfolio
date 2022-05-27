import React from "react";
import WhiteBrandVideo from "../media/white-brand-video.mp4";
import DarkBrandVideo from "../media/dark-brand-video.mp4";
import { useSelector, useDispatch } from "react-redux";
import "../styles/MoblieNav.css";
export default function MoblieNav() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.value);
  return (
    <div className="moblie-nav-container">
      <div className="nav-brand-container">
        <video
          src={mode === "Light" ? WhiteBrandVideo : DarkBrandVideo}
          muted
          autoPlay
          className="nav-brand-video"
        ></video>
      </div>
      <div className="moblie-nav-burger"></div>
    </div>
  );
}
