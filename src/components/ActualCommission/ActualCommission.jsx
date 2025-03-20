import React, { useState } from 'react';
import "./ActualCommission.css";

function ActualCommission() {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleTouchStar = (event) => {
    event.stopPropagation()
  }

  const handleTouchEnd = (event) => {
    event.stopPropagation()
  }

  const handleMouseDown = (event) =>{
    event.stopPropagation()
  }

  const handleMouseUp = (event) =>{
    event.stopPropagation()
  }

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
          onTouchStart={handleTouchStar}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
      </div>
    </div>
  );
}

export default ActualCommission;