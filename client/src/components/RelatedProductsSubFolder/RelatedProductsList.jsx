import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import './RelPro.css';

const RelatedProductsList = ({ products, setCompaired, setModalStatus, relatedProductsId,  setToDisplay, toDisplay }) => {
  

  const getRelatedProducts = () => products.filter((p) => relatedProductsId.includes(p.id));
  return (
    <div id="rel-prod-list">
      <Carousel
        relatedProducts={getRelatedProducts()}
        setModalStatus={setModalStatus}
        setCompaired={setCompaired}
        toDisplay={toDisplay}
      />
    </div>
  );
};
export default RelatedProductsList;
