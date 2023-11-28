import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import './RelPro.css';

const OutfitList = ({
  current, getMainProduct, ratings, handleModalStatus, handleCompaired,
}) => {
  const [outFits, setOutFits] = useState([]);
  const [remove, setRemove] = useState('');

  // handle OutFit list Change
  const handleOutFitList = (arr) => {
    setOutFits([...arr]);
  };
  const options = { headers: { Authorization: process.env.TOKEN } };
  // adds an OutFit
  const addOutfit = () => {
    if (outFits.some((outfit) => outfit.id === current.id)) {
      return;
    }
    axios.get(`${process.env.URL}/products/${current.id}/styles`, options).then((data) => {
      const photo = data.data.results[0].photos[0].thumbnail_url;
      const temp = { ...current };
      temp.photo = photo;
      setOutFits([...outFits, temp]);
    }).catch((error) => { console.error('Error getting product:', error); });
  };

  // Set icon onMount
  useEffect(() => {
    setRemove('X');
    // addOutfit();
  }, []);

  return (
    <div id="outFit-prod-list">
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
