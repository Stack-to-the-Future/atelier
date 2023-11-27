import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductsList from './RelatedProductsSubFolder/RelatedProductsList.jsx';
import OutfitList from './RelatedProductsSubFolder/OutfitList.jsx';
import './RelatedProductsSubFolder/RelPro.css';

const RelatedProducts = ({
  products, productInfo, setModalStatus, setCompaired, setProductInfo,
}) => {
  const [relatedProductsId, setRelatedProductsId] = useState([]);

  const options = { headers: { Authorization: process.env.TOKEN } };
  // Get related ID's
  useEffect(() => {
    axios.get(`${process.env.URL}/products/40346/related`, options)
      .then((response) => {
        const arr = response.data;
        setRelatedProductsId([...arr]);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div id="relpro">
      <h5 id="rel-prod-title">RELATED PRODUCTS</h5>
      <RelatedProductsList
        setModalStatus={setModalStatus}
        products={products}
        setCompaired={setCompaired}
        setProductInfo={setProductInfo}
        relatedProductsId={relatedProductsId}
      />
      <br />
      <h5 id="outFit-prod-title">YOUR OUTFIT</h5>
      <OutfitList
        setModalStatus={setModalStatus}
        productInfo={productInfo}
        setCompaired={setCompaired}
        setProductInfo={setProductInfo}
      />
    </div>
  );
};

export default RelatedProducts;
