import "../Components/Summary.css";
import React from "react";
import Img_2 from "../Assets/Img_2.jpg";

const Summary = () => {
  return (
    <div className="main__summary" id="Summary">
      <div className="summary__contents__main">
          <img src={Img_2} alt="" className="background__summary__img" />
        <div className="summary__content">
          <div className="summary__text__content">
            <h1>Summary</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              alias tempore facere, ad rerum ullam? Eos ducimus modi corrupti
              quo eum, earum molestias, quia est adipisci recusandae veniam,
              expedita natus! Accusamus et tempore nam natus voluptatibus
              aperiam aspernatur modi explicabo!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              quis deleniti quas, doloribus minima animi est quaerat! Ad
              voluptatum, laborum, dicta fugiat repellendus quia, modi soluta
              asperiores possimus porro maxime.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              eligendi fuga, tempora commodi vel laborum sint qui esse
              voluptatibus quasi.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed enim
              aliquam quibusdam minus suscipit eum iure perspiciatis optio
              repellat ducimus. Nam maxime necessitatibus atque similique unde,
              laborum molestias sed eius. Quas aliquam ullam molestias magnam
              nostrum aliquid optio unde saepe suscipit sunt porro, iste officia
              dignissimos nemo qui, omnis reprehenderit.
            </p>
          </div>
          <div className="summary__form__content">
            <div className="cont">
              <form>
                <label for="name">Your Name</label>
                <input type="text"></input>
                <label for="email">Email</label>
                <input type="email"></input>
                <label for="subject">Phone</label>
                <input type="text"></input>
                <label for="name">Message</label>
                <textarea
                  rows="6"
                  placeholder=" Type your Message here"
                ></textarea>
                <button className="btn submit__btn">Submit</button>
              </form>
            </div>
            <script src="Include a script tag to https://smtpjs.com/v3/smtp.js"></script>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
