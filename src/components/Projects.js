import React from "react";
require.context("./images", true, /.*/);

//destructure the object coming in
export default function Portfolio({ myProjects }) {
  return (
    <section className="project-card-holder">
      {myProjects.map((project, index) => {
        return (
          <div className="flip-box">
            <a
              key={project.key}
              href={project.link}
              className="card flip-box-inner"
              id={`${index === 0 ? "top-project-card" : "project-card"}`}
            >
              <div
                className="flip-box-front"
                style={{
                  backgroundImage:
                    "url(" + require(`./images/${project.image}`) + ")",
                }}
              ></div>
              <figure className="flip-box-back">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </figure>
            </a>
          </div>
        );
      })}
    </section>
  );
}

{
  /* <div className="flip-box">
<a
  key={project.key}
  href={project.link}
  // style={{
  //   backgroundImage:
  //     "url(" + require(`./images/${project.image}`) + ")",
  // }}
  className="card flip-box-inner"
  id={`${index === 0 ? "top-project-card" : "project-card"}`}
  // id="top-card"
>
  <div className="flip-box-front">
    <img
      className="project-image"
      src={require(`./images/${project.image}`)}
    />
  </div>
  <figure className="flip-box-back">
    <h3>{project.name}</h3>
    <p>{project.description}</p>
  </figure>
</a>
</div> */
}
