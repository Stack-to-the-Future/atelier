import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import './RelPro.css';

const OutfitList = ({
  setCompaired, setModalStatus, setProductInfo, productInfo, setMainProduct, mainProduct,
}) => {
  const [outFits, setOutFits] = useState([]);
  const [remove, setRemove] = useState('');

  const options = { headers: { Authorization: process.env.TOKEN } };
  // Gets main products features
  // const getMainProduct = () => {
  //   axios.get(`${process.env.URL}/${mainProduct.id}/styles`, options).then((data) => {
  //     const photo = data.results[0].photos[0].thumbnail_url;
  //     setMainProduct({ ...mainProduct, photo });
  //   }).catch((error) => { console.error('Error getting product:', error); });
  // };

  // useEffect(() => {
  //   getMainProduct();
  // }, []);

  // adds product to outFit list
  const addOutfit = (obj) => {
    if (outFits.some((outfit) => outfit.id === obj.id)) {
      return;
    }
    setOutFits([...outFits, obj]);
  };

  // adds product to outFit list
  // const addOutfit = (obj) => {
  //   if (outFits.some((outfit) => outfit.id === obj.id)) {
  //     return;
  //   } if (!obj.photo) {
  //     getMainProduct();
  //   }
  //   setOutFits([...outFits, mainProduct]);
  // };

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
          setOutFits={setOutFits}
          gallery={outFits}
          icon={remove}
        />
      </div>
    </div>
  );
};

export default OutfitList;
