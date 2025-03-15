import React, { useState } from 'react';
import "./ActualCommission.css";

function ActualCommission() {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="range-input">
      <div className="label-container">
        <label htmlFor="commission-slider" className="text-container">
          Comisión Actual
        </label>
        <div className="value">
          <div>{value}%</div>
        </div>
      </div>
      <div className="value-container">
        <input
          id="commission-slider"
          type="range"
          min="0"
          max="100"
          value={value}
          step="1"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default ActualCommission;