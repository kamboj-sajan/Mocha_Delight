import React, { useState } from 'react';
import Modal from "react";
import "../css/AddReviewModal.css"

Modal.setAppElement('#root');

function AddReviewModal({ isOpen, onRequestClose, onSubmit }) {
  const [reviewText, setReviewText] = useState('');
  const [reviewAuthor, setReviewAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ text: reviewText, author: reviewAuthor });
    setReviewText('');
    setReviewAuthor('');
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Review"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Add Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="reviewText">Review</label>
          <textarea
            id="reviewText"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reviewAuthor">Author</label>
          <input
            type="text"
            id="reviewAuthor"
            value={reviewAuthor}
            onChange={(e) => setReviewAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
        <button type="button" className="cancel-btn" onClick={onRequestClose}>Cancel</button>
      </form>
    </Modal>
  );
};

export default AddReviewModal;
