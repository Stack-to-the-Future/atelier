import React from 'react';
import ReviewTile from './ReviewTile.jsx';

const Reviews = ({ reviews }) => (<div>
    {
      reviews.map((review, idx) => <ReviewTile key={idx} review={review} />)
    }
  </div>);

export default Reviews;
