import React from "react";
import "./Card.scss";
import { CATEGORY_STYLE } from "./data";

export default function Card({ title, id, github, demo, img, category }) {
  return (
    <div className="container">
      <div className="card">
        <img src={img} alt={title} />
      </div>
      <div className="cardText" style={{backgroundColor: CATEGORY_STYLE[category]}}>
          <h5>{title}</h5>
          <div className="links">
              <a href={demo} rel="noreferrer" target="_blank"><h6>DEMO</h6></a>
              <a href={github} rel="noreferrer" target="_blank"><h6>GITHUB</h6></a>
          </div>
      </div>
    </div>
  );
}
