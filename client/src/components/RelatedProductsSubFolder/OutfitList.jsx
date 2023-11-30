import React, { useState, useEffect } from 'react';
import productAPIFunctions from '../../lib/productAPIFunctions.js';
import Carousel from './Carousel.jsx';
import './RelPro.css';

const OutfitList = ({
  current, getMainProduct, ratings, handleModalStatus, handleCompaired,
}) => {
  const [outFits, setOutFits] = useState([]);
  const [remove, setRemove] = useState('');

  const handleOutFitList = (arr) => {
    setOutFits([...arr]);
  };
  const addOutfit = () => {
    if (outFits.some((outfit) => outfit.id === current.id)) {
      return;
    }

    productAPIFunctions.getStyles(current.id)
      .then((data) => {
        const photo = data.data.results[0].photos[0].thumbnail_url;
        const temp = { ...current };
        temp.photo = photo;
        setOutFits([...outFits, temp]);
      }).catch((error) => { console.error('Error getting product:', error); });
  };

  useEffect(() => {
    setRemove('X');
  }, []);

  return (
    <div data-testid="outFitId" id="outFit-prod-list">
      <button className="outFit-button" type="button" onClick={() => { addOutfit(); }}>
        ➕
        {' '}
        <br />
        {' '}
        Add an Outfit
      </button>
      <div className="outFit-prod-carousel">
        <Carousel
          handleModalStatus={handleModalStatus}
          handleCompaired={handleCompaired}
          handleOutFitList={handleOutFitList}
          getMainProduct={getMainProduct}
          gallery={outFits}
          ratings={ratings}
          icon={remove}
        />
      </div>
    </div>
  );
};

export default OutfitList;
