import React, { useState, useEffect } from "react";
import "../styles/Landing.css";
export default function Landing() {
  const [screenWidth, setScreenWidth] = useState(0);
  let handleRezise = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleRezise);

    return () => {
      window.removeEventListener("resize", handleRezise);
    };
  }, []);
  return (
    <div className="landing-main-container">
      <p>{screenWidth}</p>
    </div>
  );
}
