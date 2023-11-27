import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import './RelPro.css';

const RelatedProductsList = ({
  products, setCompaired, setModalStatus, setProductInfo,
  relatedProductsId,
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
  }, [products]);

  const options = { Authorization: process.env.TOKEN };
  // Getting all related Products photos
  useEffect(() => {
    const getPhotos = () => {
      const promises = relatedProducts.map((product) => axios({
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
          setToDisplay([...toDisplay, ...results]);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };

    getPhotos();
  }, [relatedProducts]);

  return (
    <div id="rel-prod-list">
      <Carousel
        setModalStatus={setModalStatus}
        setCompaired={setCompaired}
        setToDisplay={setToDisplay}
        gallery={toDisplay}
        setProductInfo={setProductInfo}
        icon={star}
      />
    </div>
  );
};
export default RelatedProductsList;
