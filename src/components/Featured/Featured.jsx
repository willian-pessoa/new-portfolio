import React from "react";
import "./Featured.scss";

export default function Featured() {
  return (
    <div id="Featured" className="featured">
      <h3>Featured Project</h3>
      <div className="card">
        <img src="/assets/mbldshare.jpg" alt="" />
        <div className="text">
          <h4>MBLD Share</h4>
          <p>
            A personal project that I did using Next Js (still working in
            improvements). It's a social media to share MBLD (Multi-Blind)
            attempts. The app allows you to send info about one attempt, the
            Infos are stored with Sanity. Has a Feed page that shows the latest
            attempts shared and has a ranking with the best attempt posted by
            each user.
            <br />
            The principal tools I use to build this project was: NextJs, ReacJs,
            Sanity, Sass, VsCode, GitHub, Vercel.
          </p>
          <a href="https://mbld-share.vercel.app/" rel="noreferrer" target="_blank">
            <h5>DEMO LINK</h5>
          </a>
          <a href="https://github.com/willian-pessoa/mbld-share" rel="noreferrer" target="_blank">
            <h5>GIT HUB</h5>
          </a>
        </div>
      </div>
    </div>
  );
}
