import React from 'react';
import './starRating.css';

function StarRating({ rating, onRatingChange }) {

  const handleRatingClick = (selectedRating) => {
    onRatingChange(selectedRating);
  };

  return (
    <div>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? 'filled' : ''}`}
            onClick={() => handleRatingClick(star)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}

export default StarRating;


