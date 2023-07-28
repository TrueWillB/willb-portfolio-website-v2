import React from "react";
import Granim from "react-granim";
import windmill from "../images/WindmillClouds.jpg";
import restingFace from "../images/restingFace.jpg";

export default function About() {
  return (
    <div className="main-content-holder">
      <h1 id="about-header">About Me</h1>
      <img id="profile-photo" src={restingFace} />
      <p id="about-text">
        My name is Will Brown. I graduated from the University of Colorado with
        an Electrical Engineering degree, and made the choice to pursue a career
        in software development. I have just finished the University of Denver
        Full Stack Web Development Bootcamp, and am looking for a position as a
        full stack developer. I'm excited to get some real world experience and
        become a leader in the field.
      </p>

      {/* <div class="flip-box">
        <div class="flip-box-inner">
          <div class="flip-box-front">
            <img
              src={restingFace}
              alt="Paris"
              style={{ width: "300px", height: "200px" }}
            />
          </div>
          <div class="flip-box-back">
            <h2>Paris</h2>
            <p>What an amazing city</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
