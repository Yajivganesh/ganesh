import "./Footer.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="Footer">
      <div className="footer_container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <a
                href="https://goo.gl/maps/f4UYcscHbP21f7eD6"
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  NO-6A,Manimutharkulam,Pathamadai
                  <br />
                  Tirunelveli-627452.
                </p>
                <p>India.</p>
              </a>
            </div>
          </div>
          <div className="email">
            <p>
              <a href="mailTo:vijayganesh11100@gmail.com">
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                vijayganesh11100@gmail.com
              </a>
            </p>
          </div>
          <br />
          <div className="phone">
            <p>
              <a href="tel:+918668009947">
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />{" "}
                8668009947{" "}
              </a>
            </p>
          </div>
        </div>
        <div className="right">
          <h4>Contact Me</h4>
          <p>
            Need to contact me? Please make a call or write an email for me,
            Thank you for Visiting My page 
          </p>
          <div className="social">
            <a
              href="https://www.facebook.com/vijayganesh.mech.1/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://www.instagram.com/yajiv_ganesh/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/vijay-ganesh-aa7ba1160/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
