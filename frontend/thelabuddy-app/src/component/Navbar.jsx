import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🛒 ThelaBuddy</div>
      <div className="nav-buttons">
        <button className="explore-btn">Explore</button>
        <button><Link to="/login">Log in</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;
