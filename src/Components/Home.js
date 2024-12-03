import React from "react";
import BannerBackground from "../Assets/SocialLoginButtons.png";
import BannerImage from "../Assets/homeImageDecoration.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Because Good Habits can be Fun!
          </h1>
          <p className="primary-text">
            Nurture your focus, one session at a time—watch your plant and productivity grow together!
          </p>
          <button className="secondary-button">
            <a href="https://growhabits.online/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              Get Started! <FiArrowRight />
            </a>
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
