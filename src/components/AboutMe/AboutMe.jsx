import React from "react";
import "./AboutMe.scss";
import {IoIosArrowDown} from "react-icons/io"

const SKILLS = [
  "HTML",
  "CSS",
  "SASS",
  "JavaScript",
  "ReactJs",
  "NextJs",
  "Python",
  "Sanity",
  "VS Code",
  "Git Hub",
];

export default function AboutMe() {
  return (
    <div id="About Me" className="aboutMe">
      <div className="wrapper">
        <div className="containerLeft">
          <img src="assets/willian.jpg" alt="about me" />
        </div>
        <div className="containerRight">
          <h3>Hello, I'm Willian Pessoa from Brazil. </h3>
          <p>
            I'm a computer science, student, following the curriculum by Open
            Source Society University(OSSU). I have a good math background, I'm
            graduated in Math and I win 2 gold medals and 2 bronze medals in the
            Brazilian Public School Mathematics Olympiad. About the person
            Willian, I'm patient and dedicated with what I'm doing, my desire
            it's always to be the best in that I'm learning.
          </p>
          <p>
            Fun fact, my favorite hobby it's solving Rubik's cube blindfolded.
          </p>
          <h3>My programing knowledge and tools are:</h3>
          <div className="skills">
            <ul>
              {SKILLS.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="downArrow">
        <a href="#Featured"><IoIosArrowDown/></a>
      </div>
    </div>
  );
}
