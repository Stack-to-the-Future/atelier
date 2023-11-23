import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import QandA from './QandA.jsx';
// import RatingsAndReviews from './RatingsAndReviews.jsx';
import AddQuestionModal from './QandASubFolder/AddQuestionModal.jsx';
import AddAnswerModal from './QandASubFolder/AddAnswerModal.jsx';
import ComparingModal from './RelatedProductsSubFolder/ComparingModal.jsx';
import './App.css';

// chosen product ID -- 40346

const App = () => {
  const [products, setProducts] = useState([]);
  const [compaired, setCompaired] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalStatus, setModalStatus] = useState({ name: '' });

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

  console.log(showModal);
  console.log(compaired);
  console.log(products[0]);

  return (
    <div id="app">
      {modalStatus.name === 'question' ? (
        <AddQuestionModal setModalStatus={setModalStatus} />
      ) : (
        ''
      )}
      {modalStatus.name === 'answer' ? (
        <AddAnswerModal setModalStatus={setModalStatus} />
      ) : (
        ''
      )}
      <Overview />
      {showModal
        ? (
          <ComparingModal
            setShowModal={setShowModal}
            products={products}
            compairedProduct={compaired}
          />
        )
        : (
          <RelatedProducts
            products={products}
            setShowModal={setShowModal}
            setCompaired={setCompaired}
          />
        )}
      <QandA setModalStatus={setModalStatus} />
      {/* <RatingsAndReviews /> */}
    </div>
  );
};

export default App;
