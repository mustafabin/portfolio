import React, { useState, useEffect } from "react";

import MoblieNav from "./MoblieNav.jsx";
import DefaultNav from "./DefaultNav.jsx";
import "../styles/Nav.css";

export default function Nav() {
  const [content, setContent] = useState(null);
  const [navClass, setNavClass] = useState("");
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      setNavClass("nav--hidden");
    } else {
      setNavClass("");
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
