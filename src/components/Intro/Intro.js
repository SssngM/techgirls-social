import React from "react";
import "./intro.css";
import introimg from "../../img/introimg.png";

function Intro() {
  return (
    <section>
      <div className="left"></div>
      <div className="right">
        <div className="r-bg">
          <div className="wrapper">
            <div className="title">
              <div> Tech</div>
              <div> Girls</div>
              <div> Social</div>
            </div>
            <div className="slogan">
              <div> We support all tech girls network, </div>
              <div> have in person meet up in SF. </div>
              <div> Come and join us</div>
            </div>
          </div>
        </div>
        <img src={introimg} alt="" className="intro-img" />
      </div>
    </section>
  );
}

export default Intro;
