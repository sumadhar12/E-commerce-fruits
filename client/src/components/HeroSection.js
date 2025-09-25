import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import './HeroSection.css';
import heroImg from '../assets/hero.jpg';
import { FaCheckCircle, FaShippingFast, FaPhoneAlt } from 'react-icons/fa';

export default function HeroSection() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,      // only animate once when in viewport
    mirror: false,   // don't animate out on scroll up
  });
}, []);


  return (
    <div className="hero-container">
      <div className="hero-content">
        <h3 className="tagline">Organic & Healthy</h3>
        <h1 className="main-heading">Fresh Organic Dragon Fruit</h1>
        <p className="subtext">Stay Home. We Deliver Fresh Dragon Fruit Right to Your Doorstep.</p>
        <button className="shop-btn">SHOP NOW</button>

        <div className="info-icons">
          <div><FaCheckCircle className="icon" /> 100% Organic</div>
          <div><FaShippingFast className="icon" /> Fast Delivery</div>
          <div><FaPhoneAlt className="icon" /> 24/7 Support</div>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="Dragon Fruit" />
      </div>
    </div>
  );
}
