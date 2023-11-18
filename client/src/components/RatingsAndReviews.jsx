import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Ratings from './Rat&Rev/Ratings.jsx';
import Reviews from './Rat&Rev/Reviews.jsx';
import './App.css';

const RatingsAndReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = `${process.env.URL}/reviews/?product_id=40346`;

    axios(url, {
      method: 'GET',
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then((response) => {
        setReviews(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (<div id='ratrev'>
    <p>Ratings & Reviews</p>
    <Ratings />
    <Reviews reviews={reviews} />
  </div>);
};
export default RatingsAndReviews;
