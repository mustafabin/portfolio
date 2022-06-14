import React, { useRef } from "react";
import WhiteBrandVideo from "../media/white-brand.gif";
import DarkBrandVideo from "../media/dark-brand.gif";
import { useSelector, useDispatch } from "react-redux";
import { HashLink } from "react-router-hash-link";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArticleIcon from "@mui/icons-material/Article";
import FormControlLabel from "@mui/material/FormControlLabel";
import { toggleValue } from "../redux/mode.js";
import { MaterialUISwitch } from "./DefaultNav.jsx";
import "../styles/MoblieNav.scss";
import { useNavigate } from "react-router-dom";

export default function MoblieNav() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.value);
  const nav = useRef(null);
  let handleClick = () => {
    nav.current.classList.toggle("moblie-nav-open");

    let typewriter = document.body.querySelector(".Typewriter__cursor");
    if (typewriter) typewriter.classList.add("Typewriter__kill-animation");
    let sprite = document.body.querySelector(".landing__image__container");
    if (sprite) sprite.classList.toggle("hide-items");
    setTimeout(() => {
      document.body
        .querySelector(".moblie-nav-links-container")
        .classList.toggle("show-moblie-nav-links-container");
      document.body
        .querySelector(".moblie-nav-links")
        .classList.toggle("show-moblie-nav-items");
    }, 450);
  };
  return (
    <div ref={nav} className="moblie-nav-container">
      <div className="moblie-nav-brand-container">
        <img
          onClick={() => navigate("/")}
          src={mode === "Light" ? WhiteBrandVideo : DarkBrandVideo}
          className="nav-brand-video"
          alt="brand video"
        ></img>
      </div>
      <div className="moblie-nav-burger">
        <svg
          className="menuicon"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          onClick={() => {
            handleClick();
          }}
        >
          <title>Toggle Menu</title>
          <g>
            <line
              className="menuicon__bar"
              x1="13"
              y1="16.5"
              x2="37"
              y2="16.5"
            />
            <line
              className="menuicon__bar"
              x1="13"
              y1="24.5"
              x2="37"
              y2="24.5"
            />
            <line
              className="menuicon__bar"
              x1="13"
              y1="24.5"
              x2="37"
              y2="24.5"
            />
            <line
              className="menuicon__bar"
              x1="13"
              y1="32.5"
              x2="37"
              y2="32.5"
            />
            <circle className="menuicon__circle" r="23" cx="25" cy="25" />
          </g>
        </svg>
      </div>
      <div className="splash"></div>
      <div className="moblie-nav-links-container">
        <div className="moblie-nav-links">
          <HashLink onClick={() => handleClick()} smooth to="/#Landing">
            <HomeIcon fontSize="large"></HomeIcon>
            <p>Home</p>
          </HashLink>
          <HashLink onClick={() => handleClick()} smooth to="/#About">
            <AccountCircleIcon fontSize="large"></AccountCircleIcon>
            <p>About</p>
          </HashLink>
          <HashLink onClick={() => handleClick()} smooth to="/#Projects">
            <FolderIcon fontSize="large"></FolderIcon>
            <p>Projects</p>
          </HashLink>
          <HashLink onClick={() => handleClick()} smooth to="/resume/#Resume">
            <ArticleIcon fontSize="large"></ArticleIcon>
            <p>Resume</p>
          </HashLink>
          <div className="moblie-nav-switch">
            <FormControlLabel
              onChange={() => {
                dispatch(toggleValue());
                handleClick();
              }}
              control={
                <MaterialUISwitch
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      dispatch(toggleValue());
                      handleClick();
                    }
                  }}
                  sx={{ m: 1 }}
                  checked={mode === "Light" ? true : false}
                />
              }
            />
            <p>Try {mode === "Dark" ? "🌞" : "🌚"} mode</p>
          </div>
        </div>
      </div>
    </div>
  );
}
