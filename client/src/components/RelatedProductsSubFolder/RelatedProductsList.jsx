import React, { useState, useEffect } from 'react';
import productAPIFunctions from '../../lib/productAPIFunctions.js';
import Carousel from './Carousel.jsx';
import './RelPro.css';

const RelatedProductsList = ({
  products, handleModalStatus, handleCompaired, setProductInfo, ratings,
  relatedProductsId, getMainProduct,
}) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [toDisplay, setToDisplay] = useState([]);
  const [star, setStar] = useState('');

  useEffect(() => { setStar('*'); }, []);

  useEffect(() => {
    const getRelatedProducts = () => products.filter((p) => relatedProductsId.includes(p.id));
    setRelatedProducts(getRelatedProducts());
  }, [relatedProductsId]);

  useEffect(() => {
    const getPhotos = () => {
      const promises = relatedProducts.map((product) => {
        if (!product.photo) {
          return productAPIFunctions.getStyles(product.id)
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
    const getToDisplay = () => products.filter((p) => relatedProductsId.includes(p.id));

    getPhotos();
    setToDisplay(getToDisplay());
  }, [relatedProducts]);

  useEffect(() => {
  }, [relatedProducts]);

  return (
    <div data-testid="relProId" id="rel-prod-list">
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
