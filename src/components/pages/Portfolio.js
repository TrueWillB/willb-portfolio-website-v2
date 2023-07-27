import React from "react";
import Projects from "../Projects";
import myProjects from "../../data/myProjects";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="section-title-holder">
        <h2 id="work-section">Work</h2>
      </div>
      <Projects myProjects={myProjects} />

      {/* <div>
        <section className="project-card-holder">
          <a
            href="https://github.com/ctowns5/flashDash"
            className="card"
            id="top-card"
          >
            <figure>
              <h3>flashDash</h3>
              <p>
                A quick one-stop-shop to visit in the morning for notes, news,
                and more
              </p>
            </figure>
          </a>
          <a
            href="https://github.com/willis291/Portfolio-website__challenge2"
            className="card"
            id="card-2"
          >
            <figure id="big-project">
              <h3>Portfolio Website</h3>
              <p className="card-description">The repo of my portfolio website.</p>
            </figure>
          </a>
          <a
            href="https://github.com/willis291/prework-study-guide"
            className="card"
            id="card-3"
          >
            <figure>
              <h3>Prework Study Guide</h3>
              <p>
                The repo for the website I made as preparatory work for the
                bootcamp
              </p>
            </figure>
          </a>
          <a
            href="https://github.com/willis291/Website-accessibility-upgrade__challenge1"
            className="card"
            id="card-4"
          >
            <figure>
              <h3>Website Accessibility Upgrade</h3>
              <p>
                A coding challenge in the bootcamp to improve a website's
                accessibility
              </p>
            </figure>
          </a>
          <a href="https://github.com/willis291" className="card" id="card-5">
            <figure>
              <h3>Placeholder Project 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, consequatur.
              </p>
            </figure>
          </a>
        </section>
      </div> */}
    </div>
  );
}
