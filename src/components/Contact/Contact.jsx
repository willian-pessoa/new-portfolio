import React from "react";
import "./Contact.scss";
import {BsLinkedin, BsGithub, BsYoutube} from "react-icons/bs"

export default function Contact() {

  return (
    <div className="contact" id="Contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <h3>willianpessoadeabreu@gmail.com</h3>
        <h2>Social Medias</h2>
        <ul>
          <li><a href="https://github.com/willian-pessoa" rel="noreferrer" target="_blank"><BsGithub/></a></li>
          <li><a href="https://www.linkedin.com/in/willian-pessoa/" rel="noreferrer" target="_blank"><BsLinkedin/></a></li>
          <li><a href="https://www.youtube.com/channel/UCBHOTO9lXJsE1tGpYAPaZYw" rel="noreferrer" target="_blank"><BsYoutube/></a></li>
        </ul>
      </div>
    </div>
  );
}
