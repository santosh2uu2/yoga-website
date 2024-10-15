import React, { useEffect, useState } from 'react'

const CourseDetails = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/reviews.json')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="container mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center">
            <img
              src="https://images.healthshots.com/healthshots/en/uploads/2023/01/05140940/camel-pose-1024x576.jpg"
              alt="Sunrise Vinyasa Flow"
              className="w-full md:w-1/2 rounded-lg"
            />
            <div className="md:ml-6">
              <h1 className="text-3xl font-bold text-gray-900">Sunrise Vinyasa Flow</h1>
              <h2 className="text-xl text-gray-700">Energizing Morning Yoga</h2>
              <p className="text-gray-600 mt-2">Price: $50</p>
              <p className="text-gray-600">Category: New</p>
              <p className="text-gray-600 mt-4"><strong>Location:</strong> Studio A</p>
              <p className="text-gray-600"><strong>Instructor:</strong> Jane Smith</p>
              <p className="text-gray-600"><strong>Days Conducted:</strong> Monday, Wednesday, Friday</p>
              <p className="text-gray-600"><strong>Current Teachings:</strong> Vinyasa Flow, Breathwork</p>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900">Reviews</h3>
            <div id="reviews" className="mt-4 space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-md">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className={`w-6 h-6 ${starIndex < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    ))}
                    <p className="ml-4 text-gray-800 font-semibold">{review.user}</p>
                  </div>
                  <p className="mt-2 text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
