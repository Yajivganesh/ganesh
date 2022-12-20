import "../Components/Summary.css";
import React from "react";
import Img_2 from "../Assets/Img_2.jpg";

const Summary = () => {
  const submit= () =>{
    alert("Form submitted");
  }
  return (
    <div className="main__summary" id="Summary">
      <div className="summary__contents__main">
        <img src={Img_2} alt="" className="background__summary__img" />
        <div className="summary__content">
          <div className="summary__text__content">
            <h1>Technical Summary</h1>
            <h3>BackEnd Technologies</h3>
            <p>
              Good Knowledge on Java Development Environment Setup. Having good
              interactions with Eclipse IDE. Good interpersonal skills, willing
              to take challenges and more responsibilities. Good knowledge on
              OOPs concepts like inheritance, Abstraction, Polymorphism. Having
              great knowledge on loop concepts. Having Good knowledge on String
              manipulation methods and collection framework. Also Having great
              knowledge in MySQL database with advanced knowledge in MySQL
              views, Joints, Constraints, indexes, stored procedures. Now i'm
              learnig SpringBoot framework by self learning through online
              videos and websites.
            </p>
            <br />
            <h3>FrontEnd Technologies</h3>
            <p>
              Front End with ReactJS trained and certified by Besant
              Technologies, Anna Nagar, Chennai. Having good knowledge in
              Reactjs. Good knowledge in creating responsive websites with
              advanced CSS concepts like Grid, flex and writing mediaqueries.
              And also i have experience in working with Adobe Photoshop and
              Adobe Illustrator.
            </p>
            <br />
            {/* <h3>Operating Systems</h3>
            <p>
             I can work with windows based Operating Systems and also MacOs machines.
             And I can able to work with the operating systems also. Because i have basic operating system knowledge also.
            </p> */}
          </div>
          <div className="summary__form__content">
            <div className="cont">
              <form>
                <label for="name">Your Name</label>
                <input type="text" required></input>
                <label for="email">Email</label>
                <input type="email" required></input>
                <label for="subject">Phone</label>
                <input type="text" required></input>
                <label for="name">Message</label>
                <textarea
                  rows="6"
                  placeholder=" Type your Message here"
                ></textarea>
                <button className="btn submit__btn" onClick={submit}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
