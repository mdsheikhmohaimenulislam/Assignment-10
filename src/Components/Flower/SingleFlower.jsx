import React from "react";

const SingleFlower = ({ flower }) => {


  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img src={flower.image_url} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{flower.name}</h2>
          <p>{flower.description}</p>
        </div>
      </div>
      ;
    </div>
  );
};

export default SingleFlower;
