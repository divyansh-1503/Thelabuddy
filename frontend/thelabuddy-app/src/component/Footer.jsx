import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <h3>Quick Links</h3>
        <p>Home</p>
        <p>Vendor Marketplace</p>
        <p>Contact Us</p>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <p>Email: support@thelabuddy.com</p>
        <p>Phone: +1234 567 890</p>
      </div>
    </footer>
  );
};

export default Footer;