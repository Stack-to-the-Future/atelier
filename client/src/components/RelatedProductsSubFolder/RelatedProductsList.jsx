import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import './RelPro.css';

const RelatedProductsList = ({ products }) => {
  const [relatedProductsId, setRelatedProductsId] = useState([]);
  const options = { headers: { Authorization: process.env.TOKEN } };
  useEffect(
    () => {
      axios.get(`${process.env.URL}/products/40346/related`, options)
        .then((response) => {
          const arr = response.data;
          setRelatedProductsId([...arr]);
        })
        .catch((err) => console.error(err));
    },
    [],
  );

  const getRelatedProducts = () => products.filter((p) => relatedProductsId.includes(p.id));
  return (
    <div id="rel-prod-list">
      <Carousel relatedProducts={getRelatedProducts()} />
    </div>
  );
};
export default RelatedProductsList;
