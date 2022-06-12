import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import MoblieNav from "./MoblieNav.jsx";
import DefaultNav from "./DefaultNav.jsx";
import "../styles/Nav.scss";
import { setValue } from "../redux/sprite.js";
export default function Nav() {
  const dispatch = useDispatch();

  const [content, setContent] = useState(null);
  const [navClass, setNavClass] = useState("");
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    //the number in this expression is for how sensitive the navigation animation is
    if (window.scrollY - lastScrollY > 5) {
      setNavClass("nav--hidden");
      dispatch(setValue("up"));
    } else if (window.scrollY - lastScrollY < -5) {
      setNavClass("");
      dispatch(setValue("normal"));
    }
    // if user is at the top of the page show nav regardless
    if (window.scrollY === 0) {
      setNavClass("");
      dispatch(setValue("normal"));
    }

    lastScrollY = window.scrollY;
  });

  let handleRezise = () => {
    if (window.innerWidth <= 650) {
      setContent(<MoblieNav></MoblieNav>);
    } else {
      setContent(<DefaultNav></DefaultNav>);
    }
  };
  useEffect(() => {
    handleRezise();
    window.addEventListener("resize", handleRezise);
    return () => {
      window.removeEventListener("resize", handleRezise);
    };
  }, []);
  return <div className={`navbar ${navClass}`}>{content}</div>;
}
