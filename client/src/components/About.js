import React from "react";
import "./About.css";
import aboutImg from "../assets/about-dragonfruit.jpg"; // replace with your dragon fruit image

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <p className="about-subtitle">Organic & Healthy</p>
        <h1 className="about-title">
          Fresh Organic <br /> Dragon Fruit
        </h1>
        <p className="about-description">
          DragonDelight was born from a love for naturally grown super-fruits
          and a mission to make healthy eating simple and exciting.  
          We partner with trusted farmers who use sustainable, chemical-free
          practices to cultivate vibrant, nutrient-rich dragon fruits.  
          Every order is hand-picked, carefully packed, and delivered fresh,
          ensuring that you enjoy the pure taste of nature with every bite.  
          From our farms to your doorstep, we’re here to bring freshness,
          flavor, and wellness to your daily life.
          Our expansion from 2 acres to 35 acres has been guided by careful
          planning and a dedication to quality. Each acre is thoughtfully
          managed to optimize growth while maintaining the highest standards
          of organic cultivation. We have invested in advanced irrigation systems,
          soil enrichment techniques, and natural pest management strategies, 
          all designed to ensure that our fruits thrive naturally.
          By embracing organized farming, DragonDelight not only increases yield
          but also strengthens sustainability and environmental responsibility—
          benefiting both our customers and the planet.At DragonDelight,
          we believe that farming is more than a profession—it’s a passion, 
          a responsibility, and a celebration of nature’s gifts. 
          From our humble beginnings on two acres to the flourishing 35-acre
          farm we manage today, every milestone is a testament to our love 
          for dragon fruits and our commitment to our customers. By choosing 
          DragonDelight, you are not just enjoying a fruit; 
          you are becoming part of a journey toward healthier living, sustainable 
          farming, and the pure taste of nature delivered fresh to your doorstep
          
        </p>
      </div>

      <div className="about-right">
        <div className="about-image">
          <img src={aboutImg} alt="Fresh Organic Dragon Fruit" />
        </div>

        <div className="about-stats">
          <div className="stat-box">
            <h2>4+</h2>
            <p>Years of Organic Farming</p>
          </div>
          <div className="stat-box">
            <h2>12K+</h2>
            <p>Happy Customers</p>
          </div>
          <div className="stat-box">
            <h2>98%</h2>
            <p>Positive Reviews</p>
          </div>
          <div className="stat-box">
            <h2>100%</h2>
            <p>Chemical-Free Guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
