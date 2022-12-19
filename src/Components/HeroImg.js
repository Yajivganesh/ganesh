import "./Heroimg.css";

import React from "react";
import { Link } from "react-scroll";
import img_3 from "../Assets/img_3.jpg";
// import HeroImg2 from "./HeroImg2";

const HeroImg = () => {
  const project = () =>{
    alert("OOps..! I forgot that this is my first project. I will do more projects in the future. That's why I'm giving this button");
  }
  return (
    <div className="main__container__total">
      <div className="hero">
        <div className="mask">
          <img className="into_img" src={img_3} alt={img_3} />
        </div>
        <div className="content">
          <div className="dev">
          <p>Hi I'M AN INNOVATIVE FRESHER.</p>
          <h1>
            JAVA DEVELOP<span>ER</span>
          </h1>
          
          {/* WITH AN EXTRADINARY MINDSET LIKE */}
          </div>
          
          <div>
            <Link onClick={project}
              to=""
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
