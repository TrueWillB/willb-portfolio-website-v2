import React from "react";
import Granim from "react-granim";
import windmill from "../images/WindmillClouds.jpg";

export default function About() {
  return (
    <div>
      <Granim
        id="granim"
        className="granim-animation"
        direction="diagonal"
        isPausedWhenNotInView
        // image={{
        //   source: `${windmill}`,
        //   position: ["center", "center"],
        //   blendingMode: "multiply",
        //   // stretchMode: ["stretch", "stretch"],
        // }}
        states={{
          "default-state": {
            gradients: [
              ["#ffffff", "#008FC3"],
              ["#008FC3", "#ffffff"],
              ["#ffffff", "#008FC3"],
              ["#008FC3", "#ffffff"],
            ],
            transitionSpeed: 10000,
          },
        }}
      />
      <h1>About Me</h1>
    </div>
  );
}
