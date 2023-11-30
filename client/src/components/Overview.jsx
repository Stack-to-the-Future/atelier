import React, { useState, useEffect } from 'react';
import Search from './Overview/Search.jsx';
import Announcement from './Overview/Announcement.jsx';
import ImageGallery from './Overview/ImageGallery.jsx';
import ImageGalleryModal from './Overview/ImageGalleryModal.jsx';
import ProductInformation from './Overview/ProductInformation.jsx';
import productAPIFunctions from '../lib/productAPIFunctions.js';
import './App.css';

const Overview = ({ product, ratings }) => {
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [photoIdx, setPhotoIdx] = useState(0);
  console.log(showModal);

  const getStyles = () => {
    productAPIFunctions.getStyles(product.id)
      .then((response) => {
        setStyles([...response.data.results]);
      })
      .catch((err) => console.error(err));
  };

  const changeCurrentStyle = (idx) => setCurrentStyle(idx);

  useEffect(() => {
    getStyles();
  }, [product]);

  return (
    <div id="overview-main">
      <Search />
      <Announcement />
      <div data-testid="overview-gallery-container" id="overview-central">
        {/* eslint-disable-next-line no-nested-ternary */}
        {styles.length ? (
          showModal ? <ImageGalleryModal photo={styles[currentStyle].photos[photoIdx].url} />
            : (
              <ImageGallery
                changeModalStatus={(status) => setShowModal(status)}
                photos={styles[currentStyle].photos}
                photoIdx={photoIdx}
                changePhotoIdx={(newIdx) => setPhotoIdx(newIdx)}
              />
            )
        ) : (
          <div>Image Loading</div>
        )}
        <ProductInformation
          product={product}
          styles={styles}
          currentStyle={currentStyle}
          changeCurrentStyle={changeCurrentStyle}
          ratings={ratings}
        />
      </div>
    </div>
  );
};

export default Overview;
