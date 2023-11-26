import React, { useState } from 'react';
// import Carousel from './Carousel.jsx';
import './RelPro.css';

const OutfitList = ({ productInfo, setToDisplay, toDisplay }) => {
  const [outFits, setOutFits] = useState([]);
  // adds product to outFit list
  const addOutfit = (obj) => {
    setOutFits([...outFits, obj]);
  };
  return (
    <div id="rel-prod-list">
      <h5>YOUR OUTFIT</h5>
      <button className="card-button" type="button" onClick={() => { addOutfit(productInfo); }}>⭐️</button>
      {/* <Carousel
        outFits={outFits}
        addOutfits={addOutfit}
      /> */}
    </div>
  );
};

export default OutfitList;
