import React from "react";

const SingleNewPlant = ({ newPlant }) => {

  const { photo, name, Description } = newPlant || {};

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            src={photo}
            alt="phot"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            {Description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleNewPlant;
