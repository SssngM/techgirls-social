import React from "react";
import { flushSync } from "react-dom";
import "./Footer.css";
import mail from "../../img/mail.png";
import meetup from "../../img/meetup.png";

function Footer() {
  return (
    <div className="footer">
      <p> Contact</p>
      <div className="f-dec">Get in Touch</div>
      <div> Do you want to valunteer or donate? feel free to contact us!</div>
      <div className="f-img">
        <a href="mailto:techgirlssocial@gmail.com ">
          <img src={mail} />
        </a>

        <a href="https://www.meetup.com/techgirlssocial/">
          <img src={meetup} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
