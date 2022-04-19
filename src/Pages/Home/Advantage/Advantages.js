import React from "react";
import './Advantages.css'
import adv1 from "../../../images/advantages/exprt-turial-ico1.png";
import adv2 from "../../../images/advantages/exprt-turial-ico2.png";
import adv3 from "../../../images/advantages/exprt-turial-ico3.png";
import adv4 from "../../../images/advantages/exprt-turial-ico4.png";

const Advantages = () => {
  return (
    <div>
      <section className="advntg-sec">
        <div className="container">
          <div className="sec-hding-hldr">
            <h2 className="hding-title">
              eTutor <span>Advantages</span>
            </h2>
          </div>

          <ul className="exprt-tutoral-ul">
            <li>
              <span className="exprt-tutrl-icon">
                <img src={adv1} alt="expart tutorial" />
              </span>
              <h4>Expert Tutors</h4>
              <p>
                Remarkable efficiency. Years of experience. Superior work
                ethics. I am qualified tutor.
              </p>
            </li>
            <li>
              <span className="exprt-tutrl-icon">
                <img src={adv2} alt="expart tutorial" />
              </span>
              <h4>Learning Design</h4>
              <p>
                My one to one tutoring programme provides finest guidance. We
                also have group tutoring and nurture study circles.
              </p>
            </li>
            <li>
              <span className="exprt-tutrl-icon">
                <img src={adv3} alt="expart tutorial" />
              </span>
              <h4>Technology</h4>
              <p>
                I have been successfully blending human expertise and
                technology together to create my own framework suitable for
                every child.
              </p>
            </li>
            <li>
              <span className="exprt-tutrl-icon">
                <img src={adv4} alt="expart tutorial" />
              </span>
              <h4>Result Oriented</h4>
              <p>
                A student's potential is fully explored to help him/her secure
                higher grades.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Advantages;
