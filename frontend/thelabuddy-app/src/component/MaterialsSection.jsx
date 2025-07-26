import React from "react";
import "./MaterialsSection.css";

const MaterialsSection = () => {
  return (
    <section className="materials-section">
      <h2>Available Raw Materials</h2>
      <div className="materials-grid">
        <img src="https://i.imgur.com/yI3GLVw.jpg" alt="Textiles" />
        <img src="https://i.imgur.com/mCqZBfj.jpg" alt="Wood" />
        <img src="https://i.imgur.com/ayg4QXX.jpg" alt="Leather" />
      </div>
    </section>
  );
};

export default MaterialsSection;