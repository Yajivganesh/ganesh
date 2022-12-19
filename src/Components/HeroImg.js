import "./Heroimg.css";

import React from "react";
import { Link } from "react-scroll";
import img_3 from "../Assets/img_3.jpg";
// import HeroImg2 from "./HeroImg2";

const HeroImg = () => {
  return (
    <div className="main__container__total">
      <div className="hero">
        <div className="mask">
          <img className="into_img" src={img_3} alt={img_3} />
        </div>
        <div className="content">
          <p>Hi I'M A FREELANCER.</p>
          <h1>
            JAVA DEVELOP<span>ER</span>
          </h1>
          <div>
            <Link
              to="/Project"
              spy={true}
              smooth={true}
              duration={500}
              className="btn"
            >
              PROJECTS
            </Link>
            <Link
              to="Footer"
              spy={true}
              smooth={true}
              duration={500}
              className="btn btn_light"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
