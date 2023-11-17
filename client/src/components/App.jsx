import React from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import QandA from './QandA.jsx';
import RatingsAndReviews from './RatingsAndReviews.jsx';
// import Styles from '../dist/styles.css';

// URL and headers
const headers = { headers: { Authorization: `${process.env.TOKEN}` } };

// chosen product ID
// const productID = 40346;
const url = process.env.URL;

// initial GET request that helped us view data
axios.get(url, headers)
  .then((response) => console.log(response.data))
  .catch((err) => console.error(err));

const App = () => (<div>
  Hello Everyone!
  <Overview />
  <RelatedProducts />
  <QandA />
  <RatingsAndReviews />
</div>
);

export default App;
