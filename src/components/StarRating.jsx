import React, { useState } from 'react';

function StarRating() {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
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
        <p>{rating}/5</p>
      </div>
    </div>
  );
}

export default StarRating;

