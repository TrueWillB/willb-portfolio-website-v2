import React from "react";
require.context("../images", true, /.*/);

const URL = "./restingFace.jpg";
// const restingFace = require("../images/restingFace.jpg");

//destructure the object coming in
export default function Portfolio({ myProjects }) {
  //   console.log(theCEO);
  return (
    <section className="project-card-holder">
      {myProjects.map((project, index) => {
        return (
          <a
            key={index}
            href={project.link}
            style={{
              backgroundImage:
                "url(" + require(`./images/${project.image}`) + ")",
            }}
            // style={{
            //   backgroundImage: `url(${
            //     "../../public/assets/images/" + project.image
            //   })`,
            // }}
            className="card"
            id={`${index === 0 ? "top-project-card" : "project-card"}`}
            // id="top-card"
          >
            <figure>
              {/* <img src={restingFace} alt="CEO" /> */}
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </figure>
          </a>
        );
      })}
    </section>
  );
}
