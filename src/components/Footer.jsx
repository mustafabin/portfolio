import React from "react";
import "../styles/Footer.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
export default function Footer() {
  return (
    <div className="Footer" id="Footer">
      <p>2022 | Created and self hosted by yours truly 😌</p>
      <div className="Footer__contact_container">
        <a
          href="https://www.linkedin.com/in/mustafabinalhag/"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedInIcon className="contact_item" fontSize="inherit" />
        </a>
        <a
          href="https://github.com/mustafabin"
          rel="noreferrer"
          target="_blank"
        >
          <GitHubIcon className="contact_item" fontSize="inherit" />
        </a>
        <a href="mailto:mustafa@binalhag.dev">
          <EmailIcon className="contact_item" fontSize="inherit" />
        </a>
      </div>
    </div>
  );
}
