import React from "react";
import "./Head.css";
import logo from "../../img/logo.jpg";

function Head() {
  return (
    <div className="head">
      <img src={logo} className="logo" />
      <div className="all-menu">
        <p className="menu"> Home </p>
        <p className="menu2"> About </p>
        <p className="menu2"> Event </p>
      </div>
    </div>
  );
}

export default Head;
