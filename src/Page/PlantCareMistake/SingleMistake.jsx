import React from "react";

const SingleMistake = ({ flower }) => {
  const { name, description, img } = flower || {};

  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img src={img} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      ;
    </div>
  );
};

export default SingleMistake;
