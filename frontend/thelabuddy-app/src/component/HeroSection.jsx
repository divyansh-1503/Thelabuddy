import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1>Discover ThelaBuddy</h1>
      <p>
        It helps you connect directly with trusted suppliers and vendors.. 
      </p>
      <button className="register-btn">
        <Link to="/signup" className="register-link">Register Now</Link>
      </button>
    </section>
  );
};

export default HeroSection;
