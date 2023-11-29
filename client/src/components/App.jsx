import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import QandA from './QandA.jsx';
// import RatingsAndReviews from './RatingsAndReviews.jsx';
import ComparingModal from './RelatedProductsSubFolder/ComparingModal.jsx';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [ratings, setRatings] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const [productInfo, setProductInfo] = useState({
    id: 40346,
    campus: 'hr-rfp',
    name: 'Morning Joggers',
    slogan: 'Make yourself a morning person',
    description: "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    category: 'Pants',
    default_price: '40.00',
    created_at: '2021-08-13T14:38:44.509Z',
    updated_at: '2021-08-13T14:38:44.509Z',
    features: [
      {
        feature: 'Fabric',
        value: '100% Cotton',
      },
      {
        feature: 'Cut',
        value: 'Skinny',
      },
    ],
  });
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
      url: `${process.env.URL}/reviews/meta/?product_id=${productInfo.id}`,
      headers: { Authorization: process.env.TOKEN },
    })
      .then((response) => setRatings(response.data.ratings))
      .catch((err) => (err));
  };

  // Gets the main products features
  const getMainProduct = (id) => {
    axios.get(`${process.env.URL}/products/${id}`, options)
      .then((response) => {
        setProductInfo(response.data);
      })
      .then(() => getRatings())
      .catch((error) => console.log(error));
  };

  // compare
  const handleCompaired = (obj) => {
    setCompaired(obj);
  };
  // modal status
  const handleModalStatus = (obj) => {
    setModalStatus(obj);
  };

  useEffect(() => {
    getProducts();
    getMainProduct(productInfo.id);
  }, []);

  return (
    <div id="app">
      <Overview product={productInfo} ratings={ratings} />
      {modalStatus.name === 'compare' ? (
        <ComparingModal
          handleModalStatus={handleModalStatus}
          products={products}
          compaired={compaired}
          ratings={ratings}
          current={productInfo}
        />
      ) : (
        ''
      )}
      <RelatedProducts
        products={products}
        current={productInfo}
        handleModalStatus={handleModalStatus}
        handleCompaired={handleCompaired}
        getMainProduct={getMainProduct}
        ratings={ratings}
      />
      <QandA
        setModalStatus={setModalStatus}
        modalStatus={modalStatus}
        productName={productInfo.name}
        productId={productInfo.id}
      />
      {/* <RatingsAndReviews /> */}
    </div>
  );
};

export default App;
