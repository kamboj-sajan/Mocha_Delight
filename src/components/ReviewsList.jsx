import React from 'react';
import "../css/ReviewsList.css";

function ReviewsList({ reviews }){
  return (
    <div className="reviews-list">
      {reviews.map((review) => (
        <div key={review.id} className="review">
          <h2>{review.name}</h2>
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;
