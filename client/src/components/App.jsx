import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import QandA from './QandA.jsx';
// import RatingsAndReviews from './RatingsAndReviews.jsx';
import AddQuestionModal from './QandASubFolder/AddQuestionModal.jsx';
import AddAnswerModal from './QandASubFolder/AddAnswerModal.jsx';
import './App.css';

// chosen product ID -- 40346

function App() {
  const [products, setProducts] = useState([]);
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

  switch (modalStatus.name) {
    case 'question':
      return <AddQuestionModal setModalStatus={setModalStatus} />;
    case 'answer':
      return <AddAnswerModal setModalStatus={setModalStatus}/>;
    default:
      return (
        <div id="app">
          <Overview />
          <RelatedProducts products={products} />
          <QandA setModalStatus={setModalStatus}/>
          {/* <RatingsAndReviews /> */}
        </div>
      );
  }

  // return (
  //   <div id="app">
  //     <Overview />
  //     <RelatedProducts products={products} />
  //     <QandA />
  //     {/* <RatingsAndReviews /> */}
  //   </div>
  // );
}

export default App;
