import React from "react";
import "./Contact.css";
import tourPic from "../../../images/contactimg.jpg"
// import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contact_left_side">
        <div className="contact_left_side_info">
        <h6 >
            <span>
              <i class="fa fa-globe" aria-hidden="true"></i>
            </span>
            Address:
          </h6>
          <p>Opposite govt college Twonship, Lahore</p>
        </div>
        <div className="contact_left_side_info">
        <h6 >
            <span>
            <i class="fa fa-phone" aria-hidden="true"></i>
            </span>
            Contact No:
          </h6>
          <p>+92 308 0018238</p>
        </div>
        <div className="contact_left_side_info">
        <h6 >
            <span>
            <i class="fa fa-phone" aria-hidden="true"></i>
            </span>
            Contact No:
          </h6>
          <p>+92 303 4247890</p>
        </div>
        <div className="contact_left_side_info">
        <h6 >
            <span>
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
            </span>
            Email:
          </h6>
          <p>hammadfarroq423 @gmail.com</p>
        </div>
      </div>
      <div className="contact_right_side">
        <div>
          <img src={tourPic} alt="contact"/>
        </div>
      </div>
      {/* <a className="mailBtn" href="mailto:mymailforabhi@gmail.com">
        <Button>Contact: hammadfarroq423@gmail.com</Button>
      </a> */}
    </div>
  );
};

export default Contact;
