import React, { useState, useEffect, useRef } from "react";
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
export default function MoblieNav() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.value);
  const nav = useRef(null);
  const navItems = useRef(null);
  let handleSwitch = () => {
    dispatch(toggleValue());
    nav.current.classList.toggle("moblie-nav-open");
    setTimeout(() => {
      navItems.current.classList.toggle("show-moblie-nav-items");
    }, 450);
  };
  return (
    <div ref={nav} className="moblie-nav-container">
      <div className="moblie-nav-brand-container">
        <img
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
            nav.current.classList.toggle("moblie-nav-open");
            setTimeout(() => {
              document.body
                .querySelector(".Typewriter__cursor")
                .classList.toggle("Typewriter__kill-animation");
              navItems.current.classList.toggle("show-moblie-nav-items");
            }, 450);
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
        <div ref={navItems} className="moblie-nav-links">
          <HashLink to="/">
            <HomeIcon fontSize="large"></HomeIcon>
            <p>Home</p>
          </HashLink>
          <HashLink to="/">
            <AccountCircleIcon fontSize="large"></AccountCircleIcon>
            <p>About</p>
          </HashLink>
          <HashLink to="/">
            <FolderIcon fontSize="large"></FolderIcon>
            <p>Projects</p>
          </HashLink>
          <HashLink to="/resume">
            <ArticleIcon fontSize="large"></ArticleIcon>
            <p>Resume</p>
          </HashLink>
          <div className="moblie-nav-switch">
            <FormControlLabel
              onChange={handleSwitch}
              control={
                <MaterialUISwitch
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSwitch();
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
// opacity: 0;
// display: none;
// ..moblie-nav-links {
