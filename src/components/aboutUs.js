import React from 'react';
import './aboutUs.css'; // Import your custom styles

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      {/* <section className="hero-section">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Your gateway to sustainable water practices in India</p>
        </div>
      </section> */}

      <section className="content-section">
        <div className="content-container">
          <h2>Our Mission</h2>
          <p>
            At WaterSavers, we are dedicated to raising awareness about water consumption in India and promoting sustainable practices to conserve this precious resource.
          </p>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-box">
            <h3>Water Crisis in India</h3>
            <p>India is facing a severe water crisis due to...</p>
          </div>
          <div className="stat-box">
            <h3>Our Impact</h3>
            <p>Through our initiatives, we have contributed to...</p>
          </div>
        </div>
      </section>

      <section className="tips-section">
        <div className="tips-container">
          <h2>Ways to Save Water</h2>
          <div className="tip">
            <h3>1. Fix Leaks</h3>
            <p>Even a small leak can waste a significant amount of water. Regularly check and fix leaks in your home.</p>
          </div>
          <div className="tip">
            <h3>2. Collect Rainwater</h3>
            <p>Install rain barrels to collect rainwater for non-potable uses like watering plants.</p>
          </div>
          {/* Add more tips */}
        </div>
      </section>

      <section className="call-to-action-section">
        <div className="cta-container">
          <h2>Join Us in the Water Conservation Movement</h2>
          <p>Together, we can make a difference. Join WaterSavers today!</p>
          <button className="cta-button">Get Involved</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;