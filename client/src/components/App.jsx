import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import QandA from './QandA.jsx';
// import RatingsAndReviews from './RatingsAndReviews.jsx';
import AddQuestionModal from './QandASubFolder/AddQuestionModal.jsx';
import ComparingModal from './RelatedProductsSubFolder/ComparingModal.jsx';
import './App.css';

// chosen product ID -- 40346

const App = () => {
  const [products, setProducts] = useState([]);
  const [modalStatus, setModalStatus] = useState('');

  const getProducts = () => {
    const options = { headers: { Authorization: process.env.TOKEN } };
    axios.get(`${process.env.URL}/products`, options).then((data) => {
      const all = data.data;
      setProducts([...all]);
    });
  };

  const changeModal = (targetString) => {
    setModalStatus(targetString);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(modalStatus);

  switch (modalStatus) {
    case 'addQuestion':
  <AddQuestionModal />;
      break;
    case 'addAnswer':
      break;
    case 'comparing':
  <ComparingModal />;
      break;
    default:
  <div id="app">
    <Overview />
    <RelatedProducts products={products} changeModal={changeModal} />
    <QandA changeModal={changeModal} />
    {/* <RatingsAndReviews /> */}
  </div>;
  }

  return (
    <div id="app">
      {/* <Overview /> */}
      <RelatedProducts products={products} />
      <QandA />
      {/* <RatingsAndReviews /> */}
    </div>
  );
};

export default App;
