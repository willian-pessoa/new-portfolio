import React, { useState } from "react";
import "./NavBar.scss";
import { HiOutlineMenu } from "react-icons/hi";
import {IoMdClose} from "react-icons/io";

const SESSIONS = ["Intro", "About Me", "Featured", "All Projects", "Contact"];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navBar">
      <h1>.Willian Pessoa</h1>
      <div className="fakeContainer"></div>
      {
        isMenuOpen ? <IoMdClose onClick={()=>setIsMenuOpen(false)} style={{zIndex:"50", margin:"0 20px", cursor: "pointer"}} size="30px" /> : <HiOutlineMenu onClick={()=>setIsMenuOpen(true)} style={{zIndex:"50", margin:"0 20px", cursor: "pointer"}} size="30px" />
      }
      <div className={`menuContainer ${isMenuOpen && "active"}`}>
          <ul>
            {SESSIONS.map((item, index) => {
              return (
                <li onClick={()=>setIsMenuOpen(false)} key={index}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              );
            })}
          </ul>
      </div>
    </div>
  );
}
