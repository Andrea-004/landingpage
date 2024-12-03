import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/aboutImageDecoration.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Grow Your Focus, One Break at a Time
        </h1>
        <p className="primary-text">
          Taking care of your mind is like tending to a garden—it takes time, effort, and the right balance. Our Pomodoro timer is designed to help you stay productive while nurturing your well-being.
        </p>
        <p className="primary-text">
        With focused work sessions and mindful breaks, you'll see your plant thrive, just like your productivity.
        </p>
      </div>
    </div>
  );
};

export default About;
