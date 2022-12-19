import "../Components/About.css";
import React from "react";
import Img2 from "../Assets/Img2.jpg";
import Img8 from "../Assets/Img8.jpg";
import { Link as Link1 } from "react-scroll";
import RESUME from "../Assets/RESUME.pdf"


const About = () => {
  return (
    <div className="main__about" id="About">
      <div className="sub__main_about">
      <div className="mask__">
          <img
            src={Img2}
            alt=""
            className="image__main"
          />
        </div>
      <div className="about__content">
        <div className="about__image__content">
        <img src={Img8} alt="" className="about__image" />
        </div>
        <div className="about__text__content">
          <div className="about__para">
          <h1>About Me</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur qui quia voluptatibus minus! Blanditiis animi rem
                fugiat. Ipsam, aut repellendus.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                voluptates perferendis minima unde a ipsa omnis vero blanditiis,
                corporis soluta eius? Recusandae minima laboriosam vel!
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
                corrupti, obcaecati minima perspiciatis aperiam vel. Aliquam
                dignissimos alias, repellendus porro sed eius, molestias magnam
                esse ipsa dicta beatae, perferendis numquam!
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
                corrupti, obcaecati minima perspiciatis aperiam vel. Aliquam
                dignissimos alias, repellendus porro sed eius, molestias magnam
                esse ipsa dicta beatae, perferendis numquam!
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
                corrupti, obcaecati minima perspiciatis aperiam vel. Aliquam
                dignissimos alias, repellendus porro sed eius, molestias magnam
                esse ipsa dicta beatae, perferendis numquam!
              </p>
            </div>
            <div className="buttons">
            <a href={RESUME} download="RESUME.pdf" className="btn download__btn">Download CV</a>
              
            
            <Link1 to="Footer" spy={true} smooth={true} duration={500} className="btn btn_light contact__btn">
              contact
            </Link1>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default About