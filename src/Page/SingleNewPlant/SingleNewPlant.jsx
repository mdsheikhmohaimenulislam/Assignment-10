import React, { use } from "react";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import { ThemeContext } from "../../Theme/ThemeContext";

const SingleNewPlant = ({ newPlant }) => {
  const { photo, name, Description, _id } = newPlant || {};
  const {theme} = use(ThemeContext)

  

  return (
    <div>
      <Tooltip
        anchorSelect="#my-anchor-element"
        content="Go to the All Plants Section"
      />
      <div id="my-anchor-element" className={`card  shadow-sm ${theme === "dark"? "bg-gray-600 text-white" : "bg-base-300 text-black"}`}>
        <figure>
          <img src={photo} alt="phot" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{Description}</p>

          <div className="text-center btn border-green-600">
            <Link to={`/NewPlants/${_id}`}>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNewPlant;
