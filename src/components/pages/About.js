import React from "react";
import Granim from "react-granim";
import windmill from "../images/WindmillClouds.jpg";

export default function About() {
  return (
    <div className="main-content-holder">
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
      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, sed. Illo
        at cupiditate iusto iste harum quia possimus, dicta aspernatur dolorum
        tempore error nostrum adipisci atque porro corrupti! Voluptatum nihil,
        quidem recusandae velit culpa fugiat illum voluptate aspernatur
        similique odit perferendis obcaecati ducimus ratione! Quaerat laborum
        quos amet sint, aperiam autem nemo. Doloribus accusamus hic libero
        tempora, pariatur, sunt praesentium nostrum recusandae quis quam odit
        cum omnis possimus corrupti debitis odio deserunt corporis dolores
        minima expedita asperiores inventore temporibus. Quibusdam quas eos
        saepe eum esse consectetur ducimus suscipit, dicta est nostrum in odit
        maxime. Tenetur nihil voluptatibus earum explicabo incidunt?
      </p>
    </div>
  );
}
