import React from 'react';
import './Common.css';

const Stars = ({ ratings }) => {
  const calc = () => {
    if (!ratings['1']) {
      return 0;
    }
    let count = 0;
    let weight = 0;

    for (let i = 1; i <= 5; i += 1) {
      const current = +ratings[i] || 0;
      count += current;
      weight += current * i;
    }

    const stars = weight / count;
    const ones = Math.floor(stars);
    const digit = (stars - ones) * 10;

    if (digit < 4) {
      return ones;
    }
    if (digit < 5) {
      return ones + 0.4;
    }
    if (digit < 6) {
      return ones + 0.5;
    }
    return ones + 0.6;
  };
  return <div className="stars" style={{ '--rating': calc() }} />;
};
export default Stars;
