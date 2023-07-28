import React from "react";
import Projects from "../Projects";
import myProjects from "../../data/myProjects";

export default function Portfolio() {
  return (
    <div className="main-content-holder" id="portfolio-holder">
      <h1 id="portfolio-header">Portfolio</h1>
      {/* <div className="section-title-holder">
      </div> */}
      <Projects myProjects={myProjects} />
    </div>
  );
}
