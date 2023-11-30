import React, { useState, useEffect } from 'react';
import productAPIFunctions from '../lib/productAPIFunctions.js';
import RelatedProductsList from './RelatedProductsSubFolder/RelatedProductsList.jsx';
import OutfitList from './RelatedProductsSubFolder/OutfitList.jsx';
import './RelatedProductsSubFolder/RelPro.css';

const RelatedProducts = ({
  products, current, handleModalStatus, handleCompaired,
  getMainProduct, ratings,
}) => {
  const [relatedProductsId, setRelatedProductsId] = useState([]);

  useEffect(() => {
    if (current) {
      productAPIFunctions.getRelatedProducts(current.id)
        .then((response) => {
          const arr = response.data;
          setRelatedProductsId(arr);
        })
        .catch((err) => console.error(err));
    }
  }, [current]);
  console.log(current); // delete this *****************************
  return (
    <div id="relpro">
      <p id="rel-prod-title">RELATED PRODUCTS</p>
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
      <p id="outFit-prod-title">YOUR OUTFIT</p>
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
