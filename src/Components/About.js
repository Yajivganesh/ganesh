import "../Components/About.css";
import React from "react";
import Img2 from "../Assets/Img2.jpg";
import Img8 from "../Assets/Img8.jpg";
import { Link as Link1 } from "react-scroll";
import RESUME from "../Assets/RESUME.pdf";

const About = () => {
  return (
    <div className="main__about" id="About">
      <div className="sub__main_about">
        <div className="mask__">
          <img src={Img2} alt="" className="image__main" />
        </div>
        <div className="about__content">
          <div className="about__image__content">
            <img src={Img8} alt="" className="about__image" />
            <div  className="quote">
      <h4>
          "Do th job that the machine can't. But not as an operator, as an
          Inventor"
        </h4>
        <p>~ Vijay ganesh</p>
      </div>
          </div>
          <div className="about__text__content">
            <div className="about__para">
              <h1>About Me</h1>
              <p>I caught fire coding</p>
              <br />
              <p>
                Hi, This is Vijay Ganesh.I belong to a small village
                Manimutharkulam situated in Tirunelveli district. Apart from my
                parents, i have two elder brother. My hobbies are playing
                cricket, Badminton,solving numericals and Creating Memes.
              </p>
              <br />
              <p>
                I have done my class 10th from CMS David Memorial Hr secondary
                school karisalpatti with 92.2% after then I completed my 12th
                with 75%.
              </p>
              <br />
              <p>
                I'm a hard-working Enigineering Graduate specialised in
                Mechanical with an overall CGPA of 7.68 from SCAD college of
                Engineering & Technology, Cheranmahadevi.
              </p>
              <br />
              <p>
                After that i completed my Java Fullstack development course with
                Java, MySQL, Reactjs, HTML, CSS, JavaScript and Bootstrap from Besant Technologies
                Chennai ,Anna Nagar.
              </p>
              <br />
              <p>
                At present i am searching for a Java developer Role from a
                reputed company to start my career.
              </p>
              <br />
              <p>
                Coming to my strength, I am quick lerner, a hard working,
                Positive attitude and self motivated person. I am always Willing
                to learn new ideas.
              </p>
              <br />
              <p>
                My specialities include quickly learning new skills and
                programming languages, problem solving, responsive design
                principles of organizing code. So far i have Java, MySQL,
                JavaScript, HTML, CSS, Bootstrap, and ReactJs. I'm still
                enthusiastically grabbing onto any other programming
                languages,frameworks, or principles I can integrate into th
                coding web in my head. I have 
              </p>
              <br />
              <p>
                I attached my Curriculam Vitae below. You may download it from
                below button
              </p>
            </div>
            <div className="buttons">
              <a
                href={RESUME}
                download="RESUME.pdf"
                className="btn download__btn"
              >
                Download CV
              </a>

              <Link1
                to="Footer"
                spy={true}
                smooth={true}
                duration={500}
                className="btn btn_light contact__btn"
              >
                contact
              </Link1>
            </div>
            <br />
          </div>
          
        </div>
      
      </div>
      
    </div>
  );
};

export default About;
