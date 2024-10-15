import React, { useState } from 'react';
import axios from 'axios';

function ReviewForm({ courseId, userId }) {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4001/reviews', {
        courseId,
        userId,
        rating,
        comment,
      });
      alert('Review submitted!');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 p-4 border rounded-lg bg-white shadow-md">
      <h2 className="text-xl mb-4">Submit a Review</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Rating</label>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full px-3 py-2 border rounded"
        >
          {[...Array(5)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1} Star{index > 0 ? 's' : ''}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit Review
      </button>
    </form>
  );
}

export default ReviewForm;
