import React, { useState, useEffect } from 'react';
import Carousel from './Carousel.jsx';
import './RelPro.css';

const OutfitList = ({
  setCompaired, setModalStatus, setProductInfo, productInfo,
}) => {
  const [outFits, setOutFits] = useState([]);
  const [remove, setRemove] = useState('');

  // adds product to outFit list
  const addOutfit = (obj) => {
    if (outFits.includes(obj)) {
      return;
    }
    setOutFits([...outFits, obj]);
  };
  // Set icon onMount
  useEffect(() => { setRemove('X'); }, []);

  return (
    <div id="outFit-prod-list">
      <button className="outFit-button" type="button" onClick={() => { addOutfit(productInfo); }}>
        ➕
        {' '}
        <br />
        {' '}
        Add an Outfit
      </button>
      <div className="outFit-prod-carousel">
        <Carousel
          setModalStatus={setModalStatus}
          setCompaired={setCompaired}
          setProductInfo={setProductInfo}
          gallery={outFits}
          icon={remove}
        />
      </div>
    </div>
  );
};

export default OutfitList;
