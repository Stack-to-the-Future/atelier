import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import './RelPro.css';

const RelatedProductsList = ({
  products, handleModalStatus, handleCompaired, setProductInfo, ratings,
  relatedProductsId, getMainProduct, current,
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
  // // Getting all related Products photos
  useEffect(() => {
    const getPhotos = () => {
      const promises = relatedProducts.map((product) => {
        if (!product.photo) {
          return axios({
            method: 'GET',
            url: `${process.env.URL}/products/${product.id}/styles`,
            headers: options,
          })
            .then((response) => {
              const { data } = response;
              return { ...product, photo: data.results[0].photos[0].thumbnail_url };
            });
        }
        return Promise.resolve(product);
      });
      Promise.all(promises)
        .then((results) => {
          setToDisplay(results);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };

    getPhotos();
  }, [relatedProducts]);

  useEffect(() => {
    const getToDisplay = () => products.filter((p) => relatedProductsId.includes(p.id));
    setToDisplay(getToDisplay());
  }, [relatedProducts]);

  return (
    <div id="rel-prod-list">
      <Carousel
        handleModalStatus={handleModalStatus}
        handleCompaired={handleCompaired}
        setToDisplay={setToDisplay}
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
