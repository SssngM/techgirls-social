import React from "react";
import { flushSync } from "react-dom";
import "./Footer.css";
import insta from "../../img/insta.png";
import meetup from "../../img/meetup.png";


function Footer() {
  const handleClick = () => {
    // implementation details
  };

  
  return (
    <div className="footer">
      <p> Keep in touch</p>
      {/* <div className="f-dec">Get in Touch</div> */}
      <div> Do you want to valunteer or donate? feel free to contact us!</div>
      <div>
      <button type="button" onClick={handleClick}>
        <a href = "https://us12.list-manage.com/contact-form?u=c2fe686774abda43cf2247db9&form_id=ea57a290a2932a5f3b1d2216d8139c2b">
        Contact us
        </a>
      </button>
    </div>
      <div className="f-img">
        <a href="https://instagram.com/techgirlssocial?igshid=YmMyMTA2M2Y=">
          <img src={insta} />
        </a>

        <a href="https://www.meetup.com/techgirlssocial/">
          <img src={meetup} />
        </a>
        
      </div>
    </div>
  );
}

export default Footer;
