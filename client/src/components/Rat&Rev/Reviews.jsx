import React from 'react';
import ReviewTile from './ReviewTile';

const Reviews = ({ reviews }) => {

  return (<div>
    {
      reviews.map((review, idx) => <ReviewTile key={idx} review={review} />)
    }
  </div>)
}

export default Reviews;