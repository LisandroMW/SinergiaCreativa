import React from 'react';
import './Card.css';

const Card = ({ title, amout }) => {
  return (
    <div className="card">
      <div className="card-title">
        {title}
      </div>
      <div className="card-amout">
        {amout}
      </div>
    </div>
  );
};

export default Card;