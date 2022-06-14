import React from "react";
import "../styles/Footer.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
export default function Footer() {
  return (
    <div className="Footer" id="Footer">
      Footer
      <div className="Footer__contact_container">
        <a href="https://www.linkedin.com/in/mustafabinalhag/" target="_blank">
          <LinkedInIcon fontSize="inherit" />
        </a>
        <GitHubIcon fontSize="inherit" />
        <EmailIcon fontSize="inherit" />
      </div>
    </div>
  );
}
