import React from "react";
import "./Body2.css";
import luna from "../../img/luna.png";
import nft from "../../img/nft.png";

function Body2() {
  return (
    <div className="b2-bg">
      <p className="b2-title">Partners</p>
      <img src={luna} className="dot" />
      <img src={nft} className="dot" />
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  );
}

export default Body2;
