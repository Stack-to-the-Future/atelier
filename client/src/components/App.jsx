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
  const [ratings, setRatings] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const [productInfo, setProductInfo] = useState({});
  const [compaired, setCompaired] = useState({});
  const [modalStatus, setModalStatus] = useState({ name: '', data: '' });

  const options = { headers: { Authorization: process.env.TOKEN } };

  // Gets all the available products
  const getProducts = () => {
    axios.get(`${process.env.URL}/products`, options).then((data) => {
      const all = data.data;
      setProducts([...all]);
    }).catch((error) => { console.error('Error getting products:', error); });
  };
  const getRatings = () => {
    axios({
      method: 'GET',
      url: `${process.env.URL}/reviews/meta/?product_id=${40346}`,
      headers: { Authorization: process.env.TOKEN },
    })
      .then((response) => setRatings(response.data.ratings))
      .catch((err) => console.log(err));
  };
  const getRatings = () => {
    axios({
      method: 'GET',
      url: `${process.env.URL}/reviews/meta/?product_id=${40346}`,
      headers: { Authorization: process.env.TOKEN },
    })
      .then((response) => setRatings(response.data.ratings))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
    getRatings();
  }, []);

  // Gets main products features
  // setMainProduct({ ...products[2] });
  // const getMainProduct = (id) => {
  //   axios.get(`${process.env.URL}/products/${id}/styles`, options).then((data) => {
  //     const photo = data.results[0].photos[0].thumbnail_url;
  //     console.log('photo::', data);
  //     setMainProduct({ data });
  //   }).catch((error) => { console.error('Error getting product:', error); });
  // };

  // useEffect(() => {
  //   // getProducts();
  //   getMainProduct();
  // }, [products]);
  console.log('productInfo::', productInfo);

  // make initial product API call here -- Ming can pass as prop
  const url = `${process.env.URL}/products/40346`;
  useEffect(() => {
    axios
      .get(url, options)
      .then((response) => setProductInfo(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="app">
      <Overview product={productInfo} ratings={ratings} />
      {modalStatus.name === 'compare' ? (
        <ComparingModal
          setModalStatus={setModalStatus}
          products={products}
          compaired={compaired}
        />
      ) : (
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
        productId={40348}
      />
      {/* <RatingsAndReviews /> */}
    </div>
  );
};

export default App;
