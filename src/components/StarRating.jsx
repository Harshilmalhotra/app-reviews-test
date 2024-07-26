// src/components/StarRating.js
import React from 'react';

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="flex items-center">
      {stars.map((star) => (
        <svg
          key={star}
          className={`h-8 w-8 ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 15l-5.66 3.73 1.83-6.1L2 7.6l6.21-.52L10 2l1.79 5.08 6.21.52-4.17 4.03 1.83 6.1L10 15z"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
