// src/components/State.js
import React from 'react';

const State = ({ name, hoverColor }) => {
  return (
    <path d="..." fill={hoverColor} className="map-state">
      {/* SVG path of the state */}
    </path>
  );
};

export default State;
