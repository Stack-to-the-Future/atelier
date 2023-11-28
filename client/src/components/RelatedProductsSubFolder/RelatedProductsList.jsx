import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import './RelPro.css';

const RelatedProductsList = ({
  products, handleModalStatus, handleCompaired, setProductInfo, ratings,
  relatedProductsId, handleProductInfo, getMainProduct, current,
}) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [toDisplay, setToDisplay] = useState([]);
  const [star, setStar] = useState('');

  // Set icon onMount
  useEffect(() => { setStar('*'); }, []);
  // gathering related Products
  useEffect(() => {
    const getRelatedProducts = () => products.filter((p) => relatedProductsId.includes(p.id));
    setRelatedProducts(getRelatedProducts());
  }, [current]);

  const options = { Authorization: process.env.TOKEN };
  // Getting all related Products photos
  useEffect(() => {
    const getPhotos = () => {
      const promises = products.map((product) => axios({
        method: 'GET',
        url: `${process.env.URL}/products/${product.id}/styles`,
        headers: options,
      }).then((response) => {
        const { data } = response;
        return {
          ...product,
          photo: data.results[0].photos[0].thumbnail_url,
        };
      }));

      Promise.all(promises)
        .then((results) => {
          setRelatedProducts(results);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };

    getPhotos();
  }, [current]);

  useEffect(() => {
    const getToDisplay = () => relatedProducts.filter((p) => relatedProductsId.includes(p.id));
    setToDisplay(getToDisplay());
  }, [relatedProducts]);
  // console.log(toDisplay);

  return (
    <div id="rel-prod-list">
      <Carousel
        handleModalStatus={handleModalStatus}
        handleCompaired={handleCompaired}
        setToDisplay={setToDisplay}
        handleProductInfo={handleProductInfo}
        getMainProduct={getMainProduct}
        gallery={toDisplay}
        setProductInfo={setProductInfo}
        icon={star}
        ratings={ratings}
      />
    </div>
  );
};
export default RelatedProductsList;
