import React, { useState, useEffect } from 'react';
import Overview from './Overview.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import QandA from './QandA.jsx';
import ComparingModal from './RelatedProductsSubFolder/ComparingModal.jsx';
import productAPIFunctions from '../lib/productAPIFunctions.js';
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

  const getProducts = () => {
    productAPIFunctions.getProducts()
      .then((data) => {
        const all = data.data;
        setProducts([...all]);
      }).catch((error) => { console.error('Error getting products:', error); });
  };

  const getRatings = () => {
    productAPIFunctions.getRatings(productInfo.id)
      .then((response) => setRatings(response.data.ratings))
      .catch((err) => (err));
  };

  const getMainProduct = () => {
    productAPIFunctions.getProduct(productInfo.id)
      .then((response) => {
        setProductInfo(response.data);
      })
      .then(() => getRatings())
      .catch((error) => console.log(error));
  };

  const handleCompaired = (obj) => {
    setCompaired(obj);
  };
  const handleModalStatus = (obj) => {
    setModalStatus(obj);
  };

  useEffect(() => {
    getProducts();
    getMainProduct();
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
    </div>
  );
};

export default App;
