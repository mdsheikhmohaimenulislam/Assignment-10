import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";

const SingleMyPlants = ({ plant, handleDeleted }) => {
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
    _id,
  } = plant || {};

  const remove = (id) => {
    handleDeleted(id);
  };

  const data = new Date(NextWateringDate).toLocaleDateString()

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={photo} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge bg-green-800 text-white">{Category}</div>
          </h2>
          <p className="text-gray-600">{Description}</p>
          <div className="flex mt-2 mb-2 font-extrabold ">
            <p>{data}</p>
            <p>{WateringFrequency}</p>
            <p>{care}</p>
            <p>{LastWateredDate}</p>
            <p>{Health}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/updatePlant/${_id}`}>
              <button className="btn btn-dash btn-success">
                <CiEdit size={25} />
              </button>
            </Link>
            <button
              onClick={() => remove(_id)}
              className="btn btn-dash btn-error"
            >
              <MdDelete size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMyPlants;
