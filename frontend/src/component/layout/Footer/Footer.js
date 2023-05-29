import React from "react";
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
import logo from "../../../images/logo1.jpg";
import "./Footer.css";
import { Link } from "react-router-dom";
const quick__link = [
  {
    path: "/login",
    display: "login",
  },
  // {
  //   path: "/about",
  //   display: "About",
  // },
  {
    path: "/contact",
    display: "Contact",
  },
];
const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <img src={logo} alt="playstore" />
        <p>
          Explore the world, one adventure at a time. Discover new cultures,
          cuisines, and experiences with our travel guides and tips. Whether
          you're a seasoned traveler or just starting your journey, let us help
          you create unforgettable memories that will last a lifetime. Happy
          travels!
        </p>
      </div>

      <div className="midFooter">
        <h5>Discover</h5>

        {quick__link.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path}>{item.display}</Link>
            </li>
          );
        })}
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com">Instagram</a>
        <a href="http://youtube.com">Youtube</a>
        <a href="http://facebook.com">Facebook</a>
      </div>
      <div className="rightFooters">
        <h5 className="footer__link-title">Contact</h5>

        <div style={{display:"flex"}}  >
          <h6 className="mb-0 d-flex align-items-center mx-2">
            <span className="px-3">
              <i class="fa fa-globe" aria-hidden="true"></i>
            </span>
            Address:
          </h6>
          <p className="mb-0">Opposite govt college Twonship, Lahore</p>
        </div>
        <div style={{display:"flex"}}>
          <h6 className="mb-0 d-flex align-items-center mx-2">
            <span className="px-3">
              <i class="fa fa-phone" aria-hidden="true"></i>
            </span>
            Contact No:
          </h6>
          <p className="mb-0">+92 308 0018238</p>
        </div>
        <div style={{display:"flex"}}>
          <h6 className="mb-0 d-flex align-items-center mx-2">
            <span className="px-3">
              <i class="fa fa-phone" aria-hidden="true"></i>
            </span>
            Contact No:
          </h6>
          <p className="mb-0">+92 303 4247890</p>
        </div>
        <div style={{display:"flex"}}>
          <h6 className="mb-0 d-flex align-items-center mx-2">
            <span className="px-3">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
            </span>
            Email:
          </h6>
          <p className="mb-0">hammadfarroq423@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
