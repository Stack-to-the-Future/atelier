import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductsList from './RelatedProductsSubFolder/RelatedProductsList.jsx';
import OutfitList from './RelatedProductsSubFolder/OutfitList.jsx';
import './RelatedProductsSubFolder/RelPro.css';

const RelatedProducts = ({
  products, current, handleModalStatus, handleCompaired,
  getMainProduct, ratings,
}) => {
  const [relatedProductsId, setRelatedProductsId] = useState([]);
  const options = { headers: { Authorization: process.env.TOKEN } };
  // Get related ID's
  useEffect(() => {
    if (current) {
      axios.get(`${process.env.URL}/products/${current.id}/related`, options)
        .then((response) => {
          const arr = response.data;
          setRelatedProductsId(arr);
        })
        .catch((err) => console.error(err));
    }
  }, [current]);

  return (
    <div id="relpro">
      <h5 id="rel-prod-title">RELATED PRODUCTS</h5>
      <RelatedProductsList
        handleModalStatus={handleModalStatus}
        handleCompaired={handleCompaired}
        products={products}
        getMainProduct={getMainProduct}
        relatedProductsId={relatedProductsId}
        current={current}
        ratings={ratings}
      />
      <br />
      <h5 id="outFit-prod-title">YOUR OUTFIT</h5>
      <OutfitList
        handleModalStatus={handleModalStatus}
        handleCompaired={handleCompaired}
        current={current}
        getMainProduct={getMainProduct}
        ratings={ratings}
      />
    </div>
  );
};

export default RelatedProducts;
