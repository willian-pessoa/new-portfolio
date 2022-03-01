import React from "react";
import "./Card.scss";

export default function Card({ title, id, github, demo, img, category }) {
  return (
    <div className="container">
      <div className="card">
        <img src={img} alt={title} />
      </div>
      <div className="cardText">
          <h5>{title}</h5>
          <div className="links">
              <a href={demo} target="_blank"><h6>DEMO</h6></a>
              <a href={github} target="_blank"><h6>GITHUB</h6></a>
          </div>
      </div>
    </div>
  );
}
