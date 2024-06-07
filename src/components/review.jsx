import React from "react";
import "../css/review.css";

function Reviews({ reviews, onAddReview}){
    return (
        <div className="review-section">
        <h2>Customer Reviews</h2>
        <div className="reviews">
          {reviews.map((review, index) => (
            <div className="review" key={index}>
              <p className="review-text">"{review.text}"</p>
              <p className="review-author">- {review.author}</p>
            </div>
          ))}
        </div>
        <button className="add-review-btn" onClick={onAddReview}>Add Review</button>
      </div>
    )
}

export default Reviews;