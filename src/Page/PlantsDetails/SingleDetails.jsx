import React, { use, useState } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../../Theme/ThemeContext";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const SingleDetails = (plants) => {
  const { theme } = use(ThemeContext);
  const { user } = use(AuthContext);

  const {
    photo,
    name,
    care,
    WateringFrequency,
    NextWateringDate,
    LastWateredDate,
    Health,
    Description,

    Category,
  } = plants?.singlePlant || {};

  const NextWateringDateConvert = new Date(
    NextWateringDate
  ).toLocaleDateString();
  const LastWateredDateConvert = new Date(LastWateredDate).toLocaleDateString();

  // Assume these are your states
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [reviewsList, setReviewsList] = useState([]);

  // When submitting a review
  const handleFeedBack = () => {
    if (!review || rating === 0)
      return alert("Please provide a rating and a review.");

    const newReview = {
      comment: review,
      rating: rating,
      user: "Anonymous", // Optional field
      date: new Date().toLocaleDateString(), // Optional field
    };

    setReviewsList([newReview, ...reviewsList]);
    setReview("");
    setRating(0);
  };

  return (
    <div>
      <div
        className={`card overflow-scroll shadow-sm mb-20 p-6 ${
          theme === "dark" ? "bg-gray-600 text-white" : "bg-base-300 text-black"
        }`}
      >
        <figure>
          <img width={400} src={photo} alt="photo" />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="text-base-600 md:w-3/5">{Description}</p>
          <div className="flex">
            <div className="md:flex flex-col space-y-3 space-x-10 ">
              <p className="text-xl">{care}</p>
              <p className="text-xl">{WateringFrequency}</p>
              <p className="text-xl">{NextWateringDateConvert}</p>
            </div>
            <div className="md:flex flex-col space-y-3">
              <p className="text-xl ml-10">{Health}</p>
              <p className="text-xl">{Category}</p>
              <p className="text-xl">{LastWateredDateConvert}</p>
            </div>
          </div>
          <div className="mt-10">
            {/* Title and Rating */}
            <div className="flex justify-between mb-5">
              <div>
                <h3 className="text-sm md:text-xl font-bold mb-2">
                  Leave a Review
                </h3>
              </div>
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    size={24}
                    className={`cursor-pointer ${
                      star <= rating ? "text-yellow-500" : "text-gray-400"
                    }`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            {/* Review input */}
            <div>
              <input
                type="text"
                placeholder="Write your review"
                className={`input input-bordered w-full mb-2 ${theme === "dark"? "text-black":"text-black"}`}
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                onClick={handleFeedBack}
                className="btn border-blue-500 text-blue-600"
              >
                Submit Review
              </button>
            </div>

            {/* Display reviews */}
            <div className="mt-5 space-y-3">
              {reviewsList.map((res, index) => (
                <div
                  key={index}
                  className="p-3 border border-accent rounded bg-gray-100"
                >
                  {/* Star Rating */}
                  <div className="flex items-center mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        size={16}
                        className={`${
                          star <= res.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-sm text-gray-800">{res.comment}</p>

                  {/* Reviewer info and date */}
                  <p className="text-xs text-gray-500 mt-1">
                    By {user.displayName || user.displayName} on{" "}
                    {res.date || "N/A"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Link to="/">
          <button className="btn w-full text-green-600 border-green-500">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleDetails;
