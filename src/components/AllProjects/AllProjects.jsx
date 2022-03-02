import React from "react";
import "./AllProjects.scss";
import Card from "./Card";
import { ALLPROJECTS } from "./data";
import { shuffleArray } from "./helpers";

export default function AllProjects() {
  const projects = shuffleArray(ALLPROJECTS);

  return (
    <div id="All Projects" className="allProjects">
      <h3>All Projects</h3>
      <div className="containerCards">
        {projects.map(({ id, title, img, category, github, demo }) => (
          <Card
            key={id}
            id={id}
            title={title}
            img={img}
            category={category}
            github={github}
            demo={demo}
          />
        ))}
      </div>
    </div>
  );
}
