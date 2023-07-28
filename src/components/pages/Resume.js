import React from "react";
import ResumePic from "../images/Resume.png";
const WillBResumePDF = require("../assets/WillBGeneralResume.pdf");
//WillBGeneralResume.pdf

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a id="resume-link" href={WillBResumePDF} download>
        <img src={ResumePic} alt="Resume" />
      </a>
    </div>
  );
}
