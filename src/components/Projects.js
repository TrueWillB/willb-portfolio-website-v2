import React from "react";
require.context("./images", true, /.*/);

//destructure the object coming in
export default function Portfolio({ myProjects }) {
  return (
    <section className="project-card-holder">
      {myProjects.map((project, index) => {
        return (
          <a
            key={project.key}
            href={project.link}
            style={{
              backgroundImage:
                "url(" + require(`./images/${project.image}`) + ")",
            }}
            className="card"
            id={`${index === 0 ? "top-project-card" : "project-card"}`}
            // id="top-card"
          >
            <figure>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </figure>
          </a>
        );
      })}
    </section>
  );
}
