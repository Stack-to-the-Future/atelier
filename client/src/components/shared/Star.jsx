import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import './Common.css';

// This will one day take in a number [0, 0.25, 0.50, 0.75, 1]
// And display a star based on that prop
// Today is not that day
const Star = () => (
  <div className="star-container">
    <FontAwesomeIcon icon={faStar} className="star-icon" />
  </div>
);

export default Star;
