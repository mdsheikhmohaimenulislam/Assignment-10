import React, { use } from "react";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import { ThemeContext } from "../../Theme/ThemeContext";

const SingleNewPlant = ({ newPlant }) => {
  const { photo, name, Description, _id } = newPlant || {};
  const { theme } = use(ThemeContext);

  return (
    <div>
      <Tooltip
        anchorSelect="#my-anchor-element"
        content="Go to the All Plants Section"
      />
      <div
        id="my-anchor-element"
        className={`card  shadow-sm ${
          theme === "dark" ? "bg-gray-600 text-white" : "bg-base-300 text-black"
        }`}
      >
        <figure>
          <img src={photo} alt="phot" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          {/* Details */}
          <p className={`text-sm  mb-3 {
          theme === "dark" ? "text-gray-600 text-white" : "bg-base-300 text-black"
        }`}>
            {Description.length > 150
              ? `${Description.slice(0, 100)}...`
              : Description}
            <Link
              to={`/NewPlants/${_id}`}
              className={`font-bold ml-1 cursor-pointer ${
          theme === "dark" ? "text-green-500 " : " text-green-600 "
        }`}
            >
              Read More
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleNewPlant;
