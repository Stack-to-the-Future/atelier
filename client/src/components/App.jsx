/* eslint-disable no-console */
import React from 'react';
import Overview from './Overview.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import QandA from './QandA.jsx';
import RatingsAndReviews from './RatingsAndReviews.jsx';
import './App.css';

// chosen product ID -- 40346

const App = () => (<div id="app">
  <Overview />
  <RelatedProducts />
  <QandA />
  <RatingsAndReviews />
</div>
);

export default App;
