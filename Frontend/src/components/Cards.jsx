import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // Import Font Awesome Star Icon
import { Link } from 'react-router-dom'; // Import Link from React Router

function Cards({ item }) {
  const [rating, setRating] = useState(item.averageRating || 0); // Average rating
  const [hover, setHover] = useState(null); // For star hover effect
  const [userRating, setUserRating] = useState(0); // User's rating before submission
  const [isSubmitting, setIsSubmitting] = useState(false); // To show loading state

  // Handle rating submission
  const submitRating = async () => {
    if (userRating === 0) return; // Do nothing if no rating is selected

    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/rate-course/${item.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating: userRating }),
      });

      if (response.ok) {
        const data = await response.json();
        setRating(data.averageRating); // Update the average rating from the response
        setUserRating(0); // Reset user rating
      } else {
        console.error("Failed to submit rating.");
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 transform transition-transform dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <Link to={`/course${item.id}`}>
            <img className="w-full h-[300px] object-cover cursor-pointer" src={item.image} alt={item.name} />
          </Link>
        </figure>
        <div className="card-body">
          <h2 className="card-title flex items-center">
            {item.name}
            <div className="flex ml-2">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={index < rating ? "text-yellow-500" : "text-gray-300"} // Show filled stars up to the rating value
                />
              ))}
            </div>
            <div className="badge badge-secondary ml-2">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
              <a href="/buynow">Buy Now</a>
            </div>
          </div>

          {/* Rating Input */}
          <div className="mt-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`cursor-pointer ${index < (hover || userRating) ? "text-yellow-500" : "text-gray-300"}`}
                  onClick={() => setUserRating(index + 1)}
                  onMouseEnter={() => setHover(index + 1)}
                  onMouseLeave={() => setHover(null)}
                />
              ))}
            </div>
            <button
              onClick={submitRating}
              disabled={isSubmitting}
              className={`mt-2 ${isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'} text-white px-4 py-2 rounded-md duration-300`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Rating'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
