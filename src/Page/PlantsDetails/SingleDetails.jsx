import React, { useContext } from "react";
import { ThemeContext } from "../../Theme/ThemeContext";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

const SingleDetails = ({ singlePlant }) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

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
  } = singlePlant || {};

  const NextWateringDateConvert = NextWateringDate
    ? new Date(NextWateringDate).toLocaleDateString()
    : "N/A";
  const LastWateredDateConvert = LastWateredDate
    ? new Date(LastWateredDate).toLocaleDateString()
    : "N/A";

  return (
    <div
      className={`min-h-[calc(100vh-210px)] mt-10 rounded-xl ${
        theme === "dark" ? "bg-gray-700 text-white" : "bg-base-200 text-black"
      }`}
    >
      {/*  Back Button */}
      <div className="max-w-6xl mx-auto pt-6 px-4">
        <button
          onClick={() => navigate("/")}
          className="flex btn items-center gap-2 text-sm text-white bg-green-700"
        >
          <FaArrowLeft /> Back Home
        </button>
      </div>

      <div className="max-w-6xl mx-auto my-6 md:my-10 p-6">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/*  Image */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
            <img
              src={photo}
              alt={name}
              className="rounded-xl w-full h-96 object-cover shadow-md"
            />
          </div>

          {/*  Plant Details */}
          <div className="w-full md:w-1/2 space-y-4 md:space-y-5">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p><span className="font-semibold">Category:</span> {Category}</p>
            <p><span className="font-semibold">Health:</span> {Health}</p>
            <p><span className="font-semibold">Watering Frequency:</span> {WateringFrequency}</p>
            <p><span className="font-semibold">Last Watered:</span> {LastWateredDateConvert}</p>
            <p><span className="font-semibold">Next Watering:</span> {NextWateringDateConvert}</p>
            <p className="mt-4"><span className="font-semibold">Care Level:</span> {care}</p>

            {/*  Description */}
            <div className="pt-4 border-t border-gray-300">
              <h3 className="text-xl font-semibold mb-1">Description:</h3>
              <p className="leading-relaxed">{Description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDetails;
