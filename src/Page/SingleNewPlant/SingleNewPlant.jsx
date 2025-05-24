import React from "react";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";

const SingleNewPlant = ({ newPlant }) => {
  const { photo, name, Description, _id } = newPlant || {};

  return (
    <div>
      <Tooltip
        anchorSelect="#my-anchor-element"
        content="Go to the All Plants Section"
      />
      <div id="my-anchor-element" className="card bg-base-100 shadow-sm">
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
