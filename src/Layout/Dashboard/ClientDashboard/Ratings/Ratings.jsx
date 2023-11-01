import React, { useState } from 'react';

const Ratings = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'John Doe',
      rating: 4,
      review: 'Great product! I love it.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 5,
      review: 'This product is amazing!',
    },
  ]);
  const [newReview, setNewReview] = useState({
    name: '',
    title: '',
    rating: 5, // Set a default rating
    review: '',
  });

  const calculateAverageRating = () => {
    if (reviews.length === 0) {
      return 0;
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: name === 'rating' ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { id: reviews.length + 1, ...newReview }]);
    setNewReview({ name: '', title: '', rating: 5, review: '' }); // Reset the form
  };

  return (
    <div className="max-w-md w-[1100px] mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Product Reviews</h2>

      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to review this product!</p>
      ) : (
        <>
          <div className="mb-4">
            <p className="text-lg font-semibold">Average Rating: {calculateAverageRating().toFixed(1)}</p>
          </div>

          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-lg font-semibold">{review.name}</p>
                  <p className="text-gray-600">Rating: {review.rating}</p>
                </div>
                <p>{review.review}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="mt-4">
        {/* Add a form to allow users to submit their own reviews */}
        <h3 className="text-lg font-semibold mb-2">Write a Review</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-gray-600 font-semibold mb-1" htmlFor="name">
              Your Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={newReview.name}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-600 font-semibold mb-1" htmlFor="title">
              Review Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={newReview.title}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-600 font-semibold mb-1" htmlFor="rating">
              Rating:
            </label>
            <input
              type="number"
              name="rating"
              id="rating"
              value={newReview.rating}
              onChange={handleInputChange}
              min="1"
              max="5"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-1" htmlFor="review">
              Review:
            </label>
            <textarea
              name="review"
              id="review"
              value={newReview.review}
              onChange={handleInputChange}
              className="input input-bordered w-full h-20"
              required
            />
          </div>
          <button type="submit" className="btn bg-cyan-600 text-white">
            Submit Review
          </button>
        </form>
        {/* Add form fields for user's name, rating, and review */}
      </div>
    </div>
  );
};

export default Ratings;
