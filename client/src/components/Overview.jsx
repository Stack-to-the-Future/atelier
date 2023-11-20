import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Overview/Search.jsx";
import Announcement from "./Overview/Announcement.jsx";
import ImageGallery from "./Overview/ImageGallery.jsx";
import ProductInformation from "./Overview/ProductInformation.jsx";
import "./App.css";

const Overview = () => {
  const [styles, setStyles] = useState([]);
  const [product, setProduct] = useState([]);

  const getProduct = () => {
    const url = `${process.env.URL}/products/40346`;
    axios({
      method: "GET",
      url,
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then((response) => setProduct(response.data))
      .catch((err) => console.err(err));
  };

  const getStyles = () => {
    const url = `${process.env.URL}/products/40346/styles`;
    axios({
      method: "GET",
      url,
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then((response) => {
        setStyles(response.data.results);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getProduct();
    getStyles();
  }, []);

  return (
    <div id="overview-main">
      <Search />
      <Announcement />
      <div id="overview-central">
        {styles.length ? (
          <ImageGallery photos={styles[0].photos} />
        ) : (
          <div>Image Loading</div>
        )}
        <ProductInformation product={product} styles={styles} />
      </div>
    </div>
  );
};

export default Overview;
