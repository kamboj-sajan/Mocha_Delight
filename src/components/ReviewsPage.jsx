import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewForm from "./ReviewFrm.jsx";
import ReviewsList from './ReviewsList.jsx';
import "../css/ReviewsPage.css";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const response = await axios.get('https://backend-ashen-pi.vercel.app/reviews');
    setReviews(response.data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="reviews-page">
    <div className="reviews-container">
      <h1>Reviews for Cafe Mocha Delight</h1>
      <ReviewForm fetchReviews={fetchReviews} />
      <ReviewsList reviews={reviews} />
    </div>
  </div>
  );
};

export default ReviewsPage;
