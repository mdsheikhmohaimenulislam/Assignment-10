import React from "react";
import { Link } from "react-router";

const SinglePlantsCard = ({ plant }) => {
  const { image_url, name, id } = plant || {};

  return (
    <div className="card bg-base-100 shadow-sm mb-10">
      <figure>
        <img src={image_url} alt="plant" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
      <Link to={`/Details/${id}`}>
        <button className="btn w-full ">View Details</button>
      </Link>
    </div>
  );
};

export default SinglePlantsCard;
