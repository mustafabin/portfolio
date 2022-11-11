import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/SingleProject.scss";
import Hater from "../components/Hater.jsx";
import NineD from "../components/NineD.jsx";
import Cosmos from "../components/Cosmos.jsx";
import Country from "../components/Country.jsx";
import Cash4Watches from "../components/Cash4Watches.jsx";
import SaveFish from "../components/SaveFish.jsx";
export default function SingleProject() {
  let { num } = useParams();
  const [content, setContent] = useState(<h1>Init</h1>);
  useEffect(() => {
    switch (num) {
      case "1":
        setContent(<Hater />);
        break;
      case "2":
        setContent(<Cosmos />);
        break;
      case "3":
        setContent(<NineD />);
        break;
      case "4":
        setContent(<Country />);
        break;
      case "5":
        setContent(<Cash4Watches />);
        break;
      case "6":
        setContent(<SaveFish />);
        break;
      default:
        setContent(
          <div className="fullscreen">
            <h1 style={{ maxWidth: "80%" }}>
              Wrong param you entered{" "}
              <span style={{ color: "red" }}>{num}</span> and I only have{" "}
              <span style={{ color: "var(--action-color)" }}>4</span> projects
              displayed on my site. Checkout my github if you want to see more
              😘
            </h1>
          </div>
        );

        break;
    }
  }, [num]);
  return <div className="Single-Project ">{content}</div>;
}
