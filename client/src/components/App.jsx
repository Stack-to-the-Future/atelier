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
  const [productInfo, setProductInfo] = useState(null);
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
  const getRatings = (id) => {
    axios({
      method: 'GET',
      url: `${process.env.URL}/reviews/meta/?product_id=${id}`,
      headers: { Authorization: process.env.TOKEN },
    })
      .then((response) => setRatings(response.data.ratings))
      .catch((err) => console.log(err));
  };

  // Gets the main products features
  const getMainProduct = (id) => {
    console.log('ID..', id);
    axios.get(`${process.env.URL}/products/${id}`, options)
      .then((response) => {
        console.log('Data..', response.data);
        setProductInfo(response.data);
      })
      .then(() => getRatings(id))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
    getMainProduct(40346);
  }, []);

  useEffect(() => {
    console.log(productInfo);
  }, [productInfo]);

  // make initial product API call here -- Ming can pass as prop
  // const url = `${process.env.URL}/products/40346`;
  // useEffect(() => {
  //   axios
  //     .get(url, options)
  //     .then((response) => setProductInfo(response.data))
  //     .catch((error) => console.log(error));
  // }, []);

  // compare
  const handleCompaired = (obj) => {
    setCompaired(obj);
  };
  // modal status
  const handleModalStatus = (obj) => {
    setCompaired(obj);
  };
  // handle product Info change
  const handleProductInfo = (obj) => {
    setProductInfo({ ...obj });
  };

  return productInfo && (
    <div id="app">
      <Overview product={productInfo} ratings={ratings} />
      {modalStatus.name === 'compare' ? (
        <ComparingModal
          handleModalStatus={handleModalStatus}
          products={products}
          compaired={compaired}
        />
      ) : (
        ''
      )}
      <RelatedProducts
        products={products}
        current={productInfo}
        handleModalStatus={handleModalStatus}
        handleCompaired={handleCompaired}
        handleProductInfo={handleProductInfo}
        getMainProduct={getMainProduct}
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
