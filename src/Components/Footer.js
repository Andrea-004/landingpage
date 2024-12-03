import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          
        </div>
        <div className="footer-section-columns">
          <span>00106123@uca.edu.sv</span>
          <span>00005923@uca.edu.sv</span>
          <span>00009423@uca.edu.sv</span>
          <span></span>
        </div>
        <div className="footer-section-columns">
          <span>From modoBuso, Made with ❤️</span>
          <span>All rights reserved. GrowHabits 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
