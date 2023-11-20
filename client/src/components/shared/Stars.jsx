import React from 'react';
import Star from './Star.jsx';
import './Common.css';

const Stars = ({ rating }) => {
  // Generates array of numbers 0-1 that will be used to populate stars
  // Will automatically handle flooring to next quarter.
  const generateStars = () => {
    const handleFraction = (decimal) => {
      if (decimal >= 0.75) {
        return 0.75;
      } if (decimal >= 0.50) {
        return 0.50;
      } if (decimal >= 0.25) {
        return 0.25;
      }
      return 0;
    };
    const result = [];
    let remaining = rating;
    for (let i = 0; i < 5; i += 1) {
      if (!remaining) {
        result.push(0);
      } else if (remaining >= 1) {
        result.push(1);
        remaining -= 1;
      } else {
        result.push(handleFraction(remaining));
        remaining = 0;

      }
    }

    return result;
  };

  return (
    <div className='stars-container'>
      {generateStars().map((num, idx) => <Star key={idx} fill={num} />)}
    </div>
  );
};

export default Stars;



