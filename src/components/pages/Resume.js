import React from "react";
import ResumePic from "../images/Resume.png";
const WillBResumePDF = require("../assets/WillBGeneralResume.pdf");
//WillBGeneralResume.pdf

export default function Resume() {
  return (
    <div className="main-content-holder">
      <h1>Resume</h1>
      <p>Please click to download</p>
      <a id="resume-link" href={WillBResumePDF} download>
        <img src={ResumePic} id="resume-image" alt="Resume" />
      </a>
    </div>
  );
}
