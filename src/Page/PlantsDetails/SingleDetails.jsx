import React, { use } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../../Theme/ThemeContext";

const SingleDetails = (plants) => {

  const {theme} = use(ThemeContext)

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

  const NextWateringDateConvert = new Date(NextWateringDate).toLocaleDateString()
  const LastWateredDateConvert = new Date(LastWateredDate).toLocaleDateString()

  return (
    <div>
      <div className={`card shadow-sm mb-20 p-6 ${theme === "dark"? "bg-gray-600 text-white" : "bg-base-300 text-black"}`}>
        <figure>
          <img width={400} src={photo} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="text-base-600">{Description}</p>
          <div className="flex">
            <div className="flex space-x-10 ">
              <p className="text-xl">{care}</p>
              <p className="text-xl">{WateringFrequency}</p>
              <p className="text-xl">{NextWateringDateConvert}</p>
            </div>

            <p className="text-xl ml-10">{Health}</p>
            <p className="text-xl">{Category}</p>
            <p className="text-xl">{LastWateredDateConvert}</p>
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
