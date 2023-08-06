// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css'; // Create a new file HeroSection.css
import Button from 'react-bootstrap/Button';

const HeroSection = () => {
  return (

      <div classname="d-flex justify-content-center">
        <div className="jumbotron jumbotron-custom">
      <div className="container fade-in-up">
        <h1>Water Footprint of India</h1>
        <p>
          
        The water footprint measures water use and pollution for goods, services, and processes. It helps companies, governments, and individuals understand dependencies, resource protection, and food/energy security. It includes direct and indirect water use and consists of green, blue, and grey components. Managing water footprints is vital for sustainable water use and preservation.by identifying the source of water consumed, such as rainfall, soil moisture, surface water, or groundwater, and the volume of fresh water needed to assimilate pollutants.
</p>
      </div>
    </div>
      <Button variant="dark" href="/calculator">Calculate Your Water Footprint</Button>
      </div>
      
  );
};

export default HeroSection;
