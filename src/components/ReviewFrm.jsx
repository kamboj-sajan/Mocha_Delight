import React, { useState } from "react";
import axios from "axios";
import "../css/ReviewForm.css";

function ReviewForm({ fetchReviews }){
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://backend-one-flame.vercel.app/reviews', { name, review });
    fetchReviews();
    setName('');
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
