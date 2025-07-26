import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar.jsx";
import HeroSection from "../component/HeroSection.jsx"
import InfoSection from "../component/InfoSection.jsx";
import MaterialsSection from "../component/MaterialsSection.jsx"
import Footer from "../component/Footer.jsx";



const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <HeroSection />
      <InfoSection />
      <MaterialsSection />
      <Footer />
    </div>
  )
}

export default Home
