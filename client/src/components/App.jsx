import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import QandA from './QandA.jsx';
// import RatingsAndReviews from './RatingsAndReviews.jsx';
import ComparingModal from './RelatedProductsSubFolder/ComparingModal.jsx';
import './App.css';

// chosen product ID -- 40346

const App = () => {
  const [products, setProducts] = useState([]);
  const [productInfo, setProductInfo] = useState({});
  const [compaired, setCompaired] = useState({});
  const [modalStatus, setModalStatus] = useState({ name: '' });

  const options = { headers: { Authorization: process.env.TOKEN } };
  const getProducts = () => {
    axios.get(`${process.env.URL}/products`, options).then((data) => {
      const all = data.data;
      setProducts([...all]);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  // make initial product API call here -- Ming can pass as prop
  const url = `${process.env.URL}/products/40346`;
  useEffect(() => {
    axios.get(url, options)
      .then((response) => setProductInfo(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log('prodInfo:::', productInfo);

  return (
    <div id="app">
      <Overview />
      {modalStatus.name === 'compare'
        ? (
          <ComparingModal
            setModalStatus={setModalStatus}
            products={products}
            compaired={compaired}
          />
        )
        : (
          ''
        )}
      <RelatedProducts
        products={products}
        productInfo={productInfo}
        setModalStatus={setModalStatus}
        setCompaired={setCompaired}
        setProductInfo={setProductInfo}
      />
      <QandA
        setModalStatus={setModalStatus}
        modalStatus={modalStatus}
        productName={productInfo.name}
      />
      {/* <RatingsAndReviews /> */}
    </div>
  );
};

export default App;
