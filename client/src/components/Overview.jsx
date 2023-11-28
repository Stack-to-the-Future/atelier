import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Overview/Search.jsx';
import Announcement from './Overview/Announcement.jsx';
import ImageGallery from './Overview/ImageGallery.jsx';
import ProductInformation from './Overview/ProductInformation.jsx';
import './App.css';

const Overview = ({ product, ratings }) => {
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState(0);

  const getStyles = () => {
    const url = `${process.env.URL}/products/40346/styles`;
    axios({
      method: 'GET',
      url,
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then((response) => {
        setStyles([...response.data.results]);
      })
      .catch((err) => console.error(err));
  };

  const changeCurrentStyle = (idx) => setCurrentStyle(idx);

  useEffect(() => {
    getStyles();
  }, []);

  return (
    <div id="overview-main">
      <Search />
      <Announcement />
      <div data-testid="overview-gallery-container" id="overview-central">
        {styles.length ? (
          <ImageGallery photos={styles[currentStyle].photos} />
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
