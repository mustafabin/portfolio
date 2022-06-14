import React from "react";
import { useParams } from "react-router-dom";
import "../styles/SingleProject.scss";
export default function SingleProject() {
  let { num } = useParams();
  return (
    <div className="Single-Project ">
      <h1>YERRR</h1>
      <h1>{num}</h1>
    </div>
  );
}
