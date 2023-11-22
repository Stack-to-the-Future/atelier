import React from 'react';
import ReviewTile from './ReviewTile.jsx';

const Reviews = ({ reviews }) => (
  <div>
    {
      reviews.map((review) => <ReviewTile key={review.review_id} review={review} />)
    }
  </div>
);

export default Reviews;
