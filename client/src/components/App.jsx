import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import QandA from './QandA.jsx';
import RatingsAndReviews from './RatingsAndReviews.jsx';
import './App.css';

// chosen product ID -- 40346

const App = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    const options = { headers: { Authorization: process.env.TOKEN } };
    axios.get(`${process.env.URL}/products`, options).then((data) => {
      const all = data.data;
      setProducts([...all]);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div id="app">
      <Overview />
      <RelatedProducts products={products} />
      <QandA />
      <RatingsAndReviews />
    </div>
  );
};

export default App;
