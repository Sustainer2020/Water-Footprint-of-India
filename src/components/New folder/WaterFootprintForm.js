// WaterFootprintForm.js

import React, { useState } from 'react';

const WaterFootprintForm = ({ calculateWaterFootprint }) => {
  const [showerLength, setShowerLength] = useState(0);
  const [faucetFlow, setFaucetFlow] = useState(0);
  const [toiletFlush, setToiletFlush] = useState(0);
  const [dishwasherUsage, setDishwasherUsage] = useState(0);
  const [laundryUsage, setLaundryUsage] = useState(0);

  return (
    <div>
      {/* Input fields */}
      <input
        type="number"
        placeholder="Shower length (minutes)"
        value={showerLength}
        onChange={(e) => setShowerLength(e.target.value)}
      />
      <input
        type="number"
        placeholder="Faucet flow rate (liters per minute)"
        value={faucetFlow}
        onChange={(e) => setFaucetFlow(e.target.value)}
      />
      <input
        type="number"
        placeholder="Toilet flushes per day"
        value={toiletFlush}
        onChange={(e) => setToiletFlush(e.target.value)}
      />
      <input
        type="number"
        placeholder="Dishwasher usage per week"
        value={dishwasherUsage}
        onChange={(e) => setDishwasherUsage(e.target.value)}
      />
      <input
        type="number"
        placeholder="Laundry usage per week"
        value={laundryUsage}
        onChange={(e) => setLaundryUsage(e.target.value)}
      />

      {/* Calculate button */}
      <button onClick={calculateWaterFootprint}>Calculate Water Footprint</button>
    </div>
  );
};

export default WaterFootprintForm;
