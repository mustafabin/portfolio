import React from "react";
import { Document, Page } from "react-pdf";
import resumeSrc from "../media/resume.pdf";
import "../styles/Resume.scss";
export default function Resume() {
  function onDocumentLoadSuccess({ numPages }) {
    console.log(numPages);
  }
  return (
    <div className="Resume" id="Resume">
      <Document file={resumeSrc} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
      </Document>
      <a style={{ textDecoration: "none" }} download href={resumeSrc}>
        <button className="virtual-card__button exaggerate-button">
          Download ⬇️
        </button>
      </a>
    </div>
  );
}
