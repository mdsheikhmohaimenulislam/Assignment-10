import React from "react";

const SinglePlantsCard = ({plant}) => {
  const { image_url, name } = plant || {};
  

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image_url} alt="plant" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
       <button className="btn w-full ">Buy Now</button>
    </div>
  );
};

export default SinglePlantsCard;
