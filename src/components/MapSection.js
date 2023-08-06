// src/components/MapSection.js
import React from 'react';
import IndiaMap from './IndiaMap';

function MapSection({state}) {
  return (
    <div className="mt-4"> 
      <h2>Interactive Map of India</h2>
      <IndiaMap />
    </div>
  );
};

export default MapSection;
