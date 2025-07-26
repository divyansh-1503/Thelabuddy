import React from "react";
import "./InfoSection.css";

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="benefits">
        <h2>Benefits of Using ThelaBuddy</h2>
        <ul>
          <li>Direct access to reliable vendors</li>
          <li>Competitive pricing on bulk orders</li>
          <li>User-friendly interface and seamless navigation</li>
          <li>Secure payment options</li>
        </ul>
      </div>
      <div className="testimonials">
        <h2>Testimonials</h2>
        <p>
          “ThelaBuddy has transformed how we source materials, offering transparency and reliability.” – Ravi Kumar, Vendor
        </p>
        <p>
          “A seamless experience from start to finish. Highly recommend!” – Neha Sharma, Vendor
        </p>
      </div>
    </section>
  );
};

export default InfoSection;