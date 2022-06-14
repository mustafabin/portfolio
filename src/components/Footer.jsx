import React from "react";
import "../styles/Footer.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
export default function Footer() {
  return (
    <div className="Footer" id="Footer">
      Footer
      <div className="Footer_contact_container">
        <LinkedInIcon fontSize="inherit" />
        <GitHubIcon fontSize="inherit" />
        <EmailIcon fontSize="inherit" />
      </div>
    </div>
  );
}
