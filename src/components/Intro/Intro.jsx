import React from "react";
import "./Intro.scss";
import {IoIosArrowDown} from "react-icons/io"

export default function Intro() {
  return (
    <div id="Intro" className="intro">
      <div className="fakeContainer"></div>
      <div className="textContainer">
        <h2>Hi There, I'm</h2>
        <h1>Willian Pessoa</h1>
        <h3>Computer Science Student !</h3>
      </div>
      <div className="downArrow">
        <a href="#About Me"><IoIosArrowDown/></a>
      </div>
    </div>
  );
}
