import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/SingleProject.scss";
import Hater from "../components/Hater.jsx";
import NineD from "../components/NineD.jsx";
import Cosmos from "../components/Cosmos.jsx";
import Country from "../components/Country.jsx";
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
      default:
        setContent(<h1>Wrong param you entered {num}</h1>);

        break;
    }
  }, [num]);
  return <div className="Single-Project ">{content}</div>;
}
